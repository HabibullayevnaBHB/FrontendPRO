import React from 'react';
import { Button } from './ui/Button';
import { CheckIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PricingSection() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Asosiy',
      price: '499,000',
      description: "Frontend dasturlashni o'rganish uchun asosiy kurs",
      features: ['6 oylik kurs', 'Video darslar', 'Asosiy loyihalar', 'Sertifikat', 'Guruh chati'],
      notIncluded: ['Shaxsiy mentor', 'Portfolio loyihalari', 'Ish topishda yordam'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '899,000',
      description: "Eng mashhur va to'liq kurs",
      features: [
        '6 oylik kurs',
        'Video darslar',
        'Murakkab loyihalar',
        'Sertifikat',
        'Guruh chati',
        'Shaxsiy mentor',
        'Portfolio loyihalari',
        'Ish topishda yordam',
      ],
      notIncluded: [],
      popular: true,
    },
    {
      name: 'Korporativ',
      price: 'Shaxsiy narx',
      description: 'Kompaniyalar uchun maxsus taklif',
      features: [
        'Moslashtirilgan dastur',
        'Kompaniya ehtiyojlariga qarab',
        'Jamoa uchun trening',
        "Loyihaga asoslangan o'qitish",
        'Korporativ sertifikat',
        "24/7 qo'llab-quvvatlash",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const handleRegister = (planName) => {
    navigate(`/register/${planName.toLowerCase()}`);
  };

  return (
    <section className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Narxlar
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            O'zingizga mos bo'lgan kurs turini tanlang va frontend dasturlashni bugundan boshlang!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${
                plan.popular ? 'ring-2 ring-indigo-600 scale-105 md:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <div className="py-2 text-sm font-medium text-center text-white bg-indigo-600 dark:bg-indigo-500">
                  Eng mashhur
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.price !== 'Shaxsiy narx' && (
                    <span className="text-gray-600 dark:text-gray-300"> so'm/oyiga</span>
                  )}
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">{plan.description}</p>
                <Button
                  onClick={() => handleRegister(plan.name)}
                  variant={plan.popular ? 'secondary' : 'outline'}
                  size="large"
                >
                  Ro'yxatdan o'tish
                </Button>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon size={18} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400 dark:text-gray-500">
                      <XIcon size={18} className="mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// narxlar bo'limi