import React from 'react';
import { Layers, Armchair, Bed, Building2, Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { sendToWhatsApp } from '../config';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layers':
      return <Layers className="w-6 h-6 text-sky-600" />;
    case 'Armchair':
    case 'Chair':
      return <Armchair className="w-6 h-6 text-amber-600" />;
    case 'Bed':
      return <Bed className="w-6 h-6 text-indigo-600" />;
    case 'Building2':
      return <Building2 className="w-6 h-6 text-purple-600" />;
    default:
      return <Layers className="w-6 h-6 text-sky-600" />;
  }
};

export const Services: React.FC = () => {
  return (
    <section id="hizmetler" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-100 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Uzmanlık Alanlarımız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Profesyonel Yıkama & Temizlik Hizmetlerimiz
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Esenyurt, Ardıçlı, Ispartakule ve çevresinde eviniz ve işletmeniz için özenli hijyen çözümleri sunuyoruz.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-md ${
                service.popular
                  ? 'border-teal-500/80 ring-2 ring-teal-500/20 shadow-sm'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {/* Image & Badge */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {service.popular && (
                  <span className="absolute top-3 right-3 bg-teal-600 text-white font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Sık Tercih Edilen
                  </span>
                )}

                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2.5">
                  {getServiceIcon(service.iconName)}
                  <span className="font-extrabold text-sm text-blue-950">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs sm:text-sm font-medium text-slate-700">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service CTA */}
                <button
                  onClick={() =>
                    sendToWhatsApp({
                      service: service.title,
                      customText: `Merhaba Öz Delenler Halı Yıkama, ${service.title} hizmeti hakkında bilgi ve fiyat teklifi almak istiyorum.`
                    })
                  }
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Special Custom Request Card */}
          <div className="bg-blue-950 text-white rounded-3xl p-8 border border-blue-900 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-blue-900/80 px-3 py-1 rounded-full border border-blue-800 inline-block">
                Özel Temizlik İhtiyacı
              </span>
              <h3 className="text-2xl font-black text-white">
                Farklı Bir Ürün Yıkatmak mı İstiyorsunuz?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Stor perde, battaniye, yorgan veya özel dokuma kumaş eşyalarınız için fotoğraf göndererek anında özel fiyat alabilirsiniz.
              </p>
            </div>

            <button
              onClick={() =>
                sendToWhatsApp({
                  customText: "Merhaba Öz Delenler Halı Yıkama, özel ev tekstili yıkama için bilgi almak istiyorum."
                })
              }
              className="w-full bg-[#25D366] hover:brightness-105 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Fotoğraf Gönderip Fiyat Al</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
