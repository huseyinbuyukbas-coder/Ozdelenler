import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Star, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full relative z-40">
      {/* Top Notice Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Ardıçlı & Ispartakule, Esenyurt / İstanbul</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{BUSINESS_CONFIG.workingHours} Servis</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-0.5 rounded-full text-amber-300 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{BUSINESS_CONFIG.googleRating} Google Rating ({BUSINESS_CONFIG.googleReviewsCount} Yorum)</span>
            </div>
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="hidden sm:flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 sticky top-0 bg-white/95 backdrop-blur-md border-b ${
          isScrolled ? 'shadow-md py-2.5 border-slate-200' : 'py-3.5 border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Logo */}
          <a
            href="#"
            className="flex flex-col group focus:outline-none"
            aria-label="Öz Delenler Halı Koltuk Yıkama Ana Sayfa"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-teal-400 flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
                ÖD
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-blue-950 group-hover:text-blue-900 transition-colors block leading-none">
                  ÖZ DELENLER
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-teal-600 uppercase mt-1">
                  HALI • KOLTUK • YATAK YIKAMA
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <button
              onClick={() => handleNavClick('hizmetler')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => handleNavClick('neden-biz')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              Neden Biz?
            </button>
            <button
              onClick={() => handleNavClick('surec')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              Süreç
            </button>
            <button
              onClick={() => handleNavClick('yorumlar')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer flex items-center gap-1.5"
            >
              <span>Yorumlar</span>
              <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                4.9★
              </span>
            </button>
            <button
              onClick={() => handleNavClick('once-sonra')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              Önce/Sonra
            </button>
            <button
              onClick={() => handleNavClick('bolgeler')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              Bölgeler
            </button>
            <button
              onClick={() => handleNavClick('sss')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              S.S.S
            </button>
            <button
              onClick={() => handleNavClick('iletisim')}
              className="hover:text-blue-900 transition-colors py-1 cursor-pointer"
            >
              İletişim
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="flex flex-col items-end px-2"
            >
              <span className="text-[11px] text-slate-400 font-medium">Hemen Arayın</span>
              <span className="text-sm font-bold text-blue-900 hover:text-blue-950">{BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              onClick={() =>
                sendToWhatsApp({
                  customText:
                    "Merhaba Öz Delenler Halı Koltuk Yıkama, web sitenizden ulaşıyorum. Fiyat bilgisi alabilir miyim?"
                })
              }
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp'tan Fiyat Al</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="p-2 bg-slate-100 rounded-lg text-slate-800 sm:hidden"
              aria-label="Hemen Ara"
            >
              <Phone className="w-5 h-5 text-sky-700" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none cursor-pointer"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  sendToWhatsApp({
                    customText:
                      "Merhaba Öz Delenler Halı Yıkama, teklif ve fiyat bilgisi almak istiyorum."
                  });
                }}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-3 rounded-xl font-bold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-3 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Hemen Ara</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-1 text-slate-800 font-semibold text-sm">
              <button
                onClick={() => handleNavClick('hizmetler')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => handleNavClick('fiyat-al')}
                className="text-left py-2.5 px-3 rounded-lg bg-sky-50 text-sky-800 font-bold transition-colors"
              >
                Hemen Fiyat Alın
              </button>
              <button
                onClick={() => handleNavClick('neden-biz')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Neden Öz Delenler?
              </button>
              <button
                onClick={() => handleNavClick('surec')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hizmet Süreci
              </button>
              <button
                onClick={() => handleNavClick('yorumlar')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between"
              >
                <span>Müşteri Yorumları</span>
                <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                  4.9 / 5 (246)
                </span>
              </button>
              <button
                onClick={() => handleNavClick('once-sonra')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Önce / Sonra Görselleri
              </button>
              <button
                onClick={() => handleNavClick('bolgeler')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hizmet Bölgelerimiz
              </button>
              <button
                onClick={() => handleNavClick('sss')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Sık Sorulan Sorular
              </button>
              <button
                onClick={() => handleNavClick('iletisim')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                İletişim & Adres
              </button>
            </nav>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">İşletme Yetkilisi: Cengiz Bey</p>
              <p>{BUSINESS_CONFIG.address}</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
