// Client for EVA, the website assistant.
//
// SECURITY: this file runs in the visitor's browser. It never holds an API key, a model
// name or the system prompt. It sends only the visitor's conversation to OUR server
// endpoint (VITE_EVA_API_URL), which owns the key, the instructions and the rate limits.
// See server/eva-proxy for a reference implementation.
//
// Contract:  POST { messages: [{ role: 'user' | 'assistant', content: string }] }
//            -> 200 { reply: string }

const EVA_API_URL = import.meta.env.VITE_EVA_API_URL;
const REQUEST_TIMEOUT_MS = 30000;

export const MAX_INPUT_CHARS = 500;
const MAX_HISTORY = 12; // messages kept and sent
const MIN_GAP_MS = 1500; // basic client-side throttle (the server enforces the real limit)

const conversationHistory = [];
let lastSentAt = 0;

export const isEVAConfigured = Boolean(EVA_API_URL);

const UNAVAILABLE =
  'EVA is not available right now. Please use “Talk to a person” and the team will help you.';

export async function sendMessageToEVA(userMessage) {
  if (!EVA_API_URL) return { success: false, message: UNAVAILABLE };

  const now = Date.now();
  if (now - lastSentAt < MIN_GAP_MS) {
    return { success: false, message: 'Please wait a moment before sending another message.' };
  }
  lastSentAt = now;

  const content = userMessage.slice(0, MAX_INPUT_CHARS);
  const messages = [...conversationHistory, { role: 'user', content }];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(EVA_API_URL, {
      signal: controller.signal,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });

    if (response.status === 429) {
      return { success: false, message: 'EVA is receiving a lot of messages. Please try again shortly, or talk to a person.' };
    }
    if (!response.ok) throw new Error(`EVA service returned HTTP ${response.status}`);

    const data = await response.json();
    const reply = data?.reply;
    if (typeof reply !== 'string' || !reply.trim()) throw new Error('EVA service returned an empty response');

    conversationHistory.push({ role: 'user', content }, { role: 'assistant', content: reply });
    if (conversationHistory.length > MAX_HISTORY) {
      conversationHistory.splice(0, conversationHistory.length - MAX_HISTORY);
    }
    return { success: true, message: reply };
  } catch (error) {
    console.error('EVA request failed:', error);
    return { success: false, message: UNAVAILABLE };
  } finally {
    clearTimeout(timeoutId);
  }
}

// A short summary of what the visitor asked, so a person can pick up where EVA left off.
export function getEnquirySummary() {
  const asked = conversationHistory.filter((m) => m.role === 'user').map((m) => m.content);
  return asked.slice(-3).join('\n- ');
}

export function resetConversation() {
  conversationHistory.length = 0;
}
