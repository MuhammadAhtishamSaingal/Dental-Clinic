'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-teal flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  DENTAL<span className="text-brand-teal">CLINIC</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold -mt-1">
                  Premium Oral Care
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the highest standards of dentistry in a modern, luxurious, and caring environment. Your healthy, confident smile is our ultimate mission.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Linkedin">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-3 mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-brand-teal transition-colors">Meet Our Doctors</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-teal transition-colors">Oral Health Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-teal transition-colors">F.A.Q.</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-teal transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-3 mb-6">
              Popular Services
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-brand-teal transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-3 mb-6">
                Stay Updated
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Subscribe to our newsletter to receive the latest oral hygiene tips, offers, and news from our care team.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs w-full focus:outline-none focus:border-brand-teal text-white"
                />
                <button
                  type="submit"
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
              {subscribed && (
                <p className="text-brand-teal text-xs mt-2 font-medium">Thank you for subscribing!</p>
              )}
            </div>

            <div className="flex flex-col gap-3 text-xs text-slate-400 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>123 Medical Plaza, Block 5, Clifton, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="tel:+923070984307" className="hover:text-white transition-colors">+92 307 0984307</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-teal shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.249 8.477 3.518 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 12.003-2.003-.001-3.975-.515-5.729-1.498L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403-.005 9.792-4.393 9.795-9.799.002-2.618-1.01-5.078-2.852-6.92C16.371 2.043 13.918 1.03 11.3 1.03C5.9 1.033 1.51 5.422 1.507 10.828c-.001 1.562.41 3.09 1.19 4.437l-.993 3.63 3.733-.979a9.69 9.69 0 0 0 4.62 1.238zm11.233-5.32c-.3-.149-1.772-.874-2.046-.974-.275-.1-.475-.149-.675.15-.2.299-.775.974-.95 1.174-.175.2-.35.224-.65.075-1.127-.566-1.928-1.009-2.702-2.33-.2-.343.2-.319.574-1.07.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.589-.493-.509-.675-.518-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.3-.1.574-.1 1.449s.625 1.724.712 1.849c.088.125 2.19 3.344 5.305 4.69.74.32 1.317.51 1.768.653.743.236 1.42.203 1.956.123.598-.09 1.772-.724 2.022-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
                <a href="https://wa.me/923070984307" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Chat</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="mailto:beverlyhillsofficiallll@gmail.com" className="hover:text-white transition-colors">beverlyhillsofficiallll@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-850 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear ?? 2026} Premium Dental Clinic Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
