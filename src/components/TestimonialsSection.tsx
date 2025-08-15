import React from 'react';
import { StarIcon } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aziza Karimova',
      role: 'Frontend dasturchi, ABC Company',
      content:
        "Bu kurs mening hayotimni o'zgartirdi! Men boshlang'ich bilimlar bilan kursga kirdim, va 6 oydan so'ng professional frontend dasturchi sifatida ish topdim.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
      rating: 5,
    },
    {
      name: 'Bobur Saidov',
      role: 'Web dasturchi, XYZ Agency',
      content:
        "Men bir nechta onlayn kurslarni ko'rib chiqqanman, lekin bu kurs eng yaxshisi. Amaliy loyihalar va o'qituvchilarning qo'llab-quvvatlashi tufayli men tez o'rgandim.",
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
      rating: 5,
    },
    {
      name: 'Gulnora Rahimova',
      role: 'Freelancer',
      content:
        "Men kursni tugatgandan so'ng, mustaqil ishlay boshladim va hozir xorijiy mijozlar bilan ishlayapman. Bu kurs menga nafaqat texnik ko'nikmalar, balki kasbiy o'sish uchun ham yordam berdi.",
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
      rating: 4,
    },
  ];

  return (
    <section className="py-20 transition-colors duration-300 bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            O'quvchilarimiz Fikrlari
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Kursimizni muvaffaqiyatli tugatgan o'quvchilarimizning fikrlari bilan tanishing
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 transition-transform duration-300 ease-in-out rounded-lg shadow-sm dark:shadow-md bg-gray-50 dark:bg-gray-800 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="object-cover w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    className={`mr-1 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="italic text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
