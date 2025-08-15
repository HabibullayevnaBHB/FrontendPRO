import React from 'react';
import { LinkedinIcon, GithubIcon, GlobeIcon } from 'lucide-react';

export function InstructorSection() {
  return (
    <section id="instructor" className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Bizning <span className="text-indigo-600 dark:text-indigo-400">O‘qituvchilar</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Kursimiz <span className="font-semibold">tajribali</span> va o‘z sohasining <span className="font-semibold">mutaxassislari</span> tomonidan olib boriladi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* O‘qituvchi 1 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80"
                alt="Jasur Rahimov"
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold text-white">Jasur Rahimov</h3>
                <p className="text-white text-opacity-90">Bosh O‘qituvchi</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                8+ yillik tajribaga ega <span className="font-semibold">frontend dasturchi</span>. Google, Facebook va boshqa yirik kompaniyalarda faoliyat yuritgan.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://github.com/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <GithubIcon size={20} />
                </a>
                <a href="https://overreacted.io/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <GlobeIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* O‘qituvchi 2 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
                alt="Nilufar Karimova"
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold text-white">Nilufar Karimova</h3>
                <p className="text-white text-opacity-90">UX/UI Dizayner</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                6+ yillik tajribaga ega <span className="font-semibold">UX/UI dizayner</span>. Figma va Adobe XD bilan samarali ishlash ko‘nikmalariga ega.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://overreacted.io/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <GlobeIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* O‘qituvchi 3 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                alt="Sardor Aliyev"
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold text-white">Sardor Aliyev</h3>
                <p className="text-white text-opacity-90">React Mutaxassisi</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                5+ yillik tajribaga ega <span className="font-semibold">React mutaxassisi</span>. Ko‘plab yirik loyihalarda yetakchi rolni bajargan.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://github.com/" target="_blank" className="text-gray-500 transition-colors dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



//  Bizning O'qituvchilar bo'limi