# Gym Sample Website

A lightweight, responsive static website template for a local gym/studio. Dark-themed marketing site with pages for Home, Trainers, Gallery, About, and Contact — ready to be served as static files or deployed to any static-hosting provider.

## Key details
- WhatsApp / Phone: +91 9767761336 (prefilled WhatsApp links are included in CTAs)
- Location: Amravati (address shown as "123 Main Road, Amravati")
- Placeholder business name: `GymName`
- Pages: `home.html`, `trainers.html`, `gallary.html` (note: filename spelling), `about.html`, `contact.html`
- Global styles: `style.css`; page styles: `home.css`, `about.css`, `contact.css`, `gallery.css`, `trainers.css`
- Interactivity: `main.js` (mobile menu toggle)

## Features
- Dark, modern UI with CSS design tokens and responsive layout
- Hero sections, programs, membership pricing, trainer profiles, testimonials, and gallery
- CTAs open WhatsApp with prefilled booking or enquiry messages
- Mobile-friendly slide-in sidebar navigation
- Google Maps embed placeholder in the footer

## Stack
- Languages: HTML, CSS, JavaScript (vanilla)
- Static site — no build step required

## Repository layout (top-level)

```
home.html
about.html
trainers.html
gallary.html   # spelling in repo
contact.html
style.css
home.css
about.css
gallery.css
contact.css
trainers.css
main.js
images/        # referenced image assets
```

## How it fits together
Each page links the global `style.css` and a page-specific CSS file. `main.js` is included on every page to control the mobile hamburger menu and sidebar behavior. CTAs use WhatsApp deep links for bookings and queries. The project is ready to serve as static files from any static hosting provider.

## Quick start (local)

1. Clone the repo

   ```bash
   git clone https://github.com/DKirdak25/Gym_Sample_Websitep.git
   cd Gym_Sample_Websitep
   ```

2. Quick preview (open locally)
   - Open `home.html` (or `index.html` if you add/rename) in a browser.

3. Serve with Python 3

   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000/home.html
   ```

4. Or use `serve` (npm)

   ```bash
   npm install -g serve
   serve -s . -l 3000
   # then visit http://localhost:3000/home.html
   ```

## Recommended improvements
- Rename `home.html` → `index.html` so the site root serves the home page automatically.
- Fix filename typo: `gallary.html` → `gallery.html` and update references.
- Replace placeholders: `GymName`, address, phone, and Google Maps iframe src.
- Add real images to `images/` and optimize them (WebP + fallbacks already referenced).
- Add meta description and Open Graph tags for SEO.
- Consider adding a small backend or serverless form to store bookings instead of relying on WhatsApp links.

## Contributing
1. Fork the repository
2. Create a branch for your change: `git checkout -b fix/some-change`
3. Commit and push
4. Open a pull request describing your changes

Please keep changes focused and update any cross-file references when renaming files.

## License
Add a `LICENSE` file for the preferred license (suggested: MIT).

## Want me to help?
I can:
- Add an `index.html` that redirects or rename `home.html` → `index.html`.
- Fix the `gallary.html` → `gallery.html` typo and update references across files.
- Add an `LICENSE` file (MIT) and a short `CONTRIBUTING.md`.

Tell me which of these you'd like and I'll commit the changes.
