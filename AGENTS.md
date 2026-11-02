# Working on the Opptra design system

- Use `system/` as the canonical design reference; avoid separately editing a copied skill reference. Generate portable distributions with `python3 scripts/package_skill.py`.
- Read `system/design.md`, the relevant component contracts and `system/source-audit.md` before changing the brand or component rules. Respect explicit user scope.
- Preserve semantic token names and matching CSS/JSON values. Keep observed website traits, established brand guidance and proposed additions distinguishable.
- Retain the distinction between known zero, missing, stale and restricted information. Keep demonstration data/actions explicitly synthetic.
- Run `python3 scripts/check.py` after repository or reference edits. Run `node --check system/wireframes/gallery.js` when JavaScript changes. Use rendered checks appropriate to actual visual or interaction changes; record their limits.
- The sign-offs in `system/state.json` apply to the recorded content fingerprint. Do not reuse them as acceptance of materially changed design artifacts. Keep repository-packaging changes distinct from design approval.
- Do not publish a website, alter access, create schedules or message other people merely because this repository mentions those workflows.
