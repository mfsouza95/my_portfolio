'use client'
import { Mail, MessageSquare, Send, User } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center md:text-left mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Contact me</h2>
        <p className="text-slate-400 text-sm">
          If you have any questions, offers or just want to chat? Send me a message!
        </p>
      </div>

      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-md space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
              <User size={14} /> First name
            </label>
            <input 
              type="text" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
              <User size={14} /> Last name
            </label>
            <input 
              type="text" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <Mail size={14} /> E-mail
          </label>
          <input 
            type="email" 
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <MessageSquare size={14} /> Message
          </label>
          <textarea 
            rows={5}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full resize-none"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            className="flex items-center justify-center gap-2 w-full md:w-auto bg-linear-to-r from-teal-500 to-blue-500 text-white font-medium text-sm px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            <span>Submit</span>
            <Send size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}