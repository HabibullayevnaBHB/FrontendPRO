import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import ProfileDropdown from './ProfileDropdown';
import { ModeToggle } from './theme/mode-toggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 bg-white shadow-sm dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brend nomi */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold text-indigo-600 transition-opacity duration-200 hover:opacity-80"
            >
              FrontendPRO
            </a>
          </div>

          {/* Kompyuter ekranidagi nav linklar */}
          <nav className="hidden space-x-8 md:flex">
            <a href="#kurs" className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Kurs haqida
            </a>
            <a href="#features" className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Imkoniyatlar
            </a>
            <a href="#instructor" className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              O'qituvchilar
            </a>
            <a href="#pricing" className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Narxlar
            </a>
            <a href="#contact" className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Bog'lanish
            </a>
          </nav>

          {/* Profil yoki Login qismi */}
          <div className="items-center hidden gap-3 md:flex">
            {/* Kun/tun tugmasi */}
            <ModeToggle />

            {user ? (
              <ProfileDropdown />
            ) : (
              <a
                href="/login"
                className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Kirish
              </a>
            )}
          </div>

          {/* Mobil menyu tugmasi */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menyu tarkibi */}
      {isMenuOpen && (
        <div className="transition-colors duration-300 bg-white shadow-lg dark:bg-gray-900 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#kurs" className="block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Kurs haqida
            </a>
            <a href="#features" className="block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Imkoniyatlar
            </a>
            <a href="#instructor" className="block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              O'qituvchilar
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Narxlar
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-600">
              Bog'lanish
            </a>

            {/* Mobil menyuda kun/tun toggle */}
            <div className="px-3 py-2">
              <ModeToggle />
            </div>

            {user ? (
              <div className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold">{user.email.charAt(0).toUpperCase()}</p>
                <button
                  onClick={logout}
                  className="px-4 py-1 mt-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Chiqish
                </button>
              </div>
            ) : (
              <a
                href="/login"
                className="block px-4 py-2 mt-2 text-center text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Kirish
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
