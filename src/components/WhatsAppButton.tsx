'use client';

import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923070984307?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20dental%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg">
        Chat with us
      </span>
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.249 8.477 3.518 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 12.003-2.003-.001-3.975-.515-5.729-1.498L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403-.005 9.792-4.393 9.795-9.799.002-2.618-1.01-5.078-2.852-6.92C16.371 2.043 13.918 1.03 11.3 1.03C5.9 1.033 1.51 5.422 1.507 10.828c-.001 1.562.41 3.09 1.19 4.437l-.993 3.63 3.733-.979a9.69 9.69 0 0 0 4.62 1.238zm11.233-5.32c-.3-.149-1.772-.874-2.046-.974-.275-.1-.475-.149-.675.15-.2.299-.775.974-.95 1.174-.175.2-.35.224-.65.075-1.127-.566-1.928-1.009-2.702-2.33-.2-.343.2-.319.574-1.07.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.589-.493-.509-.675-.518-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.3-.1.574-.1 1.449s.625 1.724.712 1.849c.088.125 2.19 3.344 5.305 4.69.74.32 1.317.51 1.768.653.743.236 1.42.203 1.956.123.598-.09 1.772-.724 2.022-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
      </svg>
    </a>
  );
}
