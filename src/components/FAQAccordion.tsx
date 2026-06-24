'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/data/faqs';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  // Store open state index mapping
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto w-full">
      {items.map((item, index) => {
        const isOpen = !!openIndexes[index];
        return (
          <div
            key={index}
            className="border border-slate-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-slate-200"
          >
            {/* Header/Question Trigger */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-start sm:items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3 pr-4">
                <HelpCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5 sm:mt-0" />
                <span className="font-extrabold text-sm sm:text-md text-brand-dark leading-snug">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-350 ${
                  isOpen ? 'rotate-180 text-brand-blue' : ''
                }`}
              />
            </button>

            {/* Answer body */}
            <div
              className={`transition-all duration-350 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[300px] border-t border-slate-50' : 'max-h-0'
              }`}
            >
              <div className="p-5 sm:p-6 bg-slate-50/50 text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
