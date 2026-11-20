import { useRef, useState } from 'react';
import {
  BUDGET_RANGES,
  CONTACT,
  QUOTE_FORM_ENDPOINT,
  RESPONSE_WINDOW,
  TIMEFRAMES,
  mailLink,
  waLink,
} from '../config';
import { serviceOptions } from '../data/services';

const MAX_GOAL = 600;
const MIN_GOAL = 20;

const initialValues = {
  name: '',
  contactMethod: 'WhatsApp',
  contact: '',
  business: '',
  service: '',
  goal: '',
  budget: '',
  timeframe: '',
  consent: false,
  website: '', // honeypot, must stay empty
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';

  const contact = values.contact.trim();
  if (!contact) {
    errors.contact = values.contactMethod === 'Email' ? 'Enter your email address.' : 'Enter your phone number.';
  } else if (values.contactMethod === 'Email') {
    if (!emailPattern.test(contact)) errors.contact = 'Enter a valid email address, like name@example.com.';
  } else if (contact.replace(/\D/g, '').length < 9) {
    errors.contact = 'Enter a valid phone number, like 0712 345 678.';
  }

  if (!values.service) errors.service = 'Choose the service you need.';

  const goal = values.goal.trim();
  if (goal.length < MIN_GOAL) errors.goal = `Tell us a little more, at least ${MIN_GOAL} characters.`;
  else if (goal.length > MAX_GOAL) errors.goal = `Keep this under ${MAX_GOAL} characters.`;

  if (!values.consent) errors.consent = 'Tick the box so we can use these details to reply.';
  return errors;
}

function buildSummary(v) {
  const lines = [
    'Hi InfiniTechnologies, I’d like a quote.',
    '',
    `Name: ${v.name.trim()}`,
    `Preferred contact: ${v.contactMethod}, ${v.contact.trim()}`,
  ];
  if (v.business.trim()) lines.push(`Business: ${v.business.trim()}`);
  lines.push(`Service: ${v.service}`);
  if (v.budget) lines.push(`Budget: ${v.budget}`);
  if (v.timeframe) lines.push(`Timeframe: ${v.timeframe}`);
  lines.push('', 'What I want to achieve:', v.goal.trim());
  return lines.join('\n');
}

