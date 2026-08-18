import React, { useState } from 'react';
import { MessageCircle, Phone, Star, ShieldCheck, Sparkles, CheckCircle2, MapPin, ArrowRight, Truck } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const Hero: React.FC = () => {
  const [selectedQuickService, setSelectedQuickService] = useState('Halı Yıkama');
  const [quickPieceCount, setQuickPieceCount] = useState('3 Adet');

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp({
      service: selectedQuickService,
      note: `Hızlı tahmini adet/ölçü: ${quickPieceCount}`,
      customText: `Merhaba Öz Delenler Halı Koltuk Yıkama, web sitenizdeki hızlı hesaptan ulaşıyorum.\n\nHizmet: ${selectedQuickService}\nDetay/Adet: ${quickPieceCount}\n\nFiyat bilgisi alabilir miyim?`
    });
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-200 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-blue-50 text-blue-800 border border-blue-100 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>Esenyurt & Çevresi</span>
              </div>
              <div className="bg-amber-50 text-amber-800 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>4.9 / 5 Google ({BUSINESS_CONFIG.googleReviewsCount} Yorum)</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-[1.1] tracking-tight">
              Halılarınızda <span className="text-teal-600">Gerçek</span> Temizlik, Evinizde Ferahlık
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Esenyurt, Ardıçlı, Ispartakule, Beylikdüzü ve Bahçeşehir bölgelerinde profesyonel halı, koltuk ve yatak yıkama. Zamanında teslimat ve %100 hijyen garantisi.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() =>
                  sendToWhatsApp({
                    customText:
                      "Merhaba Öz Delenler Halı Koltuk Yıkama, halı/koltuk yıkatma fiyatı almak istiyorum. Yardımcı olur musunuz?"
                  })
                }
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white font-bold text-base px-7 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Mesajı</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="w-full sm:w-auto border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-bold text-base px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5" />
                <span>Şimdi Ara ({BUSINESS_CONFIG.phone})</span>
              </a>
            </div>

            {/* Quick Stats Counter Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-blue-950">246+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Google Yorumu</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-950">16</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Yandex Yorumu</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-950">24 Saat</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Kesintisiz Hizmet</div>
              </div>
            </div>
          </div>

          {/* Right Section: Form + Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <span>Hızlı Fiyat Teklifi Al</span>
                </h3>
                <span className="text-xs text-teal-700 font-bold bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Anında WhatsApp
                </span>
              </div>

              <form onSubmit={handleQuickEstimate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Hizmet Seçimi
                  </label>
                  <select
                    value={selectedQuickService}
                    onChange={(e) => setSelectedQuickService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 text-sm font-semibold focus:border-blue-500 outline-none"
                  >
                    <option value="Halı Yıkama">Halı Yıkama</option>
                    <option value="Koltuk Yıkama">Koltuk Yıkama</option>
                    <option value="Yatak Yıkama">Yatak Yıkama</option>
                    <option value="Sandalye & Oturma Grubu">Sandalye & Oturma Grubu</option>
                    <option value="Ofis / İşletme Temizliği">Ofis / İşletme Temizliği</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tahmini Adet / Miktar
                  </label>
                  <select
                    value={quickPieceCount}
                    onChange={(e) => setQuickPieceCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 text-sm font-semibold focus:border-blue-500 outline-none"
                  >
                    <option value="1-2 Adet Halı">1-2 Adet Halı</option>
                    <option value="3-5 Adet Halı">3-5 Adet Halı</option>
                    <option value="6+ Adet / Komple Ev">6+ Adet (Komple Ev Halısı)</option>
                    <option value="L-Koltuk Takımı">L-Koltuk Takımı</option>
                    <option value="3+2+1 Koltuk Takımı">3+2+1 Koltuk Takımı</option>
                    <option value="Çift Kişilik Yatak">Çift Kişilik Yatak</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wide uppercase"
                >
                  <span>Teklif Al (WhatsApp)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Micro Highlight Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-teal-600 text-lg mb-1 font-extrabold">✨</div>
                <h4 className="font-bold text-sm text-blue-950 mb-0.5">Leke Çıkarma</h4>
                <p className="text-[11px] text-slate-500 leading-snug">Zorlu lekeler için özel bitkisel çözümler.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-teal-600 text-lg mb-1 font-extrabold">🚚</div>
                <h4 className="font-bold text-sm text-blue-950 mb-0.5">Hızlı Teslimat</h4>
                <p className="text-[11px] text-slate-500 leading-snug">Söz verdiğimiz gün ve saatte kapınızda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
