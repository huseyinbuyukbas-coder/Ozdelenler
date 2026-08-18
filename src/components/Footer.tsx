import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-28 lg:pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                ÖD
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none">
                  ÖZ DELENLER
                </span>
                <span className="text-[10px] font-bold text-teal-400 tracking-[0.2em] uppercase mt-1">
                  HALI • KOLTUK • YATAK YIKAMA
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300">
              Esenyurt, Ardıçlı, Ispartakule ve çevresinde halı, koltuk ve yatak yıkama hizmeti. Özenli işçilik, zamanında teslimat ve 4,9/5 müşteri memnuniyeti.
            </p>

            <div className="flex items-center gap-2 bg-blue-900 px-3 py-1.5 rounded-xl border border-blue-800 text-xs text-amber-300 font-bold w-fit">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>4,9 / 5 ({BUSINESS_CONFIG.googleReviewsCount} Google Yorumu)</span>
            </div>
          </div>

          {/* Quick Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => scrollTo('hizmetler')} className="hover:text-white transition-colors cursor-pointer">
                  Halı Yıkama
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hizmetler')} className="hover:text-white transition-colors cursor-pointer">
                  Koltuk Yıkama
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hizmetler')} className="hover:text-white transition-colors cursor-pointer">
                  Yatak Yıkama
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hizmetler')} className="hover:text-white transition-colors cursor-pointer">
                  Sandalye & Oturma Grubu
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hizmetler')} className="hover:text-white transition-colors cursor-pointer">
                  Ofis & İşletme Temizliği
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => scrollTo('neden-biz')} className="hover:text-white transition-colors cursor-pointer">
                  Neden Öz Delenler?
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('surec')} className="hover:text-white transition-colors cursor-pointer">
                  Hizmet Süreci
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('yorumlar')} className="hover:text-white transition-colors cursor-pointer">
                  Müşteri Yorumları
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('once-sonra')} className="hover:text-white transition-colors cursor-pointer">
                  Önce / Sonra
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('bolgeler')} className="hover:text-white transition-colors cursor-pointer">
                  Hizmet Bölgeleri
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sss')} className="hover:text-white transition-colors cursor-pointer">
                  Sık Sorulan Sorular
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3 text-xs text-slate-300">
            <h4 className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">İletişim Detayları</h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={BUSINESS_CONFIG.phoneTel} className="hover:text-white font-bold text-white">
                {BUSINESS_CONFIG.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-[#25D366]" />
              <button
                onClick={() =>
                  sendToWhatsApp({
                    customText: "Merhaba Öz Delenler Halı Yıkama, teklif ve bilgi almak istiyorum."
                  })
                }
                className="hover:text-teal-300 font-bold text-white cursor-pointer underline"
              >
                WhatsApp Bilgi Hattı
              </button>
            </p>
            <p className="flex items-center gap-2 text-teal-400 font-bold">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{BUSINESS_CONFIG.workingHours} Hizmet</span>
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="opacity-80">📍 {BUSINESS_CONFIG.address}</p>
          <div className="flex space-x-4 text-xs uppercase font-bold tracking-widest opacity-80 text-teal-400">
            <span>Beylikdüzü</span>
            <span>Ispartakule</span>
            <span>Bahçeşehir</span>
            <span>Ardıçlı</span>
          </div>
          <p className="opacity-60 italic">© {currentYear} {BUSINESS_CONFIG.name}</p>
        </div>
      </div>
    </footer>
  );
};
