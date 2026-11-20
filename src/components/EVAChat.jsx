import { useEffect, useRef, useState } from 'react';
import { Loader2, Mail, Maximize2, MessageCircle, Minimize2, Phone, Send, X } from 'lucide-react';
import { CONTACT, HOURS, mailLink, waLink } from '../config';
import markLight from '../assets/infinitechnologies-mark-light.svg';
import {
  MAX_INPUT_CHARS,
  getEnquirySummary,
  isEVAConfigured,
  resetConversation,
  sendMessageToEVA,
} from '../services/evaAI';

const welcomeMessage =
  'Hi, I’m EVA, an AI assistant for InfiniTechnologies. I can answer questions about our services, but I can’t give prices or promise delivery dates. The team does that in a written quote. Please don’t share passwords, PINs or one-time codes here. You can talk to a person at any time.';

function handoffLink() {
  const summary = getEnquirySummary();
  const text = summary
    ? `Hi InfiniTechnologies, I was chatting with EVA on your website and would like to speak to a person.\n\nWhat I asked about:\n- ${summary}`
    : 'Hi InfiniTechnologies, I’d like to speak to a person about a project.';
  return waLink(text);
}

function ContactLinks({ withHandoff }) {
  const links = [
    { label: withHandoff ? 'Talk to a person' : 'WhatsApp', href: withHandoff ? handoffLink() : waLink(), icon: MessageCircle },
    { label: 'Email', href: mailLink('InfiniTechnologies enquiry'), icon: Mail },
    { label: 'Call', href: `tel:+${CONTACT.whatsapp}`, icon: Phone },
  ];
  return (
    <>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('tel:') || href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-brand-blue transition-colors hover:bg-brand-surface"
        >
          <Icon size={15} aria-hidden="true" />
          {label}
        </a>
      ))}
    </>
  );
}

function PanelHeader({ title, subtitle, isMinimized, onMinimize, onClose }) {
  return (
    <header className="flex items-center justify-between bg-brand-navy p-4 text-white">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
          <img src={markLight} alt="" aria-hidden="true" className="h-auto w-6" />
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-lg font-bold">{title}</h2>
          <p className="truncate text-xs text-brand-mist">{subtitle}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button type="button" onClick={onMinimize} className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10" aria-label={isMinimized ? 'Expand chat' : 'Minimise chat'}>
          {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
        </button>
        <button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10" aria-label="Close chat">
          <X size={16} />
        </button>
      </div>
    </header>
  );
}

const launcherClass =
  'fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-3 text-brand-navy shadow-dramatic transition-colors hover:bg-brand-orangeHover sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-4 sm:py-3';
const panelClass = (isMinimized) =>
  `fixed bottom-4 right-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-brand-line bg-white shadow-panel ${
    isMinimized ? 'h-20' : 'h-[min(600px,calc(100dvh-2rem))]'
  }`;

// Shown while EVA is not connected. A reliable human route beats a chatbot that looks broken.
function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) {
    return (
      <button type="button" onClick={() => setIsOpen(true)} className={launcherClass} aria-label="Open contact options">
        <MessageCircle size={20} aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline">Talk to us</span>
      </button>
    );
  }

  return (
    <section aria-label="Contact InfiniTechnologies" className={panelClass(isMinimized)}>
      <PanelHeader title="Talk to the team" subtitle="InfiniTechnologies" isMinimized={isMinimized} onMinimize={() => setIsMinimized((v) => !v)} onClose={() => setIsOpen(false)} />
      {!isMinimized && (
        <div className="flex-1 overflow-y-auto bg-brand-surface p-5">
          <p className="text-[15px] leading-relaxed text-brand-body">
            Message us and a person will reply. We are available {HOURS}.
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full">
            Chat on WhatsApp
          </a>
          <a href="#quote" onClick={() => setIsOpen(false)} className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] border border-brand-line bg-white px-6 text-[15px] font-semibold text-brand-blue hover:bg-white/60">
            Request a written quote
          </a>
          <nav aria-label="More ways to reach us" className="mt-4 flex justify-around">
            <ContactLinks withHandoff={false} />
          </nav>
          <p className="mt-5 text-sm text-brand-muted">EVA, our AI assistant, is coming soon.</p>
        </div>
      )}
    </section>
  );
}

function EVAPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(() => [
    { id: 'welcome', text: welcomeMessage, sender: 'eva', timestamp: new Date() },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  useEffect(() => {
    if (isOpen && !isMinimized) inputRef.current?.focus();
  }, [isOpen, isMinimized]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const text = inputValue.trim();
    if (!text || isSending) return;

    setMessages((current) => [...current, { id: `${Date.now()}-user`, text, sender: 'user', timestamp: new Date() }]);
    setInputValue('');
    setIsSending(true);

    const response = await sendMessageToEVA(text);
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-eva`, text: response.message, sender: 'eva', error: !response.success, timestamp: new Date() },
    ]);
    setIsSending(false);
  };

  const handleReset = () => {
    resetConversation();
    setMessages([{ id: `welcome-${Date.now()}`, text: welcomeMessage, sender: 'eva', timestamp: new Date() }]);
    setInputValue('');
  };

  if (!isOpen) {
    return (
      <button type="button" onClick={() => setIsOpen(true)} className={launcherClass} aria-label="Open chat with EVA, our AI assistant">
        <MessageCircle size={20} aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline">Ask EVA</span>
        <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-brand-orange bg-brand-cyan sm:static sm:h-2.5 sm:w-2.5 sm:border-0" aria-hidden="true" />
      </button>
    );
  }

  return (
    <section aria-label="EVA chat" className={panelClass(isMinimized)}>
      <PanelHeader title="EVA" subtitle="AI assistant for InfiniTechnologies" isMinimized={isMinimized} onMinimize={() => setIsMinimized((v) => !v)} onClose={() => setIsOpen(false)} />

      {!isMinimized && (
        <>
          <div className="flex-1 space-y-4 overflow-y-auto bg-brand-surface p-4" role="log" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'rounded-br-sm bg-brand-navy text-white'
                      : message.error
                        ? 'rounded-bl-sm border border-brand-orange/40 bg-brand-orange/10 text-brand-ink'
                        : 'rounded-bl-sm border border-brand-line bg-white text-brand-ink'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">{message.text}</p>
                  {message.id === 'welcome' || message.id.startsWith('welcome-') ? (
                    <a href="/privacy/" className="mt-2 inline-block text-xs font-semibold text-brand-blue underline">
                      How chat data is used
                    </a>
                  ) : null}
                  <time className="mt-1 block text-xs text-brand-muted">
                    {message.timestamp.toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' })}
                  </time>
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex items-center gap-2 text-sm text-brand-muted" aria-live="polite">
                <Loader2 size={16} className="animate-spin text-brand-blue" />
                EVA is typing…
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-brand-line bg-white p-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              maxLength={MAX_INPUT_CHARS}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Ask about our services"
              disabled={isSending}
              aria-label="Message EVA"
              className="min-w-0 flex-1 rounded-xl border border-brand-line bg-brand-surface px-4 py-3 text-base text-brand-ink placeholder:text-brand-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:opacity-60"
            />
            <button type="submit" disabled={!inputValue.trim() || isSending} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-brand-navy transition-colors hover:bg-brand-orangeHover disabled:cursor-not-allowed disabled:opacity-50" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>

          <nav aria-label="Contact InfiniTechnologies" className="flex flex-wrap items-center justify-around gap-x-2 border-t border-brand-line bg-white px-2 py-2">
            <ContactLinks withHandoff />
            <button type="button" onClick={handleReset} className="rounded-lg px-2 py-1 text-xs font-semibold text-brand-blue transition-colors hover:bg-brand-surface">
              New chat
            </button>
          </nav>
        </>
      )}
    </section>
  );
}

export default function EVAChat() {
  return isEVAConfigured ? <EVAPanel /> : <ContactWidget />;
}
