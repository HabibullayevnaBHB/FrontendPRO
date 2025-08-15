// src/pages/Register.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  name: z.string().min(2, "Ism kamida 2 ta harf bo‘lishi kerak"),
  email: z.string().email("Email noto‘g‘ri kiritilgan"),
  password: z.string().min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),
});

type FormData = z.infer<typeof schema>;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem('user', JSON.stringify(data));
    alert("Ro'yxatdan o'tish muvaffaqiyatli!");
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700">Ro‘yxatdan O‘tish</h2>

        {/* Ism */}
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">Ism</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder="Ismingiz"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="email@example.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Parol */}
        <div>
          <label htmlFor="password" className="block mb-1 font-semibold text-gray-700">Parol</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register('password')}
              placeholder="Parolingiz"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-sm cursor-pointer text-indigo-500 select-none"
            >
              {showPassword ? "Yashirish" : "Ko‘rsatish"}
            </span>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Ro‘yxatdan o‘tish
        </button>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600">
          Allaqachon akkountingiz bormi?{' '}
          <span
            className="text-indigo-600 cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Kirish
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
