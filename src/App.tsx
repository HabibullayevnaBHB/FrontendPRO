// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HeroSection } from './components/HeroSection';
import { CourseInfoSection } from './components/CourseInfoSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InstructorSection } from './components/InstructorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import {TermsOfUsePage} from './pages/TermsOfUsePage'
import Login from './pages/Login';
import Register from './pages/Register';

import { useAuthStore } from './store/authStore';
import { Layout } from './Layout';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

import { RegistrationPage } from './components/RegistrationPage';
import { PaymentPage } from './components/PaymentPage';
import { SuccessPage } from './components/SuccessPage';

// 👇 ThemeProvider import qilinmoqda
import { ThemeProvider } from './components/theme/theme-provider'; // <-- manzil to'g'ri bo'lsa

export function App(): JSX.Element {
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        if (user.name && user.email) {
          login({ name: user.name, email: user.email });
        }
      } catch (error) {
        console.error("Saqlangan userni o'qishda xatolik:", error);
      }
    }
  }, [login]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Umumiy Layout bilan o‘ralgan sahifalar */}
          <Route path="/" element={<Layout />}>
            <Route index element={
              <>
                <HeroSection />
                <CourseInfoSection />
                <FeaturesSection />
                <InstructorSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
                <ContactSection />
              </>
            } />
            <Route path="courseinfosection" element={<CourseInfoSection />} />
          </Route>

          {/* Layoutsiz sahifalar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/register/:plan" element={<RegistrationPage />} />
          <Route path="/payment/:plan" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
