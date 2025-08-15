import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Social */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">FrontendPRO</h3>
            <p className="mb-4 text-gray-400">
              Zamonaviy frontend dasturlashni o‘rganing va professional
              dasturchiga aylaning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://instagram.com/olisdagiyaqinim5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <YoutubeIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Foydali linklar */}
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">
              Foydali linklar
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a
                  href="#kurs"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Kurs haqida
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Imkoniyatlar
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Narxlar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Bog‘lanish
                </a>
              </li>
            </ul>
          </div>

          {/* Kurslar */}
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Kurslar</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  HTML & CSS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  JavaScript
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Bog‘lanish</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">
                Surxondaryo viloyati, Termiz shahri,
                Barkamol avlod ko'chasi, Termiz Davlat Universiteti
              </p>
              <p className="mb-2">+998 97 936 60 04</p>
              <p>info@frontendhub.uz</p>
            </address>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FrontendPRO. Barcha huquqlar
            himoyalangan.
          </p>
          <div className="mt-4 space-x-6 md:mt-0">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Maxfiylik siyosati
            </a>
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
