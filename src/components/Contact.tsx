import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>İletişim & Konum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Bize Ulaşın
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Esenyurt, Ardıçlı ve Ispartakule’de halı ve koltuk yıkama ihtiyaçlarınız için 7/24 hizmetinizdeyiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950 text-base mb-1">Açık Adresimiz</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {BUSINESS_CONFIG.address}
                  </p>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 mt-2"
                  >
                    <span>Google Haritalar'da Yol Tarifi Al</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200/60" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950 text-base mb-1">Telefon İletişim</h3>
                  <a
                    href={BUSINESS_CONFIG.phoneTel}
                    className="text-lg font-black text-blue-950 hover:text-teal-600 transition-colors block"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Tıklayarak doğrudan telefonunuzdan arayabilirsiniz.</p>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">WhatsApp Hattı</h3>
                  <button
                    onClick={() =>
                      sendToWhatsApp({
                        customText: "Merhaba Öz Delenler Halı Yıkama, bilgi ve fiyat almak istiyorum."
                      })
                    }
                    className="text-sm font-bold text-emerald-600 hover:text-emerald-700 underline cursor-pointer"
                  >
                    WhatsApp'tan Anında Yazın ({BUSINESS_CONFIG.phone})
                  </button>
                  <p className="text-xs text-slate-500 mt-0.5">7/24 aktif fotoğraflı fiyat teklif hattı.</p>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Working Hours & Contact Person */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">Çalışma Saatleri</h3>
                  <p className="text-sm font-bold text-emerald-600">
                    {BUSINESS_CONFIG.workingHours}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">İşletme Sorumlusu: <strong className="text-slate-800">{BUSINESS_CONFIG.contactPerson}</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Preview Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-sm h-full flex flex-col justify-between space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-200 h-80 lg:h-96 w-full border border-slate-200">
                {/* Map Visual Representation Placeholder / Embed Frame */}
                <div className="absolute inset-0 bg-slate-900/10 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-sky-400 flex items-center justify-center shadow-xl mb-4 animate-bounce">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 bg-white/90 px-4 py-1.5 rounded-xl shadow-md mb-2">
                    {BUSINESS_CONFIG.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 font-bold bg-white/95 px-3 py-1 rounded-lg max-w-md shadow-sm mb-4">
                    {BUSINESS_CONFIG.addressShort}
                  </p>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Haritalarda Aç & Yol Tarifi Al</span>
                  </a>
                </div>

                {/* Map Mock Background graphic */}
                <div className="w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100 flex items-center justify-center opacity-70" />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                <span className="font-semibold text-slate-800">Esenyurt, Ardıçlı, Ispartakule & Bahçeşehir</span>
                <span className="text-emerald-600 font-bold">Kapıdan Alım Servisi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
