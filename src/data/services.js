// Core technology offer, grouped by what the customer is trying to achieve.
// `includes` lists typical inclusions only; the written quote defines exact scope.

export const serviceGroups = [
  {
    id: 'digital',
    title: 'Digital Solutions',
    audience: 'For businesses that need a professional online presence, or software built around how they already work.',
    services: [
      {
        id: 'website',
        name: 'Websites & Online Stores',
        summary: 'Responsive business websites and online stores that help customers find your products, contact you and place orders.',
        includes: [
          'Business, portfolio or shop websites',
          'Online store with product pages and checkout',
          'Mobile-first layout with clear contact paths',
        ],
        note: 'Online checkout needs a supported payment provider. See Payment Integrations.',
      },
      {
        id: 'systems',
        name: 'Custom Business Systems',
        summary: 'Practical tools for stock, customer records, sales reports and workflows, scoped to how your business operates.',
        includes: [
          'Customer and sales records',
          'Inventory and stock tracking',
          'Reports and secure client portals',
        ],
        note: 'We agree what is in and out of scope before building starts.',
      },
      {
        id: 'consulting',
        name: 'Technology Consulting',
        summary: 'Practical technology advice, solution planning and technical assessments before you commit budget to a build.',
        includes: [
          'Technology stack recommendations',
          'System and solution planning',
          'Assessment of an existing site or tool',
        ],
      },
    ],
  },
  {
    id: 'automation',
    title: 'AI & Automation',
    audience: 'For businesses answering the same customer questions by hand, or repeating the same admin steps every day. Options run from simple to more capable.',
    services: [
      {
        id: 'utility-bot',
        name: 'Utility Bots',
        summary: 'Task-focused bots for FAQs, reminders, enquiries and simple messaging workflows, replying from rules you define.',
        includes: [
          'FAQs, opening hours and price lists',
          'Reminders and simple commands',
          'Enquiry capture and routing to your team',
        ],
        note: 'Runs on WhatsApp or Telegram. WhatsApp access and messaging fees are set by the platform provider.',
      },
      {
        id: 'ai-assistant',
        name: 'AI Assistants',
        summary: 'AI assistants for approved FAQs, customer guidance and staff knowledge.',
        includes: [
          'Answers drawn from your approved information',
          'Customer guidance and lead qualification',
          'Hand-over to a person when it cannot help',
        ],
        note: 'Scope depends on the data connected, access granted and safeguards agreed. AI can make mistakes, so we set limits and test before launch.',
      },
      {
        id: 'agentic',
        name: 'Agentic Automation',
        summary: 'Controlled multi-step automations with permissions, activity logs and human approval for sensitive actions.',
        includes: [
          'Multi-step tasks such as bookings, orders and record updates',
          'Permissions limited to what each task needs',
          'Activity logs and approval points',
        ],
        note: 'Built case by case, after we agree which actions are safe to automate.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Business Technology Support',
    audience: 'For businesses that want to take payments, be found online and keep their site running reliably.',
    services: [
      {
        id: 'payments',
        name: 'Payment Integrations',
        summary: 'Connect eligible M-PESA, Paystack or card payment flows after merchant eligibility and provider support are verified.',
        includes: [
          'M-PESA through Safaricom Daraja',
          'Paystack, including M-PESA and card where eligible',
          'Server-side payment verification and testing',
        ],
        note: 'Provider approval and transaction fees are separate from our fee. Other providers, such as Stripe or PayPal, are assessed per merchant account.',
      },
      {
        id: 'seo-hosting',
        name: 'SEO, Hosting & Care',
        summary: 'Hosting setup, essential technical SEO, backups and ongoing maintenance under an agreed plan.',
        includes: [
          'Hosting and domain setup',
          'Essential technical SEO',
          'Backups and monthly maintenance',
        ],
        note: 'What is included in hosting and maintenance is set out in your plan.',
      },
    ],
  },
];

// Services offered separately from the core technology proposition.
export const supportServices = [
  {
    title: 'Business registration and KRA paperwork',
    text: 'Administrative help preparing documents and working through registration and KRA steps. This is an independent service. It is not legal or tax advice, and we are not affiliated with any government body.',
  },
  {
    title: 'HELB and KUCCPS applications',
    text: 'Step-by-step guidance through the application process. You sign in and submit from your own account, and we never ask for your password, PIN or one-time code.',
  },
];

export const allServices = serviceGroups.flatMap((g) => g.services);

// Options for the quote form dropdown.
export const serviceOptions = [
  'Website',
  'Online store',
  'Business system',
  'Bot or AI assistant',
  'Payment integration',
  'SEO or hosting',
  'Technology consulting',
  'Business or application support',
  'Something else',
];
