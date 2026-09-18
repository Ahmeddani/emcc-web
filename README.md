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

## Before going live, replace these placeholders

- **Address / phone / email** — in every page's footer and header hero, plus `contact.html`.
- **Membership numbers** — `index.html`, `project.html`, and `donate.html` show "60 / 100 members"; update the numbers and the `width` on `.progress-fill` as the drive progresses.
- **Proposed Plan phases 2 & 3** — `project.html` only has confirmed detail for Phase 1 (Targeted Membership Drive) from the source proposal; phases 2–3 are placeholders — replace with the committee's actual next steps once finalized.
- **Events** — `events.html` has sample events; update or wire up to a real calendar.
- **Donation details** — `donate.html` Zelle/PayPal/bank info is placeholder.
- **Google Map** — `contact.html` map is centered on Columbus generally; swap in a specific embed once a location is secured.
- **Social links** — footer `#` links for Facebook/Instagram/YouTube.
- **Contact form** — currently front-end only (shows a success message but doesn't send anywhere). Wire it to a backend, or a service like Formspree/EmailJS, or point it at the existing `emcc-admin-backend` API.
- **Logo** — the `☪` in the header/footer is a placeholder mark; swap in an actual logo image if you have one.

## Run locally

```bash
cd emcc-web
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Any static host works: Firebase Hosting, GitHub Pages, Netlify, Vercel, or S3. No build command needed — just publish the folder as-is.
