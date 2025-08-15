import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Student {
  name: string;
  course: string;
}

export function SuccessPage() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([
    { name: 'Azizbek Toshmatov', course: 'Asosiy' },
    { name: 'Malika Qodirova', course: 'Professional' },
    { name: 'Sherzod Islomov', course: 'Asosiy' },
    { name: 'Sevinch Ro‘ziyeva', course: 'Korporativ' },
  ]);

  useEffect(() => {
    const newStudentJSON = localStorage.getItem('newStudent');
    if (newStudentJSON) {
      const newStudent: Student = JSON.parse(newStudentJSON);
      setStudents((prev) => [...prev, newStudent]);
      localStorage.removeItem('newStudent');
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 transition-colors bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl p-8 bg-white shadow-xl rounded-2xl dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="mb-8 text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
          <h2 className="mb-2 text-2xl font-bold text-green-700 dark:text-green-400">
            To‘lov muvaffaqiyatli amalga oshirildi!
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Siz kursga yozildingiz. Operatorlarimiz tez orada siz bilan bog‘lanadi.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white">
            Yozilgan o‘quvchilar:
          </h3>
          <ul className="space-y-2">
            {students.map((student, index) => (
              <li
                key={index}
                className="flex justify-between px-4 py-2 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <span className="font-medium text-gray-900 dark:text-white">{student.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {student.course} kursi
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <button
            onClick={() => navigate('/')}
            className="w-full px-6 py-3 text-white transition bg-indigo-600 rounded-md sm:w-auto hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Bosh sahifaga qaytish
          </button>

          <a
            href="https://t.me/Oyqiz_19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 px-6 py-3 text-indigo-600 transition border border-indigo-500 rounded-md sm:w-auto hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700"
          >
            <ArrowRight className="w-5 h-5" />
            Telegram kanalga o‘tish
          </a>
        </div>
      </div>
    </div>
  );
}
