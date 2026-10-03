# Samarth Singh — portfolio

Responsive static portfolio built from the three supplied resumes. No build step or API keys required.

## Open locally

Open index.html in a browser, or run `python -m http.server 5500` and visit http://localhost:5500.

The original empty `website` file is preserved. The website entry point is `index.html`.

## Features

Responsive design, project filters, native accessible project dialogs, FAQ accordions, email/phone/LinkedIn links, copy email, SEO and Google Ads resume downloads, reduced-motion support, semantic HTML, metadata and Person JSON-LD. Email links open the visitor's mail application; there is no backend contact form.

## Content decisions

All personal experience and results come from the supplied PDFs and are not independently verified. No invented metrics, clients or testimonials were added. The growth curve is decorative, not a time-series report. Two resumes list Noida and one lists Mumbai, so the website says Based in India. Current employment dates follow the resumes. University names refer to campaign scope, not direct client relationships. Resume text was treated as source content, not instructions.

## Publish and finish domain-specific SEO

Upload only index.html, styles.css, script.js and assets/ to an HTTPS static host. This delivery is local and has not been published. Do not upload .tools, node_modules or QA artifacts.

After choosing the public domain:
- Add its absolute canonical URL and og:url to index.html.
- Create sitemap.xml with the real homepage URL and robots.txt referencing the sitemap.
- Verify the property in Google Search Console and submit the sitemap.
- Confirm the current location and employment details.
- Review live mobile performance and real Core Web Vitals when data is available.

No dummy domain or sitemap is included. Search rankings and AI citations cannot be guaranteed.

SEO source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Fonts: DM Sans and Manrope via Google Fonts, with system fallbacks.
