'use client';

import { useState } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';

export function SignupForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("You're on the list!");
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
    <SectionWrapper id="signup" title="Sign Up">
       <div className="flex flex-col w-full max-w-2xl mx-auto items-center text-center">
          <h2 className="font-calistoga text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">Be the first to experience<br/>Transpo</h2>
          <p className="text-white/80 text-lg mb-12 font-medium">We&apos;re building the future of adaptive audio.<br/>Join early and get access to new tools before anyone else.</p>
          
          <form className="flex flex-col w-full max-w-md gap-6" onSubmit={handleSubmit}>
            <input name="email" type="email" required placeholder="Enter your email" className="w-full bg-white text-black py-4 px-6 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-brand-orange/50 font-bold placeholder-gray-400" />
            
            <div className="flex w-full mt-2">
               <button disabled={loading} type="submit" className="w-full bg-cta-bg text-cta-fg px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg disabled:opacity-50 border border-white/10">
                 {loading ? 'Joining...' : 'Get early access'}
               </button>
            </div>
            {status && <p className="text-center text-brand-yellow text-md mt-2 font-bold">{status}</p>}
          </form>
       </div>
    </SectionWrapper>
  );
}
