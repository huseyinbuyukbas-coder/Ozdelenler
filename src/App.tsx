import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { BeforeAfter } from './components/BeforeAfter';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileCTA } from './components/MobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust Stats Bar */}
        <TrustStats />

        {/* Services Section */}
        <Services />

        {/* Why Us Section */}
        <WhyUs />

        {/* Hizmet Süreci Section */}
        <Process />

        {/* Google Reviews Section */}
        <Reviews />

        {/* Önce / Sonra Visuals */}
        <BeforeAfter />

        {/* Bölgesel Hizmet Alanı */}
        <ServiceAreas />

        {/* Sık Sorulan Sorular */}
        <FAQ />

        {/* High Conversion Quote Form */}
        <QuoteForm />

        {/* Contact & Map Info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Sticky CTAs */}
      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
}
