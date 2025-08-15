import React from 'react';
import {
  BookOpenIcon,
  UsersIcon,
  VideoIcon,
  AwardIcon,
  CodeIcon,
  ServerIcon,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpenIcon size={24} className="text-indigo-600" />,
      title: 'Amaliy Loyihalar',
      description:
        "Haqiqiy loyihalar ustida ishlash orqali real tajriba orttiring va portfolio yarating.",
    },
    {
      icon: <UsersIcon size={24} className="text-indigo-600" />,
      title: 'Jamoa Bilan Ishlash',
      description:
        "Jamoada ishlash ko'nikmalarini rivojlantiring va boshqa dasturchilar bilan tajriba almashing.",
    },
    {
      icon: <VideoIcon size={24} className="text-indigo-600" />,
      title: 'Video Darslar',
      description:
        "Har bir mavzu uchun sifatli video darslar va amaliy mashg'ulotlar mavjud.",
    },
    {
      icon: <AwardIcon size={24} className="text-indigo-600" />,
      title: 'Sertifikat',
      description:
        "Kursni muvaffaqiyatli yakunlaganingizdan so‘ng rasmiy sertifikatga ega bo‘lasiz.",
    },
    {
      icon: <CodeIcon size={24} className="text-indigo-600" />,
      title: 'Zamonaviy Texnologiyalar',
      description:
        "Eng so‘nggi frontend texnologiyalari: React, TypeScript, Tailwind CSS va boshqalar bilan ishlashni o‘rganing.",
    },
    {
      icon: <ServerIcon size={24} className="text-indigo-600" />,
      title: 'API Integratsiyasi',
      description:
        "Backend API bilan ishlash, maʼlumotlar almashinuvi va integratsiyalarni o‘rganasiz.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Kursning Afzalliklari
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Frontend dasturlash kursimiz sizga quyidagi imkoniyatlarni taqdim
            etadi.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-shadow rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-full dark:bg-indigo-600/20">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


//  Kursning Afzalliklari