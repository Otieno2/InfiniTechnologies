// DRAFT policy text written to match what the site actually does today:
// a quote form, WhatsApp/Telegram/email contact, optional EVA chat, and no analytics or
// advertising cookies. This is a practical starting point, not legal advice. Have it
// reviewed before launch and update it whenever data collection changes (for example if
// analytics are added, or EVA is switched on).

export const LEGAL_UPDATED = '19 November 2026';

export const legalPages = {
  privacy: {
    title: 'Privacy Notice',
    intro:
      'This notice explains what personal information InfiniTechnologies collects through this website and when you contact us, why we collect it, and the choices you have.',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'InfiniTechnologies is a technology business based in Kenya, led by Otieno Felix Opiyo. For the information described in this notice we decide why and how it is used, so we are the data controller.',
          'You can reach us using the contact details at the end of this notice.',
        ],
      },
      {
        heading: 'What we collect and why',
        list: [
          'Quote form: your name, your email address or phone number, your business name (optional), the service you need, a description of your project, and an optional budget range and timeframe. We use this to reply and to prepare a quote.',
          'Messages you send us on WhatsApp, Telegram, email or by phone: your contact details and what you tell us. We use this to reply and to provide quotes and services.',
          'EVA chat, when it is switched on: the messages you type are sent to our server and to an AI model provider so a reply can be generated. We use them to answer your questions and to hand you over to a person.',
          'Technical data: our hosting provider may keep standard server logs, such as IP address, browser type and the pages requested, to keep the site secure and working.',
        ],
      },
      {
        heading: 'Cookies and tracking',
        body: [
          'This site does not currently use analytics or advertising cookies. If that changes, we will update this notice and ask for your consent where it is required.',
        ],
      },
      {
        heading: 'Our basis for using your information',
        body: [
          'We use your information to respond to your request and to take steps you ask for before entering an agreement. Where you tick the consent box on the quote form, we also rely on your consent. We keep some records because the law requires it, for example for tax purposes, and we have a legitimate interest in keeping our services secure.',
          'We do not add you to newsletters or promotional lists unless you separately ask us to.',
        ],
      },
      {
        heading: 'Who we share it with',
        body: [
          'We do not sell your information. We share it only with service providers that help us run the business, such as website hosting, email, messaging platforms (WhatsApp and Telegram), form delivery and, if EVA is on, an AI model provider. They may only use it to provide their service to us.',
          'Some providers may process information outside Kenya. Where that happens we take steps to make sure it is handled with appropriate safeguards, as Kenyan data protection law requires.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'We keep enquiry details only as long as we need them to respond, to deliver and support a project, and to meet record-keeping and tax obligations. When we no longer need them, we delete or anonymise them.',
        ],
      },
      {
        heading: 'Work we do for clients',
        body: [
          'If we handle personal data on behalf of a client as part of a project, for example in a customer or stock system, we do so on that client’s instructions and under a written agreement. In that case the client decides how the data is used.',
        ],
      },
      {
        heading: 'Keeping information safe',
        body: [
          'We use HTTPS, limit who can access client and enquiry information, and use strong passwords with multi-factor authentication where available.',
          'We will never ask you for your passwords, M-PESA PIN or one-time codes by WhatsApp or email. Please do not share them in chat or on the quote form.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Under the Data Protection Act, 2019 you can ask to see the information we hold about you, ask us to correct or delete it, object to certain uses, and withdraw consent you have given. Contact us and we will respond.',
          'If you are not satisfied with how we handle your information, you can complain to the Office of the Data Protection Commissioner (ODPC) at odpc.go.ke.',
        ],
      },
      {
        heading: 'Changes to this notice',
        body: ['We will update this page when our practices change and show the date of the latest update at the top.'],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro:
      'These terms cover your use of this website and how we work with customers. A written quote or agreement for your project takes priority over them where the two differ.',
    sections: [
      {
        heading: 'About this website',
        body: [
          'The information on this site describes our services in general terms. Descriptions of what a service typically includes are not a promise that every feature is included in your project. Your written quote lists the exact scope.',
        ],
      },
      {
        heading: 'Quotes and agreements',
        body: [
          'A quote is an offer valid for the period stated in it. Work begins once you have accepted a written scope and quote and any agreed deposit has been paid. Nothing is binding on either side because of a verbal discussion alone.',
        ],
      },
      {
        heading: 'Payments',
        body: [
          'Custom projects are paid as a deposit and milestone payments, each tied to a deliverable or approval, as set out in your agreement. Work may pause if an agreed payment is overdue. Fees charged by third parties, such as domain registrars, hosting providers, payment providers and messaging platforms, are separate from our fee unless the quote says otherwise.',
        ],
      },
      {
        heading: 'Changes to scope',
        body: [
          'Work outside the agreed scope is quoted separately and starts only after you approve it in writing.',
        ],
      },
      {
        heading: 'What we need from you',
        body: [
          'Timelines depend on you supplying content, access, approvals and feedback on time. You are responsible for having the right to use the content, logos and images you give us, and for the accounts you hold with third-party providers.',
        ],
      },
      {
        heading: 'Ownership',
        body: [
          'Ownership of the agreed work passes to you as set out in your written agreement, normally on final payment. Reusable code, open-source components, fonts, stock assets and third-party services remain subject to their own licences and terms.',
        ],
      },
      {
        heading: 'Third-party services',
        body: [
          'Payment providers, messaging platforms, hosting companies and AI model providers set their own terms, fees, eligibility rules and approval processes. We cannot guarantee that a provider will approve your account or keep a feature available, and we confirm what is possible before we quote.',
        ],
      },
      {
        heading: 'AI features',
        body: [
          'AI assistants, including EVA on this website, can produce incorrect or incomplete answers. They provide general information only, cannot give binding quotes or commitments, and should not be relied on for legal, tax or financial decisions. You can always ask to speak to a person.',
        ],
      },
      {
        heading: 'Business and application support',
        body: [
          'Our business registration, KRA and HELB or KUCCPS support is an independent administrative and guidance service. It is not legal or tax advice, and we are not affiliated with any government agency. We never ask for your passwords, PINs or one-time codes. You sign in and approve actions yourself on the official service.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          'To the extent the law allows, we are not liable for indirect or consequential losses, or for delays or failures caused by third-party providers or by matters outside our reasonable control. Nothing in these terms limits liability that cannot be limited under the laws of Kenya.',
        ],
      },
      {
        heading: 'Governing law',
        body: ['These terms are governed by the laws of Kenya. We will always try to resolve a disagreement with you directly first.'],
      },
    ],
  },
};
