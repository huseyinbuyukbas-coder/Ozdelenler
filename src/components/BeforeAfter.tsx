import React, { useState } from 'react';
import { BEFORE_AFTER_DATA } from '../data/beforeAfterData';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { sendToWhatsApp } from '../config';

export const BeforeAfter: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = BEFORE_AFTER_DATA[activeIndex];

  return (
    <section id="once-sonra" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Gözle Görülür Değişim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Önce & Sonra Temizlik Sonuçları
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Halı, koltuk ve yataklarda biriken inatçı kir ve lekelerin profesyonel yıkama sonrası temizliği.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeIndex === idx
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.tag} Temizliği
            </button>
          ))}
        </div>

        {/* Showcase Comparison Block */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Before Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-300 shadow-sm group">
              <span className="absolute top-3 left-3 bg-red-600/95 backdrop-blur-sm text-white font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full z-10 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ÖNCESİ (KİRLİ & LEKELİ)
              </span>
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-200">
                <img
                  src={currentItem.beforeImage}
                  alt={`${currentItem.title} Önce`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* After Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-teal-500 shadow-md group">
              <span className="absolute top-3 left-3 bg-teal-600/95 backdrop-blur-sm text-white font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full z-10 shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-200" />
                SONRASI (TERTEMİZ & MİS KOKULU)
              </span>
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-200">
                <img
                  src={currentItem.afterImage}
                  alt={`${currentItem.title} Sonra`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Details & CTA */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h3 className="font-extrabold text-slate-900 text-lg">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {currentItem.description}
              </p>
            </div>

            <button
              onClick={() =>
                sendToWhatsApp({
                  service: currentItem.tag,
                  customText: `Merhaba Öz Delenler Halı Yıkama, ${currentItem.tag} için fiyat ve bilgi almak istiyorum.`
                })
              }
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Siz de Yıkatın</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
