'use client'
import { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { useLang } from '../context/LangContext';
import { Status, FormFields, FormErrors } from '../types';

export default function Contact() {
  const { t } = useLang();
  const [fields, setFields] = useState<FormFields>({ firstName: '', lastName: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!fields.firstName.trim()) e.firstName = t.contact.validation.firstNameRequired;
    if (!fields.lastName.trim()) e.lastName = t.contact.validation.lastNameRequired;
    if (!fields.email.trim()) {
      e.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = t.contact.validation.emailInvalid;
    }
    if (!fields.message.trim()) e.message = t.contact.validation.messageRequired;
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    if (!turnstileToken) return;
    setErrors({});
    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, 'cf-turnstile-response': turnstileToken }),
      });
      if (response.ok) {
        setStatus('success');
        setFields({ firstName: '', lastName: '', email: '', message: '' });
        setTurnstileToken(null);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-md text-center space-y-4">
          <p className="text-teal-400 font-mono text-sm uppercase tracking-widest">{t.contact.successCode}</p>
          <p className="text-white text-lg font-semibold">{t.contact.successTitle}</p>
          <p className="text-slate-400 text-sm">{t.contact.successMessage}</p>
          <button onClick={() => setStatus('idle')} className="mt-4 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-md border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-slate-300">
            {t.contact.sendAnother}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center md:text-left mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">{t.contact.heading}</h2>
        <p className="text-slate-400 text-sm">{t.contact.subheading}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
              <User size={14} /> {t.contact.firstName}
            </label>
            <input type="text" value={fields.firstName} onChange={(e) => setFields({ ...fields, firstName: e.target.value })}
              className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full ${errors.firstName ? 'border-red-500/70' : 'border-white/10'}`} />
            {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
              <User size={14} /> {t.contact.lastName}
            </label>
            <input type="text" value={fields.lastName} onChange={(e) => setFields({ ...fields, lastName: e.target.value })}
              className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full ${errors.lastName ? 'border-red-500/70' : 'border-white/10'}`} />
            {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <Mail size={14} /> {t.contact.email}
          </label>
          <input type="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })}
            className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full ${errors.email ? 'border-red-500/70' : 'border-white/10'}`} />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <MessageSquare size={14} /> {t.contact.message}
          </label>
          <textarea rows={5} value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })}
            className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full resize-none ${errors.message ? 'border-red-500/70' : 'border-white/10'}`} />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>
        {status === 'error' && <p className="text-red-400 text-xs text-center">{t.contact.errorMessage}</p>}
        {mounted && (
          <Turnstile
            siteKey="0x4AAAAAADiOXQ30aD1g9oX8"
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken(null)}
            options={{ theme: 'dark' }}
          />
        )}
        <div className="flex justify-end pt-2">
          <button type="submit" disabled={status === 'loading' || (mounted && !turnstileToken)}
            className="flex items-center justify-center gap-2 w-full md:w-auto bg-linear-to-r from-teal-500 to-blue-500 text-white font-medium text-sm px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            <span>{status === 'loading' ? t.contact.sending : t.contact.submit}</span>
            <Send size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}