'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/lib/siteConfig';

type FAQAccordionProps = {
  faqs: FAQ[];
};

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#1e1e1e] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#111] hover:bg-[#141414] transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm sm:text-base pr-4">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            'text-[#d4a93a] shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-6 pt-4 bg-[#0f0f0f] border-t border-[#1e1e1e]">
          <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3" role="list" aria-label="Frequently asked questions">
      {faqs.map((faq, i) => (
        <div key={faq.question} role="listitem">
          <FAQItem
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        </div>
      ))}
    </div>
  );
}
