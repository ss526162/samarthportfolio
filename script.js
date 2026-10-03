'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 641px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  projects.forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++; });
  document.querySelector('#filter-status').textContent = `${count} projects shown.`;
}));
const projectDetails = {
  canada: { title: 'Local visibility that turns into enquiries.', result: '60%+ organic traffic growth · 50+ qualified leads / month', context: 'SEO campaigns for Canadian IV clinics and local businesses, focused on relevant organic visibility and qualified enquiries.', work: ['Optimized content around search intent and relevant services.', 'Applied entity SEO and topical authority strategies.', 'Worked on visibility across Google Search and AI Overviews.'], outcome: 'The SEO résumé reports 60%+ organic traffic growth, CTR improving from 1% to 4%, and 50+ qualified leads per month. Reporting dates are not disclosed.' },
  healthcare: { title: 'A sharper paid search strategy for healthcare.', result: 'Click-through rate: 0.4% to 5%', context: 'Healthcare advertising campaigns in the USA across Search, Local and Display.', work: ['Refined keyword targeting and ad copy.', 'Optimized landing pages to support qualified lead generation.', 'Managed policy-sensitive healthcare and drug-related search terms.'], outcome: 'The Google Ads résumé reports CTR increasing from 0.4% to 5%, alongside qualified lead generation. Spend, lead totals and reporting dates are not disclosed.' },
  edtech: { title: 'Scaling organic discovery for an education brand.', result: '500+ ranking keywords', context: 'Organic search work for a major Indian EdTech brand, with a focus on scalable content and targeted queries.', work: ['Applied programmatic SEO and keyword clustering.', 'Developed scalable content strategies aligned with search intent.', 'Expanded coverage of relevant education-related searches.'], outcome: 'The supplied résumés report visibility across 500+ ranking keywords. Exact keyword lists, reporting dates and position breakdowns are not published here.' },
  b2b: { title: 'Fixing the foundations of B2B search.', result: '+30% organic traffic · CTR from 0.5% to 4%', context: 'SEO campaigns for Australian security, finance and consulting businesses.', work: ['Identified and resolved technical SEO and indexation issues.', 'Improved search visibility through targeted optimization.', 'Supported qualified lead generation and AI search visibility.'], outcome: 'The SEO résumé reports organic traffic increasing by 30% and CTR improving from 0.5% to 4%. Reporting dates are not disclosed.' },
  admissions: { title: 'Helping prospective students take the next step.', result: 'Click-through rate: 2% to 7%', context: 'Admission-focused Google Ads campaigns for an Indian EdTech brand, promoting programs at NMIMS, Amity, Jain, Parul and other universities. This describes campaign scope, not direct university client relationships.', work: ['Optimized ad copy and tested two-headline combinations.', 'Used sitelinks and WhatsApp assets to support enquiries.', 'Implemented conversion tracking and ongoing campaign optimization.'], outcome: 'The Google Ads résumé reports CTR increasing from 2% to 7% and qualified lead generation. Lead volume, conversion rate and campaign dates are not specified.' },
  automation: { title: 'Making daily SEO operations more efficient.', result: 'Custom AI skills, scripts & n8n workflows', context: 'Automation work supporting repetitive SEO operations and day-to-day campaign delivery.', work: ['Built workflows for content publishing and Google Business Profile posting.', 'Automated reporting, data processing and recurring SEO tasks.', 'Developed custom AI skills and scripts for daily operations.'], outcome: 'The supplied résumés describe workflow automation and improved operational efficiency. No numerical time-saving claims are made.' }
};
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const data = projectDetails[button.dataset.project]; previousFocus = button; dialogContent.replaceChildren();
  const add = (tag, text, className) => { const element = document.createElement(tag); element.textContent = text; if (className) element.className = className; dialogContent.append(element); return element; };
  add('h2', data.title).id = 'dialog-title'; add('div', data.result, 'dialog-result');
  add('h3', 'The context'); add('p', data.context); add('h3', 'My contribution');
  const list = add('ul', ''); data.work.forEach(item => { const li = document.createElement('li'); li.textContent = item; list.append(li); });
  add('h3', 'The result'); add('p', data.outcome); dialog.showModal(); document.body.classList.add('modal-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (previousFocus) previousFocus.focus(); });
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { if (!navigator.clipboard) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText('samarths526162@gmail.com'); status.textContent = 'Email copied!'; }
  catch { status.textContent = 'Select the email address to copy it manually.'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
