/* Local reference interactions only. No storage, telemetry or network writes. */
'use strict';
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

let toastTrigger;
function showToast(title, body) {
  if (!$('#toast').contains(document.activeElement)) {
    const active = document.activeElement;
    const activeDialog = active.closest?.('dialog');
    toastTrigger = activeDialog && !activeDialog.open ? openers.get(activeDialog.id) : active;
  }
  $('#toast-title').textContent = title;
  $('#toast-body').textContent = body;
  $('#toast').hidden = false;
}
$$('[data-toast]').forEach(button => button.addEventListener('click', () => {
  const [title, body] = button.dataset.toast.split('|');
  showToast(title, body);
}));
$('#toast-close').addEventListener('click', () => {
  const heldFocus = $('#toast').contains(document.activeElement);
  $('#toast').hidden = true;
  if (heldFocus && toastTrigger?.isConnected) toastTrigger.focus();
});

const listingDetails = {
  bulk: {tag:'Synthetic changes',title:'Review listing changes',description:'3 sample changes are ready. Saving creates a local demo confirmation; nothing will be published.',name:'Everyday carry bag · DEMO-BAG-01',lines:['Current: Everyday bag','Proposed: Everyday carry bag'],note:'2 more example changes: image order and description. Source: synthetic design sample, 02 Nov 2026.',editable:true},
  bag: {tag:'Synthetic change',title:'Review Everyday carry bag',description:'Review one proposed title change. Saving creates a local demo confirmation; nothing will be published.',name:'Everyday carry bag · DEMO-BAG-01',lines:['Current: Everyday bag','Proposed: Everyday carry bag','Stock: 84 units · Marketplace A'],note:'Source: synthetic design sample, 02 Nov 2026, 10:30 IST. You can save a draft; publishing requires an administrator.',editable:true},
  cup: {tag:'Synthetic listing · view only',title:'Stoneware cup set',description:'This listing is live in the example. No change is proposed or connected.',name:'Stoneware cup set · DEMO-CUP-02',lines:['Status: Live · Marketplace B','Stock: 128 units','Last synced: 01 Nov 2026, 18:00 IST · stale'],note:'Source: synthetic design sample. Refresh the source before acting. This view has no save or publish action.',editable:false},
  lamp: {tag:'Synthetic listing · view only',title:'Portable desk lamp',description:'This listing needs review in the example. No specific edit is proposed here.',name:'Portable desk lamp · DEMO-LAMP-03',lines:['Status: Needs review · Marketplace A','Stock: 0 units · a known zero','Last synced: 02 Nov 2026, 10:30 IST'],note:'Source: synthetic design sample. Confirm stock and the required change before creating a draft. This detail view has no save action.',editable:false}
};
function setReviewDetail(key) {
  const detail = listingDetails[key] || listingDetails.bulk;
  $('#review-dialog-tag').textContent = detail.tag;
  $('#review-dialog-title').textContent = detail.title;
  $('#review-dialog-description').textContent = detail.description;
  $('#review-item-name').textContent = detail.name;
  const summary = $('#review-change-summary');
  summary.replaceChildren();
  detail.lines.forEach((line, index) => {
    if (index) summary.append(document.createElement('br'));
    summary.append(document.createTextNode(line));
  });
  $('#review-detail-note').textContent = detail.note;
  $('#save-demo-draft').hidden = !detail.editable;
}
const openers = new Map();
$$('[data-open-dialog]').forEach(button => button.addEventListener('click', () => {
  const dialog = document.getElementById(button.dataset.openDialog);
  if (dialog.id === 'review-dialog') setReviewDetail(button.dataset.detail || 'bulk');
  openers.set(dialog.id, button);
  dialog.showModal();
}));
$$('dialog').forEach(dialog => {
  $$('[data-close-dialog]', dialog).forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('close', () => { openers.get(dialog.id)?.focus(); });
});
$('#save-demo-draft').addEventListener('click', () => {
  $('#review-dialog').close();
  showToast('Demo draft saved', 'No live data changed. Review before publishing.');
});
$('#confirm-demo-discard').addEventListener('click', () => {
  $('#discard-dialog').close();
  showToast('Demo draft discarded', 'Confirmation example complete. No real draft or product data changed.');
});

$$('[role="tablist"]').forEach(tablist => {
  const tabs = $$('[role="tab"]', tablist);
  function selectTab(tab, moveFocus) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (moveFocus) tab.focus();
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', () => selectTab(tab, false));
    tab.addEventListener('keydown', event => {
      const current = tabs.indexOf(tab);
      let next;
      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
    });
  });
});

