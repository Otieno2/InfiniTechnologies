// Answers avoid made-up numbers. Where a figure depends on the project, the answer says
// it is set in the written quote or agreement. Add specifics (for example a warranty
// period) here once they are decided.

import { DEPOSIT } from '../config';

export const faqs = [
  {
    q: 'Do you have a price list?',
    a: 'We publish starting prices for our three packages and for the InfiniCare monthly plans in the Pricing section. Your written quote gives the exact price for your scope, and nothing is binding until you accept it.',
  },
  {
    q: 'How long does a typical website or system take to build?',
    a: 'It depends on scope. A simple website takes far less time than a custom system. Your quote includes a schedule with milestones, and we agree it in writing before work starts. Timelines also depend on how quickly you can supply content and feedback.',
  },
  {
    q: 'Do you provide hosting, domain setup and ongoing maintenance?',
    a: 'Yes. Hosting setup, domain setup and maintenance are available under an agreed plan. Domain and hosting fees are paid to the providers, and your quote shows what is included in our fee and what is not.',
  },
  {
    q: 'Can I request changes after delivery? How are extra features priced?',
    a: 'Changes within the agreed scope are covered by the agreement. New features or changes outside it are quoted separately, and we only start them once you approve the quote.',
  },
  {
    q: 'Who owns the source code, design files and content after payment?',
    a: 'Ownership of the agreed work transfers to you as set out in your written agreement, normally once final payment is made. Your own content stays yours. Reusable code, open-source components, fonts and third-party services keep their own licences.',
  },
  {
    q: 'What support is included after launch?',
    a: 'Each agreement states a bug-fix window and what support is included. Ongoing maintenance, updates and support are available as a monthly care plan, and your quote explains the difference.',
  },
  {
    q: 'Can you integrate M-PESA or other payment methods?',
    a: 'We can assess and integrate M-PESA through Safaricom Daraja, and Paystack for eligible Kenyan merchants. Availability depends on your merchant account, supported channels and provider approval, so we confirm these before promising a go-live date. Provider fees are separate.',
  },
  {
    q: 'Do you work with customers outside Kenya?',
    a: 'We are based in Kenya and can work remotely with clients elsewhere. Payment methods and provider availability differ by country, and we confirm what is possible in your quote.',
  },
  {
    q: 'How do project deposits, milestones and final payments work?',
    a: `Our standard terms are ${DEPOSIT}. The exact schedule is agreed in writing before work starts.`,
  },
  {
    q: 'How do quotes work?',
    a: 'Send us a short description of what you want to achieve. We reply with questions if needed, then a written quote with scope, price, schedule and payment milestones. Nothing is binding until you accept it.',
  },
];
