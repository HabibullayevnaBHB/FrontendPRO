import React, { useState, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/Button';
import { ArrowLeft } from 'lucide-react';

const prices: Record<string, number> = {
  asosiy: 499000,
  professional: 899000,
  korporativ: 0,
};

export function PaymentPage() {
  const navigate = useNavigate();
  const { plan } = useParams<{ plan: string }>();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const price = prices[plan?.toLowerCase() || ''] || 0;
  const formattedPrice = price > 0 ? price.toLocaleString('uz-UZ') : 'Shaxsiy narx';

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();

    if (!/^\d{16}$/.test(cardNumber)) {
      setError('Karta raqami 16 xonali bo‘lishi kerak.');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError('Amal qilish muddati MM/YY formatida bo‘lishi kerak.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setError('CVV 3 xonali bo‘lishi kerak.');
      return;
    }

    const enteredAmount = parseInt(amount.replace(/\D/g, ''));
    if (price > 0 && enteredAmount !== price) {
      setError(`To‘lov summasi noto‘g‘ri. To‘g‘ri summa: ${formattedPrice} so‘m`);
      return;
    }

    setError('');
    navigate('/success');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 transition-colors bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handlePayment}
        className="w-full max-w-xl p-8 transition-colors bg-white shadow-xl dark:bg-gray-800 rounded-2xl"
      >
        {/* Ortga qaytish */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 text-indigo-600 transition dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Ortga qaytish
        </button>

        <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 capitalize dark:text-white">
          {plan} kursi uchun to‘lov
        </h2>
        <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
          Kurs narxi: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{formattedPrice} so‘m</span>
        </p>

        {/* Karta raqami */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Karta raqami</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
            placeholder="**** **** **** ****"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Amal qilish muddati */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Amal qilish muddati (MM/YY)</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value.replace(/^(\d{2})(\d{0,2})$/, '$1/$2').slice(0, 5))}
            placeholder="**/**"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* CVV */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">CVV (3 xonali)</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
            placeholder="***"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* To'lov summasi */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">To‘lov summasi (so‘m)</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
            placeholder="500000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Xatolik */}
        {error && (
          <div className="mb-4 text-sm font-medium text-center text-red-600 dark:text-red-400">{error}</div>
        )}

        {/* To'lov tugmalari */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-1/2 py-3 text-gray-700 border border-gray-300 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Bekor qilish
          </Button>

          <Button
            type="submit"
            variant="primary"
            className="w-1/2 py-3 text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            To‘lovni amalga oshirish
          </Button>
        </div>
      </form>
    </div>
  );
}
