// Demo projects built by InfiniTechnologies to show how a solution works.
// These are demonstrations, never client work. Do not add testimonials or client results.
//
// status: 'in-progress' shows a "Demo in build" tile. Once the demo is finished, set status
// to 'live' and add `image` (an imported screenshot) and `link` (the demo URL).

export const demos = [
  {
    id: 'shop-site',
    title: 'E-commerce platform',
    service: 'Websites & Online Stores',
    problem: 'Medical supply businesses need professional online presence with product catalogs, shopping cart, and easy ordering via WhatsApp.',
    features: [
      'Product catalog with 20+ items across 9 categories',
      'Shopping cart with WhatsApp checkout',
      'Admin dashboard for product & order management',
      'Search, filtering, and category navigation',
      'Mobile-responsive with PWA capabilities'
    ],
    proves: 'Full-featured e-commerce with admin panel, real-time inventory, and professional UI.',
    status: 'in-progress',
    image: null,
    link: '#',
  },
  {
    id: 'stock-tracker',
    title: 'Stock and sales tracker',
    service: 'Custom Business Systems',
    problem: 'Stock and daily sales live in notebooks and spreadsheets, so nobody is sure what is left.',
    features: ['Stock in and out records', 'Low-stock warnings', 'Daily sales summary'],
    proves: 'One simple system can replace scattered spreadsheets.',
    status: 'live',
    image: null,
    link: '/demos/stock-tracker.html',
  },
  {
    id: 'faq-assistant',
    title: 'WhatsApp FAQ and booking assistant',
    service: 'AI & Automation',
    problem: 'The same customer questions get answered by hand, all day.',
    features: ['Answers from approved FAQs', 'Collects booking details', 'Hands over to a person'],
    proves: 'An assistant can stay within its limits and pass the customer to a person when needed.',
    status: 'live',
    image: null,
    link: '/demos/faq-assistant.html',
  },
];
