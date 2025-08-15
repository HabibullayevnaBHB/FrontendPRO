import React, { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function RegistrationPage() {
  const navigate = useNavigate();
  const { plan } = useParams<{ plan: string }>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = (e.currentTarget.elements.namedItem('firstName') as HTMLInputElement).value;
    const lastName = (e.currentTarget.elements.namedItem('lastName') as HTMLInputElement).value;
    const fullName = `${firstName} ${lastName}`;
    const selectedCourse = plan || 'Nomaʼlum';

    localStorage.setItem('newStudent', JSON.stringify({
      name: fullName,
      course: selectedCourse,
    }));

    navigate(`/payment/${plan}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 transition-colors bg-gradient-to-br from-gray-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <div className="w-full max-w-xl p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl dark:bg-gray-800 dark:border-gray-600">
        {/* ↩️ Qaytish tugmasi */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 font-medium text-indigo-600 transition hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Ortga qaytish</span>
        </button>

        {/* 🧾 Sarlavha */}
        <h2 className="mb-2 text-3xl font-bold text-gray-900 capitalize dark:text-white">
          {plan} kursiga ro'yxatdan o'tish
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Quyidagi formani to‘ldirib, ro'yxatdan o'ting. Operatorlarimiz siz bilan bog‘lanadi.
        </p>

        {/* 📋 Forma */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Ismingiz</label>
            <input
              id="firstName"
              type="text"
              required
              placeholder="Ism"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:border-gray-500 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Familiyangiz</label>
            <input
              id="lastName"
              type="text"
              required
              placeholder="Familiya"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:border-gray-500 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Telefon raqami</label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="+998  ## ### ## ##"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:border-gray-500 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