const fieldOrder = ['name', 'contact', 'service', 'goal', 'consent'];

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] font-semibold text-brand-ink">
        {label}
        {optional && <span className="ml-1.5 text-sm font-normal text-brand-muted">optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-brand-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // status: idle | sending | sent | handoff | failed
  const [status, setStatus] = useState('idle');
  const [summary, setSummary] = useState('');
  const formRef = useRef(null);

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const describe = (field, hasHint) =>
    errors[field] ? `quote-${field}-error` : hasHint ? `quote-${field}-hint` : undefined;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;

    const found = validate(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.querySelector(`#quote-${firstInvalid}`)?.focus();
      return;
    }

    // Honeypot: bots fill hidden fields. Pretend it worked and send nothing.
    if (values.website) {
      setStatus('sent');
      return;
    }

    const text = buildSummary(values);
    setSummary(text);

    if (!QUOTE_FORM_ENDPOINT) {
      // No inbox is connected yet, so hand the enquiry to WhatsApp rather than pretend it was sent.
      window.open(waLink(text), '_blank', 'noopener,noreferrer');
      setStatus('handoff');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          preferredContact: values.contactMethod,
          contact: values.contact.trim(),
          business: values.business.trim(),
          service: values.service,
          goal: values.goal.trim(),
          budget: values.budget || 'Not given',
          timeframe: values.timeframe || 'Not given',
          consent: 'Agreed to the Privacy Notice',
        }),
      });
      if (!response.ok) throw new Error(`Form service returned HTTP ${response.status}`);
      setStatus('sent');
    } catch (error) {
      console.error('Quote form submission failed:', error);
      setStatus('failed');
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  };

  const inputClass = (field) => `field ${errors[field] ? 'field-error' : ''}`;

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
        <h3 className="text-[22px] font-semibold">Thanks, we have your enquiry</h3>
        <p className="mt-2 text-base leading-relaxed text-brand-muted">
          We will reply {RESPONSE_WINDOW} using the contact details you gave us. If you need to add something, message us on WhatsApp.
        </p>
        <button type="button" onClick={reset} className="mt-5 inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  if (status === 'handoff' || status === 'failed') {
    const failed = status === 'failed';
    return (
      <div role="status" className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
        <h3 className="text-[22px] font-semibold">{failed ? 'Your enquiry was not sent' : 'One more step: send it on WhatsApp'}</h3>
        <p className="mt-2 text-base leading-relaxed text-brand-muted">
          {failed
            ? 'Something went wrong and we could not deliver the form. Your details are ready below, so you can send them to us another way.'
            : 'We have opened WhatsApp with your details filled in. Press send there to deliver your enquiry. If nothing opened, use the buttons below.'}
        </p>
        <pre className="mt-4 max-h-48 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-brand-surface p-4 font-sans text-sm leading-relaxed text-brand-body">{summary}</pre>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={waLink(summary)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open WhatsApp
          </a>
          <a href={mailLink('Quote request', summary)} className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-brand-line px-6 text-[15px] font-semibold text-brand-blue hover:bg-brand-surface">
            Send by email
          </a>
        </div>
        <button type="button" onClick={() => setStatus('idle')} className="mt-4 inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline">
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-2xl border border-brand-line bg-white p-5 sm:p-8">
      <h3 className="text-[22px] font-semibold">Tell us about your project</h3>
      <p className="mt-1.5 mb-6 text-[15px] text-brand-muted">Takes about two minutes. We only ask for what we need to reply.</p>

      <div className="grid gap-5">
        <Field id="quote-name" label="Your name" error={errors.name}>
          <input id="quote-name" type="text" autoComplete="name" value={values.name} onChange={update('name')} aria-invalid={Boolean(errors.name)} aria-describedby={describe('name')} className={inputClass('name')} />
        </Field>

        <div className="grid gap-5 sm:grid-cols-[160px_minmax(0,1fr)]">
          <Field id="quote-contactMethod" label="Reply by">
            <select id="quote-contactMethod" value={values.contactMethod} onChange={update('contactMethod')} className="field">
              <option>WhatsApp</option>
              <option>Phone call</option>
              <option>Email</option>
            </select>
          </Field>
          <Field id="quote-contact" label={values.contactMethod === 'Email' ? 'Email address' : 'Phone number'} error={errors.contact}>
            <input
              id="quote-contact"
              type={values.contactMethod === 'Email' ? 'email' : 'tel'}
              inputMode={values.contactMethod === 'Email' ? 'email' : 'tel'}
              autoComplete={values.contactMethod === 'Email' ? 'email' : 'tel'}
              placeholder={values.contactMethod === 'Email' ? 'name@example.com' : '0712 345 678'}
              value={values.contact}
              onChange={update('contact')}
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={describe('contact')}
              className={inputClass('contact')}
            />
          </Field>
        </div>

        <Field id="quote-business" label="Business name" optional>
          <input id="quote-business" type="text" autoComplete="organization" value={values.business} onChange={update('business')} className="field" />
        </Field>

        <Field id="quote-service" label="What do you need?" error={errors.service}>
          <select id="quote-service" value={values.service} onChange={update('service')} aria-invalid={Boolean(errors.service)} aria-describedby={describe('service')} className={inputClass('service')}>
            <option value="">Choose a service</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field id="quote-goal" label="What are you trying to achieve?" error={errors.goal} hint={`For example: customers keep asking our prices on WhatsApp and I want them to find answers on their own. (${values.goal.trim().length}/${MAX_GOAL})`}>
          <textarea
            id="quote-goal"
            rows={4}
            maxLength={MAX_GOAL + 50}
            value={values.goal}
            onChange={update('goal')}
            aria-invalid={Boolean(errors.goal)}
            aria-describedby={describe('goal', true)}
            className={inputClass('goal')}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="quote-budget" label="Budget range" optional>
            <select id="quote-budget" value={values.budget} onChange={update('budget')} className="field">
              <option value="">Choose a range</option>
              {BUDGET_RANGES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
          <Field id="quote-timeframe" label="When do you need it?" optional>
            <select id="quote-timeframe" value={values.timeframe} onChange={update('timeframe')} className="field">
              <option value="">Choose a timeframe</option>
              {TIMEFRAMES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Honeypot field: hidden from people and assistive tech, bots tend to fill it in. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="quote-hp-check">Leave this field empty</label>
          <input id="quote-hp-check" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update('website')} />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-snug text-brand-body">
            <input
              id="quote-consent"
              type="checkbox"
              checked={values.consent}
              onChange={update('consent')}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={describe('consent')}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[#0B6FA4]"
            />
            <span>
              I agree that InfiniTechnologies may use these details to reply to my enquiry, as described in the{' '}
              <a href="/privacy/" className="font-semibold text-brand-blue underline">
                Privacy Notice
              </a>
              . We use them for nothing else.
            </span>
          </label>
          {errors.consent && (
            <p id="quote-consent-error" role="alert" className="mt-1.5 text-sm font-medium text-[#B42318]">
              {errors.consent}
            </p>
          )}
        </div>

        <div>
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:cursor-wait disabled:opacity-70">
            {status === 'sending' ? 'Sending…' : QUOTE_FORM_ENDPOINT ? 'Send my enquiry' : 'Continue on WhatsApp'}
          </button>
          <p className="mt-3 text-sm text-brand-muted">
            {QUOTE_FORM_ENDPOINT
              ? `We reply ${RESPONSE_WINDOW}.`
              : `This opens WhatsApp with your details filled in. Prefer email? Write to ${CONTACT.email}.`}
          </p>
        </div>
      </div>
    </form>
  );
}
