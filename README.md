# EMCC Website

Website for the **Eritrean Muslims Community of Columbus (EMCC)** — Columbus, Ohio.

Plain static HTML/CSS/JS. No build step, no dependencies — just open `index.html` or serve the folder.

EMCC does not yet have a permanent masjid or community center — the site is built around the community's current reality (gatherings held at rented venues) and its active **Community Center Project**: a feasibility study and membership drive (60 of a 100-member goal) proposed to the community on April 26, 2026.

## Pages

- `index.html` — Home
- `about.html` — Mission, history, leadership
- `project.html` — Community Center Project: feasibility study, membership drive progress, proposed plan
- `services.html` — Current programs/activities ("Get Involved") and volunteering
- `events.html` — Upcoming events
- `donate.html` — Building fund, membership dues, Zakat & Sadaqah
- `contact.html` — Contact form, map, address

## Still placeholder / needs follow-up

- **Donation details** — `donate.html` Zelle/PayPal/bank info is still placeholder text (`donate@emcc-columbus.org` and no live PayPal/Stripe/Zeffy link). Replace with the community's real payment details before relying on it for donations.
- **Contact form** — submits via a `mailto:` link to `emccohio2020@gmail.com` (`assets/js/main.js`), so it opens the visitor's own email client rather than sending silently in the background. Swap in a real backend or form service (Formspree/EmailJS/`emcc-admin-backend`) if you want true background delivery.
- **Membership numbers** — `index.html`, `project.html`, and `donate.html` show "60 / 100 families"; update the numbers and the `width` on `.progress-fill` as the drive progresses.
- **Events** — `events.html` lists the recurring Ramadan iftar / Eid gatherings for the 2027 season; update dates and venues each year.

## Logo

Header and footer use `assets/img/emcc-logo-full.png` and `assets/img/emcc-logo.png` respectively (source files in `logos/`). Sizing is controlled by the `.brand-mark` / `.brand-mark-full` rules in `assets/css/style.css`.

## Run locally

```bash
cd emcc-web
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Live at **https://www.emccohio.org** via GitHub Pages (source: `main` branch, root folder; custom domain configured via the `CNAME` file). No build step — pushes to `main` publish directly.

Note: "Enforce HTTPS" is currently off in the repo's Pages settings, so `http://www.emccohio.org` is reachable unencrypted — worth enabling once DNS/cert is confirmed stable.
