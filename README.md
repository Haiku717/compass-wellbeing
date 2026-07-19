# Compass Wellbeing website

A fast, mobile-friendly website for **Compass Wellbeing**, a counselling, supervision and online therapy practice in Southwest Christchurch, New Zealand (Alex McClelland, MNZCCA).

Built as plain HTML + CSS + a tiny bit of JavaScript. No frameworks, no build step, nothing to break. It can be hosted **free** on GitHub Pages.

---

## Pages

| File | Page |
|------|------|
| `index.html` | Home (hero, services, about Alex, how it works, pricing, testimonial, contact) |
| `counselling.html` | Counselling |
| `supervision.html` | Supervision |
| `online-therapy.html` | Online Therapy |
| `privacy.html` | Privacy & Cookies Policy |

Shared styling lives in `css/styles.css`; shared behaviour in `js/main.js`. Images (including Alex's photo and the Compass Wellbeing logo, carried over from the old site) live in `images/`.

---

## Before it goes live: 2 quick jobs

### 1. Turn on the contact form (5 minutes)
The form uses **Formspree** (free tier). GitHub Pages can't send email on its own, so this is what makes enquiries actually land in Alex's inbox.

1. Go to <https://formspree.io> and sign up (free) using `enquiries@compasswellbeing.co.nz`.
2. Create a new form. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Open `index.html`, find `YOUR_FORM_ID` and replace it with your real ID:
   ```html
   <form id="contact-form" action="https://formspree.io/f/abcdwxyz" method="POST">
   ```
4. Save. Done. (Until this is set, the form still shows but won't send — there's a note in the code so you can't miss it.)

> No Formspree? The phone number and email address are tappable on every page, so people can still get in touch.

### 2. (Optional) Check the crisis support numbers
The contact section shows NZ crisis lines (111, 1737, Lifeline 0800 543 354). These are correct as of 2026, but worth a glance before launch.

---

## Hosting it free on GitHub Pages

1. Create a GitHub account (if Alex doesn't have one).
2. Create a new repository, e.g. `compasswellbeing`.
3. Upload all these files (or push this folder) to the repo.
4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
6. Wait ~1 minute. The site appears at `https://<username>.github.io/compasswellbeing/`.

### Pointing the real domain (compasswellbeing.co.nz) at it
1. In **Settings → Pages → Custom domain**, enter `compasswellbeing.co.nz` and save. (This creates a `CNAME` file.)
2. At the domain registrar (currently Crazy Domains), add these DNS records:
   - Four `A` records for the root domain pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `<username>.github.io`
3. Back in GitHub Pages, tick **Enforce HTTPS** once it's available.

DNS can take a few hours to take effect.

---

## Editing text later
Everything is plain text inside the `.html` files. To change wording, open the file in any text editor, find the words on the page, edit, save, and re-upload. Colours and fonts are all controlled from the top of `css/styles.css`.

---

## Credits
Design and build: prepared for Alex by a mate. Content adapted from the existing Compass Wellbeing website.
