import React, { useState } from 'react';
import {
  CheckCircleIcon,
  ClockIcon,
  GraduationCapIcon,
  CodeIcon,
} from 'lucide-react';

export function CourseInfoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="kurs" className="py-20 text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Kurs Haqida
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Frontend dasturlash kursimiz orqali zamonaviy veb-saytlar yaratishni
            o'rganasiz va eng so'nggi texnologiyalar bilan tanishasiz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="relative aspect-w-16 aspect-h-9">
              {showVideo ? (
                <iframe
                  className="w-full h-64 rounded-t-lg"
                  src="https://www.youtube.com/embed/ZVOgJ6ybT48?autoplay=1"
                  title="Frontend kursi haqida"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Frontend dasturlash kursi"
                    className="object-cover w-full h-64 rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <button
                      onClick={() => setShowVideo(true)}
                      className="flex items-center justify-center w-16 h-16 transition-all bg-white rounded-full cursor-pointer bg-opacity-90 hover:bg-opacity-100"
                    >
                      <svg
                        className="w-8 h-8 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Kurs Video Taqdimoti
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kursimizning qisqacha tanishtiruv videosini tomosha qiling va
                nimalarni o'rganishingiz haqida ma'lumot oling.
              </p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              Kurs Tafsilotlari
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <ClockIcon size={24} className="flex-shrink-0 mt-1 mr-4 text-indigo-600" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Davomiyligi</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    6 oy, haftada 3 kun, kuniga 2 soat
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCapIcon size={24} className="flex-shrink-0 mt-1 mr-4 text-indigo-600" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Darajasi</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Boshlang'ich darajadan professional darajagacha
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CodeIcon size={24} className="flex-shrink-0 mt-1 mr-4 text-indigo-600" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Texnologiyalar</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon size={24} className="flex-shrink-0 mt-1 mr-4 text-indigo-600" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Natija</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Portfolio, sertifikat va ish topishda yordam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



//   Kurs Haqida