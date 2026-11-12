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

- **PayPal Client ID** — `assets/js/donate.js` uses PayPal's sandbox `sb` Client ID, which renders the buttons for testing but cannot process real payments. Once EMCC has a PayPal Business account, swap in the real Client ID from developer.paypal.com (Apps & Credentials → Live) and update the `PAYPAL_CLIENT_ID` constant.
- **Membership numbers** — `index.html`, `project.html`, and `donate.html` show "60 / 100 families"; update the numbers and the `width` on `.progress-fill` as the drive progresses.
- **Events** — `events.html` lists the recurring Ramadan iftar / Eid gatherings for the 2027 season; update dates and venues each year.

## Contact form

`contact.html` submits to Formspree (form `action`, handled via `fetch` in `assets/js/main.js`), endpoint `https://formspree.io/f/mqpqklwe`, delivering to `emccohio2020@gmail.com`.

## Donations

`donate.html` has a toggle between two methods:

- **Zelle / Bank Transfer** — static instructions pointing to `emccohio2020@gmail.com`.
- **PayPal / Debit or Credit Card** — preset ($25/$50/$100/$250) or custom amount, then PayPal's JS SDK (`assets/js/donate.js`) renders the PayPal button, Pay Later, and a guest "Debit or Credit Card" button side by side. Card entry goes through PayPal's own hosted fields — card numbers never touch our server or JS, so no PCI-DSS burden falls on this site. Currently running against the sandbox Client ID (see placeholder note above).

## Logo

Header and footer use `assets/img/emcc-logo-full.png` and `assets/img/emcc-logo.png` respectively (source files in `logos/`), and the browser tab icon is `assets/img/emcc-favicon.png` (a square crop of the same mark). Sizing is controlled by the `.brand-mark` / `.brand-mark-full` rules in `assets/css/style.css`.

## Run locally

```bash
cd emcc-web
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Live at **https://www.emccohio.org** via GitHub Pages (source: `main` branch, root folder; custom domain configured via the `CNAME` file). No build step — pushes to `main` publish directly.

Note: "Enforce HTTPS" is currently off in the repo's Pages settings, so `http://www.emccohio.org` is reachable unencrypted — worth enabling once DNS/cert is confirmed stable.
