// Starting prices and care plans. These are PROPOSED figures: change them to what you can
// deliver at a profit. "From" means the standard scope described here; anything larger is
// quoted in writing. Only promise support terms (reply times, backups, hours) you can meet.

export const kes = (n) => `KES ${n.toLocaleString('en-KE')}`;

export const packages = [
  {
    id: 'shop',
    name: 'Shop website with WhatsApp ordering',
    from: 35000,
    summary: 'A mobile-first website where customers browse your products and send an order request to your WhatsApp.',
    includes: ['Product catalogue with photos and prices', 'Cart and order request', 'Domain and hosting set-up'],
    bestFor: 'Shops that sell from WhatsApp chats',
    href: '/websites/',
  },
  {
    id: 'stock',
    name: 'Stock and sales tracker',
    from: 45000,
    summary: 'One simple system for stock in and out, low-stock warnings and a daily sales summary.',
    includes: ['Stock in and out records', 'Low-stock warnings', 'Daily sales summary'],
    bestFor: 'Businesses tracking stock in notebooks or spreadsheets',
    href: '/business-systems/',
  },
  {
    id: 'assistant',
    name: 'WhatsApp FAQ and booking assistant',
    from: 25000,
    summary: 'An assistant that answers common questions, collects booking details and hands over to a person.',
    includes: ['Answers from your approved FAQs', 'Booking details collected for you to confirm', 'Hand-over to a person'],
    bestFor: 'Businesses answering the same questions all day',
    href: '/whatsapp-assistants/',
  },
];

export const carePlan = {
  name: 'InfiniCare',
  intro: 'After launch, your site or system still needs hosting, backups and updates. InfiniCare is a monthly plan that covers them, so you are not left to fix things alone. Pick the level that matches what you run.',
  tiers: [
    {
      name: 'Essential',
      from: 2000,
      forWhom: 'A simple website',
      features: ['Hosting managed and monitored', 'Weekly backups', 'Security and software updates', 'Email support, reply within one business day', 'One small content change a month'],
    },
    {
      name: 'Business',
      from: 4500,
      forWhom: 'A shop site or growing business',
      featured: true,
      features: ['Everything in Essential', 'Up to 3 hours of changes a month', 'WhatsApp support, reply the same business day', 'Monthly check-up on uptime and backups', 'Essential technical SEO upkeep'],
    },
    {
      name: 'Systems',
      from: 8000,
      forWhom: 'A stock system or assistant',
      features: ['Everything in Business', 'Daily backups of your data', 'Up to 6 hours of changes and fixes a month', 'Monthly review call', 'Monitoring of connected services'],
    },
  ],
};
