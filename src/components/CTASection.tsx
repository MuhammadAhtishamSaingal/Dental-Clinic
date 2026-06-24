'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, Phone, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-brand-dark overflow-hidden reveal">
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(243,232,131,0.08),transparent)] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full border border-brand-teal/20 text-xs font-bold uppercase tracking-wider mb-8">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Easy Online Scheduling</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3e883] tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Achieve Your Perfect, Confident Smile?
        </h2>
        
        <p className="text-slate-400 text-sm sm:text-md mt-6 leading-relaxed max-w-xl mx-auto font-medium">
          Request an appointment online in under 2 minutes. Our team will contact you shortly to confirm your preferred slot.
        </p>

        {/* Benefits list */}
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-slate-300 mt-8 mb-12">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span>Accepting New Patients</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span>Emergency Slots Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span>Direct Billing to Insurance</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/booking"
            className="bg-brand-teal hover:bg-brand-teal-hover text-black px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-all shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/35 cursor-pointer hover:scale-104"
          >
            Book Appointment Online
          </Link>
          <a
            href="tel:+923070984307"
            className="border border-[#f3e883]/30 hover:border-[#f3e883] bg-transparent hover:bg-[#f3e883] text-[#f3e883] hover:text-black px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-all flex items-center gap-2 cursor-pointer hover:scale-104"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>Call +92 307 0984307</span>
          </a>
          <a
            href="https://wa.me/923070984307"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-all shadow-lg flex items-center gap-2 cursor-pointer hover:scale-104"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.249 8.477 3.518 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 12.003-2.003-.001-3.975-.515-5.729-1.498L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403-.005 9.792-4.393 9.795-9.799.002-2.618-1.01-5.078-2.852-6.92C16.371 2.043 13.918 1.03 11.3 1.03C5.9 1.033 1.51 5.422 1.507 10.828c-.001 1.562.41 3.09 1.19 4.437l-.993 3.63 3.733-.979a9.69 9.69 0 0 0 4.62 1.238zm11.233-5.32c-.3-.149-1.772-.874-2.046-.974-.275-.1-.475-.149-.675.15-.2.299-.775.974-.95 1.174-.175.2-.35.224-.65.075-1.127-.566-1.928-1.009-2.702-2.33-.2-.343.2-.319.574-1.07.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.589-.493-.509-.675-.518-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.3-.1.574-.1 1.449s.625 1.724.712 1.849c.088.125 2.19 3.344 5.305 4.69.74.32 1.317.51 1.768.653.743.236 1.42.203 1.956.123.598-.09 1.772-.724 2.022-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
            </svg>
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
