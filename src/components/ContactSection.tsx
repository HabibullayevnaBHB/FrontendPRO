import React, { lazy } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
import { Button } from './ui/Button';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Biz bilan bog'laning
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Savolingiz bormi? Quyidagi shakl orqali bizga xabar yuboring yoki
            kontakt ma’lumotlarimiz orqali bevosita bog‘laning.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              Xabar yuborish
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Ismingiz
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email manzilingizni kiriting"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="+998 XX XXX XX XX"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Xabaringiz
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Xabaringizni yozing..."
                ></textarea>
              </div>
              <Button
                variant="primary"
                size="large"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Yuborish
              </Button>
            </form>
          </div>
          <div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                Kontakt ma’lumotlarimiz
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon
                    size={24}
                    className="flex-shrink-0 mt-1 mr-4 text-indigo-600"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Manzil
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Surxondaryo viloyati, Termiz shahri,
                      <br />
                      Barkamol avlod ko'chasi, Termiz Davlat Universiteti
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon
                    size={24}
                    className="flex-shrink-0 mt-1 mr-4 text-indigo-600"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Telefon
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +998 97 936 60 04
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon
                    size={24}
                    className="flex-shrink-0 mt-1 mr-4 text-indigo-600"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@frontendhub.uz
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon
                    size={24}
                    className="flex-shrink-0 mt-1 mr-4 text-indigo-600"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Ish vaqti
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Dushanba - Shanba: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.856100813161!2d67.2780891!3d37.2346691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f313bdaec8d8ac5%3A0xf8dcd828d9dbef58!2sTermiz%20State%20University!5e0!3m2!1sen!2s!4v1720430000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
