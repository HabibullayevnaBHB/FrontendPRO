import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const schema = z.object({
  email: z.string().email("Email noto‘g‘ri"),
  password: z.string().min(6, "Parol noto‘g‘ri"),
});

type FormData = z.infer<typeof schema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (savedUser.email === data.email && savedUser.password === data.password) {
      login({ email: data.email });
      navigate('/');
    } else {
      alert("Login yoki parol noto‘g‘ri yoki ro‘yxatdan o‘tmagansiz");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-purple-600">Tizimga Kirish</h2>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Parol"
            {...register('password')}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          Kirish
        </button>

        {/* 🔽 Ro'yxatdan o'tish linki */}
        <p className="text-sm text-center text-gray-500">
          Akkountingiz yo‘qmi?{" "}
          <span
            onClick={() => navigate('/register')}
            className="text-purple-600 cursor-pointer hover:underline"
          >
            Ro‘yxatdan o‘tish
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
