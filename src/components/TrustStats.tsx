import React from 'react';
import { Star, Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const TrustStats: React.FC = () => {
  return (
    <section className="relative z-20 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Stat 1: Google Rating */}
          <div className="flex flex-col items-center text-center p-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 mb-3 border border-amber-200">
              <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-black text-blue-950">{BUSINESS_CONFIG.googleRating}</span>
              <span className="text-sm font-bold text-slate-400">/ 5</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Google Müşteri Puanı</p>
            <span className="text-[11px] text-slate-500 mt-0.5">{BUSINESS_CONFIG.googleReviewsCount}+ Gerçek Müşteri Yorumu</span>
          </div>

          {/* Stat 2: Yandex Rating */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 mb-3 border border-teal-200">
              <Award className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-black text-blue-950">{BUSINESS_CONFIG.yandexRating}</span>
              <span className="text-sm font-bold text-slate-400">/ 5</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Yandex Harita Puanı</p>
            <span className="text-[11px] text-slate-500 mt-0.5">{BUSINESS_CONFIG.yandexReviewsCount} Müşteri Yorumu</span>
          </div>

          {/* Stat 3: Years of Trust */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 mb-3 border border-blue-200">
              <HeartHandshake className="w-6 h-6 text-blue-900" />
            </div>
            <span className="text-2xl sm:text-3xl font-black text-blue-950">Bölgesel</span>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Lider Yıkama Firması</p>
            <span className="text-[11px] text-slate-500 mt-0.5">Esenyurt & Çevresinde Yüksek Güven</span>
          </div>

          {/* Stat 4: Service Hours & Punctuality */}
          <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 mb-3 border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-slate-800" />
            </div>
            <span className="text-2xl sm:text-3xl font-black text-blue-950">24 Saat</span>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">İletişim & Servis Desteği</p>
            <span className="text-[11px] text-slate-500 mt-0.5">Zamanında Alım & Teslimat</span>
          </div>
        </div>
      </div>
    </section>
  );
};
