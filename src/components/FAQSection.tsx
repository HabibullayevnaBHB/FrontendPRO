import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex items-center justify-between w-full py-4 font-medium text-left text-gray-900 dark:text-white focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUpIcon size={20} className="text-indigo-600" />
        ) : (
          <ChevronDownIcon size={20} className="text-indigo-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 pr-12">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "Kursni boshlash uchun qanday bilim kerak?",
      answer:
        "Kursni boshlash uchun faqatgina kompyuter savodxonligi va internetdan foydalanish ko‘nikmasi yetarli. Biz sizni noldan boshlab o‘rgatamiz.",
    },
    {
      question: "Kurs qancha davom etadi?",
      answer:
        "Kurs 6 oy davom etadi. Haftada 3 kun, har bir dars 2 soatdan iborat bo‘ladi. Mustaqil ish uchun qo‘shimcha materiallar ham taqdim etiladi.",
    },
    {
      question: "Men ishlayman, kursni kechqurun o'rgana olamanmi?",
      answer:
        "Ha, albatta! Bizda kechki guruhlar mavjud. Bundan tashqari, barcha darslar yozib olinadi, siz ularni istalgan vaqtda ko‘rishingiz mumkin.",
    },
    {
      question: "Kurs tugagandan so'ng qanday yordam olaman?",
      answer:
        "Kurs yakunida sizga sertifikat va portfolio taqdim etiladi. Eng faol o‘quvchilarga esa ish topishda yordam beramiz va hamkor kompaniyalarga tavsiya qilamiz.",
    },
    {
      question: "Agar men darsni o'tkazib yuborsam nima bo'ladi?",
      answer:
        "Hech narsa yo‘qotmaysiz. Har bir dars yozib olinadi va siz ularni qayta ko‘rishingiz mumkin. Bundan tashqari, mentor yordami ham taqdim etiladi.",
    },
    {
      question: "To'lovni bo'lib-bo'lib to'lash mumkinmi?",
      answer:
        "Ha, to‘lovni 3 ta qismga bo‘lib to‘lashingiz mumkin. Bundan tashqari, talabalar va ijtimoiy himoyaga muhtojlar uchun maxsus chegirmalar ham mavjud.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Ko'p so'raladigan savollar
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Kursimiz haqida eng ko‘p beriladigan savollar va ularning javoblari.
          </p>
        </div>
        <div className="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



//  Ko'p So'raladigan Savollar