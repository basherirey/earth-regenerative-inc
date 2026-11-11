# Earth Regenerative Inc. — Website V2

A complete replacement Next.js website for ERI. This is an independent source-code project; it will not update the live website until you deploy it.

## Pages
- `/` — Home
- `/about` — About us
- `/the-cell` — The Cell
- `/economic-model` — Economic model
- `/rei` — REI
- `/governance` — Governance
- `/contact` — Contact

## Review and deployment

**Safer review:** Create a *new* private GitHub repository named `eri-website-v2-review`, upload the contents of this extracted directory (not the outer directory), import it as a **separate Vercel project**, and preview its `.vercel.app` URL. Leave `earthregenerativeinc.com` assigned to the existing production project until approved.

**To replace the existing site after approval:** upload the files to the existing GitHub repository used by Vercel (replacing old files and removing any obsolete files). Vercel will automatically create a new production deployment. Keep a commit history in GitHub so reverting is possible.

## Notes
- This version uses public Unsplash photos via CSS background URLs. They require internet access and should be reviewed for rights and suitability before final release. The design includes gradient fallbacks.
- Contact details are intentionally not fabricated. Insert a verified ERI email in the Contact page before actively soliciting enquiries.
- No operational outcomes, signed land agreements or investment performance are claimed.
- This website presents intended institutional and monetary designs, which may require legal/regulatory review before public promotion.

## Local run

```bash
npm install
npm run dev
```

Open http://localhost:3000.
