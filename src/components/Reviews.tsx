import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle, ExternalLink, ThumbsUp, Filter } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { BUSINESS_CONFIG } from '../config';

export const Reviews: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Hepsi');

  const filteredReviews = filterType === 'Hepsi'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.serviceType === filterType);

  return (
    <section id="yorumlar" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Gerçek Müşteri Deneyimleri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>

          {/* Rating Summary Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <div className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-2xl flex items-center gap-2">
              <span className="font-extrabold text-blue-950 text-base">Google:</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-blue-950 text-sm">{BUSINESS_CONFIG.googleRating} / 5</span>
              <span className="text-xs text-slate-500 font-medium">({BUSINESS_CONFIG.googleReviewsCount} Yorum)</span>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-2xl flex items-center gap-2">
              <span className="font-extrabold text-blue-950 text-base">Yandex:</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-blue-950 text-sm">{BUSINESS_CONFIG.yandexRating} / 5</span>
              <span className="text-xs text-slate-500 font-medium">({BUSINESS_CONFIG.yandexReviewsCount} Yorum)</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {['Hepsi', 'Halı', 'Koltuk', 'Yatak'].map((category) => (
            <button
              key={category}
              onClick={() => setFilterType(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filterType === category
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category === 'Hepsi' ? 'Tüm Yorumlar' : `${category} Yıkama`}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Review Top Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-sky-300 font-bold text-sm flex items-center justify-center">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-slate-900 text-sm">{review.author}</h3>
                        <CheckCircle className="w-3.5 h-3.5 text-sky-500" title="Doğrulanmış Müşteri" />
                      </div>
                      <span className="text-[11px] text-slate-500 block">{review.location}</span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                    review.platform === 'Google'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-red-50 text-red-700 border-red-200'
                  }`}>
                    {review.platform}
                  </span>
                </div>

                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Highlight Quote */}
                {review.highlight && (
                  <div className="bg-amber-50/80 border-l-2 border-amber-400 p-2.5 rounded-r-xl">
                    <p className="text-xs font-bold text-amber-900 italic">
                      "{review.highlight}"
                    </p>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  {review.serviceType} Hizmeti
                </span>
                <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" />
                  Tavsiye Ediyor
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_CONFIG.googleReviewsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm px-6 py-3.5 rounded-2xl border border-slate-300 shadow-sm hover:shadow transition-all"
          >
            <span>Google'da Tüm 246+ Yorumu Gör</span>
            <ExternalLink className="w-4 h-4 text-sky-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
