import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { ArrowRightIcon } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-900 dark:to-black">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-28">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Frontend Dasturlash Kursiga Xush Kelibsiz!
            </h1>
            <p className="text-lg md:text-xl opacity-90 dark:opacity-80 dark:text-gray-300">
              Zamonaviy veb-saytlar yaratishni o‘rganing va eng so‘nggi
              texnologiyalar bilan professional dasturchiga aylaning.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" onClick={() => navigate('/login')}>
                Hozir Ro‘yxatdan O‘ting
              </Button>

              <Button variant="secondary" onClick={() => navigate('/courseinfosection')}>
                Batafsil Ma’lumot <ArrowRightIcon size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute w-64 h-64 bg-yellow-400 rounded-full -top-8 -right-8 opacity-20 dark:opacity-10"></div>
            <div className="absolute w-48 h-48 bg-pink-400 rounded-full -bottom-8 -left-8 opacity-20 dark:opacity-10"></div>
            <div className="relative z-10 overflow-hidden border-4 rounded-lg shadow-2xl border-white/20">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Frontend dasturlash"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
