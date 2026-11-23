// Starting prices and care plans. These are PROPOSED figures: change them to what you can
// deliver at a profit. "From" means the standard scope described here; anything larger is
// quoted in writing. Only promise support terms (reply times, backups, hours) you can meet.

export const kes = (n) => `KES ${n.toLocaleString('en-KE')}`;

export const packages = [
  {
    id: 'website',
    name: 'Business website',
    from: 22000,
    summary: 'A professional mobile-first website that shows what you do, builds trust and makes it easy for customers to contact you.',
    includes: ['About, services and contact pages', 'Mobile-first responsive design', 'Domain and hosting set-up', 'Basic technical SEO'],
    bestFor: 'Service businesses and professionals who need an online presence',
    href: '/websites/',
  },
  {
    id: 'shop',
    name: 'Shop website with WhatsApp ordering',
    from: 35000,
    summary: 'A mobile-first website where customers browse your products and send an order request to your WhatsApp.',
    includes: ['Product catalogue with photos and prices', 'Cart and order request', 'Domain and hosting set-up', 'Basic technical SEO'],
    bestFor: 'Shops that sell from WhatsApp chats',
    href: '/websites/',
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
  {
    id: 'systems',
    name: 'Custom Business Systems',
    from: 50000,
    summary: 'Practical software built around how you work: stock tracking, customer records, sales reports, bookings or workflows.',
    includes: ['Scoped to your business needs', 'Staff access and permissions', 'Reports and data exports', 'Training and documentation'],
    bestFor: 'Businesses that track critical information in notebooks or scattered spreadsheets',
    href: '/business-systems/',
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
