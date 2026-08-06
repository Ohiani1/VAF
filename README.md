# VAF — React rebuild

Next.js rebuild of the Violet AbdulKadir Foundation site. Static-exported
(no server required), red/black/white theme built around the real VAF mark,
deployable to GitHub Pages with your GoDaddy domain on top.

## Run locally

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build the static site

```bash
npm run build
```
Output goes to `out/` — this is a plain static site (HTML/CSS/JS), no
Node server needed to host it.

## What's real vs. placeholder

- **Logo, colors**: real — pulled from your actual VAF mark (`public/images/vaf-logo.jpg`).
- **Mission text, program descriptions, contact info**: real — pulled from your existing HTML.
- **Cause photos**: NOT included. The old template's cause/about images were generic
  stock photos unrelated to VAF (a stock doctor, an unrelated street photo), so I left
  them out rather than reuse them. The design currently works without photos — drop
  real photos into `public/images/causes/` and reference them in `data/causes.js`
  whenever you have them (I can wire that up any time).
- **Contact form**: the old form posted to `contact_process.php`. GitHub Pages can't run
  PHP, so the form now opens the visitor's email app pre-filled instead. To get quiet
  form submissions into an inbox, sign up for a free [Formspree](https://formspree.io)
  or Netlify Forms account and swap the `handleSubmit` logic in `app/contact/page.js`
  for a `fetch()` POST to your form endpoint — say the word and I'll wire it in.

## Deploy to GitHub Pages (with your GoDaddy domain)

1. Push this project to a GitHub repo (can be the same `VAF` repo, on a new branch
   or replacing `main` — your call).
2. In the repo: **Settings → Pages → Source → GitHub Actions**. The included workflow
   (`.github/workflows/deploy.yml`) will build and publish on every push to `main`.
3. **Custom domain from GoDaddy:**
   - In GoDaddy DNS settings for your domain, add:
     - Four `A` records for `@` pointing to GitHub's Pages IPs:
       `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - A `CNAME` record for `www` pointing to `<your-github-username>.github.io`
   - In the repo: **Settings → Pages → Custom domain**, enter your domain
     (e.g. `vaf.org`), save. GitHub will create a `CNAME` file in `public/` for you
     automatically the first time — commit it if it doesn't appear.
   - Check "Enforce HTTPS" once the certificate provisions (can take up to ~24h).
4. DNS propagation can take anywhere from a few minutes to 24–48 hours.

## Structure

```
app/                 pages (App Router)
  page.js            home
  about/page.js
  causes/page.js     causes list
  causes/[slug]/     causes detail (dynamic route)
  contact/page.js
components/          Header, Footer, CauseCard, ReachMark (signature SVG)
data/causes.js        editable cause content — add/edit causes here
public/images/         real logo + assets pulled from your repo
```

To add a new cause, add an entry to `data/causes.js` — no other code changes needed,
the list and detail pages both read from it automatically.
