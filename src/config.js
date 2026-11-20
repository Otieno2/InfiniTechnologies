import { BUSINESS } from './data/business.js';

// Single source of truth for contact details, business hours and prefilled messages.
// Anything the business promises to customers (hours, response time) lives here so it
// can be changed in one place and stays consistent across the site.

export const CONTACT = {
  whatsapp: '254743179786',
  phoneDisplay: '+254 743 179 786',
  email: 'otienofelixopiyo254@gmail.com',
  telegram: 'https://t.me/+254743179786',
};

// Only promise what the business can consistently deliver.
export const HOURS = 'Monday to Friday, 09:00 to 18:00 (EAT)';
export const RESPONSE_WINDOW = 'within one business day';

// Add a real photo to src/assets and import it here to show it on the About section.
// Leave as null to show initials instead. Do not use stock photos.
export const FOUNDER = {
  name: 'Otieno Felix Opiyo',
  role: 'Founder',
  photo: null,
};

// Quote form delivery. Set VITE_QUOTE_FORM_ENDPOINT to a form-handling service URL
// (for example a Formspree endpoint) to deliver submissions to a monitored inbox.
// When it is empty the form opens a prefilled WhatsApp message instead.
export const QUOTE_FORM_ENDPOINT = import.meta.env.VITE_QUOTE_FORM_ENDPOINT || '';

export const BUDGET_RANGES = [
  'Under KES 50,000',
  'KES 50,000 to 150,000',
  'KES 150,000 to 500,000',
  'Over KES 500,000',
  'Not sure yet',
];

export const TIMEFRAMES = [
  'As soon as possible',
  'Within a month',
  'In 1 to 3 months',
  'Flexible or just exploring',
];

export const QUOTE_MESSAGE = 'Hi InfiniTechnologies, I’d like a quote for my project.';

export const waLink = (text = QUOTE_MESSAGE) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailLink = (subject, body = '') =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Standard payment terms, shown in Pricing and the FAQ. Change here if your terms change.
export const DEPOSIT = 'a 50% deposit to start, then the balance in milestone payments tied to deliverables';

// Where you are, from src/data/business.js. Empty town and county show just "Kenya".
export const PLACE = [BUSINESS.town, BUSINESS.county].filter(Boolean).join(', ') || 'Kenya';
