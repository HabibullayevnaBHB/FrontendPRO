import React, { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { UserIcon, LogOutIcon } from 'lucide-react';

const ProfileDropdown: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!user) return null;

  const userInitial = user.email.charAt(0).toUpperCase();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 font-semibold text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        {userInitial}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 w-64 mt-2 transition-colors bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
            <p className="text-sm font-semibold text-gray-800 dark:text-white">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>

          <div className="px-4 py-3">
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm text-white transition bg-red-500 rounded hover:bg-red-600"
            >
              <LogOutIcon size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
