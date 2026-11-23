// Content and search metadata for the pages that have their own address. No imports, so the
// build script can read the same data to write each page's title, description and sitemap.

export const pages = {
  websites: {
    path: '/websites/',
    packageId: 'shop',
    title: 'Websites and online stores for small businesses in Kenya | InfiniTechnologies',
    description: 'Mobile-first business websites and online stores with a product catalogue and WhatsApp ordering. Starting prices, written quotes and support after launch.',
    h1: 'Websites and online stores for small businesses',
    intro: 'A website that shows your products, answers the questions customers keep asking and gives them an easy way to order or contact you. We design for phones first, so it works well on the devices most people carry.',
    forWho: [
      'Shops that sell through WhatsApp chats and have nowhere to show their products',
      'Service businesses that need a professional page and a clear way to be contacted',
      'Businesses ready to take online orders, with payments added where the provider allows',
    ],
    includes: [
      'Product catalogue with photos and prices',
      'Cart and order request sent to your WhatsApp or inbox',
      'Mobile-first layout with clear contact paths',
      'Domain and hosting set-up, with care plans for upkeep',
    ],
    faqs: [
      { q: 'Can customers pay on the website?', a: 'Online checkout needs a supported payment provider. We assess M-PESA through Safaricom Daraja and Paystack for your merchant account before promising a go-live date. Provider approval and fees are separate from our fee.' },
      { q: 'Who owns the website?', a: 'You do. Ownership of the agreed work transfers to you as set out in your written agreement, normally on final payment.' },
    ],
  },
  'business-systems': {
    path: '/business-systems/',
    packageId: 'stock',
    title: 'Stock and sales tracking systems for small businesses | InfiniTechnologies',
    description: 'Replace notebooks and scattered spreadsheets with one simple stock and sales system: stock records, low-stock warnings and a daily sales summary.',
    h1: 'Stock and sales tracking for small businesses',
    intro: 'When stock and daily sales live in notebooks and spreadsheets, nobody is sure what is left. We build one simple system around how you already work, and agree in writing what is in and out of scope before building starts.',
    forWho: [
      'Shops and traders who track stock by hand',
      'Owners who want to see low stock and the day’s sales without adding up',
      'Teams that need shared customer and sales records',
    ],
    includes: [
      'Stock in and out records',
      'Low-stock warnings',
      'Daily sales summary',
      'Customer and sales records, with simple reports',
    ],
    faqs: [
      { q: 'Can you start from my existing spreadsheet?', a: 'Yes. We start from how you track stock today and agree in the written scope what moves into the system.' },
      { q: 'What if I need something extra later?', a: 'New features outside the agreed scope are quoted separately, and we only start them once you approve the quote.' },
    ],
  },
  'whatsapp-assistants': {
    path: '/whatsapp-assistants/',
    packageId: 'assistant',
    title: 'WhatsApp FAQ and booking assistants for small businesses | InfiniTechnologies',
    description: 'A WhatsApp assistant that answers common questions from your approved list, collects booking details and hands over to a person when it cannot help.',
    h1: 'WhatsApp FAQ and booking assistants',
    intro: 'If you answer the same customer questions all day, an assistant can take the repeat ones. It answers only from information you approve, collects booking details for you to confirm, and passes the customer to a person when it cannot help.',
    forWho: [
      'Salons, clinics and service businesses that take bookings by message',
      'Shops that get the same questions about prices and opening hours',
      'Teams that want enquiries captured and routed to the right person',
    ],
    includes: [
      'Answers from your approved FAQs, opening hours and price lists',
      'Booking details collected for your team to confirm',
      'Hand-over to a person when the assistant cannot help',
      'Runs on WhatsApp or Telegram',
    ],
    faqs: [
      { q: 'Is it AI?', a: 'Utility bots reply from rules you define, so their answers are predictable. AI assistants are available where they help, with limits and testing before launch. AI can make mistakes, so we set safeguards.' },
      { q: 'What does WhatsApp cost?', a: 'WhatsApp access and messaging fees are set by the platform provider and are separate from our fee.' },
    ],
  },
};

export const legalMeta = {
  '/privacy/': {
    path: '/privacy/',
    title: 'Privacy Notice | InfiniTechnologies',
    description: 'How InfiniTechnologies collects, uses and protects personal information, and your rights under the Kenya Data Protection Act, 2019.',
  },
  '/terms/': {
    path: '/terms/',
    title: 'Terms of Service | InfiniTechnologies',
    description: 'The terms that apply when you use the InfiniTechnologies website and our services.',
  },
};
