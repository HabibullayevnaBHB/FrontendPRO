// src/store/authStore.ts

import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const savedUser = localStorage.getItem('user');
  return {
    user: savedUser ? JSON.parse(savedUser) : null,
    login: (user) => {
      localStorage.setItem('user', JSON.stringify(user)); // 🔐 saqlab qo'yiladi
      set({ user });
    },
    logout: () => {
      localStorage.removeItem('user'); // 🔐 tozalanadi
      set({ user: null });
    },
  };
});
