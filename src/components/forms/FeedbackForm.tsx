'use client';

import { useState } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';

export function FeedbackForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('Thanks for your feedback!');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('Failed to submit. Please try again.');
      }
    } catch {
      setStatus('An error occurred.');
    }
    setLoading(false);
  }

  return (
    <SectionWrapper id="feedback" title="Feedback">
       <div className="flex flex-col w-full max-w-2xl mx-auto">
          <h2 className="font-calistoga text-3xl md:text-5xl text-white font-bold mb-4">Transpo is just getting started.</h2>
          <p className="text-white/80 text-lg mb-12 font-medium">Your feedback directly influences what we build next.</p>
          
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="relative">
              <input name="name" type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors font-medium text-lg" />
            </div>
            <div className="relative">
              <input name="email" type="email" required placeholder="Email" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors font-medium text-lg" />
            </div>
            <div className="relative">
              <input name="message" type="text" required placeholder="How may we help?" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors font-medium text-lg" />
            </div>
            
            <div className="flex justify-center mt-6">
               <button disabled={loading} type="submit" className="bg-cta-bg text-cta-fg px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 border border-white/10 text-lg">
                 {loading ? 'Sending...' : 'Send feedback'}
               </button>
            </div>
            {status && <p className="text-center text-brand-yellow text-sm mt-4 font-bold tracking-wide">{status}</p>}
          </form>
       </div>
    </SectionWrapper>
  );
}