$('#demo-form').addEventListener('submit', event => {
  event.preventDefault();
  const field = $('#brand-name');
  const value = field.value.trim();
  const valid = value.length > 0;
  field.setAttribute('aria-invalid', String(!valid));
  $('#brand-error').textContent = valid ? '' : 'Enter a brand name to save this example.';
  $('#form-result').textContent = valid ? `Example saved for ${value}. No live brand was created.` : '';
  if (!valid) field.focus();
});
$('#brand-name').addEventListener('input', () => {
  $('#form-result').textContent = '';
  if ($('#brand-name').value.trim()) {
    $('#brand-name').removeAttribute('aria-invalid');
    $('#brand-error').textContent = '';
  }
});
$('#demo-switch').addEventListener('change', event => {
  $('#switch-status').textContent = `Notifications are ${event.target.checked ? 'on' : 'off'} in this example. No notification service is connected.`;
});

const componentIndex = [
  ['button', 'actions'], ['link', 'actions'], ['icon', 'actions'],
  ['input', 'inputs'], ['text field', 'inputs'], ['select', 'inputs'], ['textarea', 'inputs'], ['checkbox', 'inputs'], ['radio', 'inputs'], ['switch', 'inputs'], ['search', 'inputs'],
  ['navigation', 'navigation'], ['breadcrumb', 'navigation'], ['tabs', 'navigation'], ['stepper', 'navigation'], ['pagination', 'navigation'],
  ['badge', 'data'], ['avatar', 'data'], ['card', 'data'], ['metric', 'data'], ['table', 'data'],
  ['alert', 'feedback'], ['toast', 'feedback'], ['dialog', 'feedback'], ['modal', 'feedback'], ['accordion', 'feedback'], ['empty', 'feedback'], ['loading', 'feedback'], ['skeleton', 'feedback'], ['progress', 'feedback'], ['permission', 'feedback'], ['freshness', 'feedback']
];
$('#component-search').addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  const query = event.target.value.trim().toLowerCase();
  const found = query && componentIndex.find(([name]) => name.includes(query));
  if (!found) { $('#component-search-result').textContent = query ? 'No matching component. Try button, table or dialog.' : 'Enter a component name to search.'; return; }
  $('#component-search-result').textContent = `Found ${found[0]}. Showing its section.`;
  const section = document.getElementById(found[1]);
  section.scrollIntoView({ block: 'start' });
  const heading = $('h2', section);
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
});

let examplePage = 1;
function setPage(value) {
  examplePage = Math.max(1, Math.min(3, value));
  $$('.page-btn').forEach(button => {
    if (Number(button.dataset.page) === examplePage) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  $('#page-prev').disabled = examplePage === 1;
  $('#page-next').disabled = examplePage === 3;
  $('#pagination-status').textContent = `Page ${examplePage} of 3 · Sample items ${(examplePage - 1) * 10 + 1}–${examplePage * 10}`;
}
$$('.page-btn').forEach(button => button.addEventListener('click', () => setPage(Number(button.dataset.page))));
$('#page-prev').addEventListener('click', () => setPage(examplePage - 1));
$('#page-next').addEventListener('click', () => setPage(examplePage + 1));

let listingStatus = 'all';
function filterListings() {
  const query = $('#listing-search').value.trim().toLowerCase();
  let count = 0;
  $$('#listing-rows tr').forEach(row => {
    const matches = (listingStatus === 'all' || row.dataset.state === listingStatus) && row.textContent.toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) count += 1;
  });
  $('#listing-count').textContent = `${count} sample listing${count === 1 ? '' : 's'}${listingStatus !== 'all' || query ? ' match your filters' : ''}`;
  $('#listing-empty').hidden = count !== 0;
}
$$('[data-status]').forEach(button => button.addEventListener('click', () => {
  listingStatus = button.dataset.status;
  $$('[data-status]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  filterListings();
}));
$('#listing-search').addEventListener('input', filterListings);
$('#clear-listing-filters').addEventListener('click', () => {
  listingStatus = 'all';
  $('#listing-search').value = '';
  $$('[data-status]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.status === 'all')));
  filterListings();
  $('#listing-search').focus();
});
$('#retry-demo').addEventListener('click', event => {
  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = 'Trying…';
  window.setTimeout(() => {
    button.disabled = false;
    button.textContent = 'Try again';
    showToast('Demo refresh complete', 'The error card is an illustrative state. No external source was contacted.');
  }, 600);
});

const sectionLinks = $$('.rail nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  $$('.section').forEach(section => observer.observe(section));
}

$$('img').forEach(img => {
  function fallback() {
    img.hidden = true;
    const wordmark = img.nextElementSibling;
    if (wordmark?.classList.contains('logo-fallback')) wordmark.hidden = false;
  }
  img.addEventListener('error', fallback);
  if (img.complete && img.naturalWidth === 0) fallback();
});
