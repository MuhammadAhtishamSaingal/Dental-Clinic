export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    category: 'Appointments',
    question: 'How can I book an appointment?',
    answer: 'You can easily book an appointment online through our interactive booking form, contact us directly via our phone number, or click the floating WhatsApp button to chat with our front desk team in real-time.'
  },
  {
    category: 'Insurance',
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept most major PPO dental insurance plans. Our administrative team will handle all the paperwork and file claims directly with your provider to maximize your coverage and minimize out-of-pocket expenses.'
  },
  {
    category: 'Emergency',
    question: 'What constitutes a dental emergency?',
    answer: 'A dental emergency includes severe, throbbing tooth pain, bleeding or swelling in the gums, jaw, or face, a knocked-out tooth, a cracked or broken tooth with pain, or a dislodged crown or filling. Contact us immediately for same-day emergency appointments.'
  },
  {
    category: 'Pricing',
    question: 'Do you offer payment plans or financing?',
    answer: 'We believe premium dental care should be accessible. We partner with CareCredit and other dental financing companies to offer flexible, interest-free, or low-interest monthly payment plans for treatments like implants, veneers, and braces.'
  },
  {
    category: 'Hygiene',
    question: 'How often should I have professional teeth cleanings?',
    answer: 'For most patients, we recommend scheduling a routine exam and cleaning every six months. If you have a history of gum disease or are prone to heavy plaque buildup, we may suggest visiting us every three to four months.'
  },
  {
    category: 'Pediatric',
    question: 'At what age should my child start visiting the dentist?',
    answer: 'We recommend children have their first dental visit around their first birthday or within six months of their first baby tooth erupting. This helps them get comfortable with the clinic environment and prevents early decay.'
  }
];
