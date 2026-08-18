import React from 'react';
import { ShieldCheck, Clock, Users, Star, Heart, CheckCircle2, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const WhyUs: React.FC = () => {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Profesyonel Temizlik',
      description: 'Halı, koltuk ve yataklarınız için özel hijyen şampuanları ve son teknoloji makineler ile derinlemesine ve özenli temizlik.',
      iconBg: 'bg-blue-50 text-blue-900 border-blue-200',
      badge: 'Hijyen Standartı'
    },
    {
      icon: Clock,
      title: 'Zamanında Teslimat',
      description: 'Müşterilerimizin yorumlarında en çok övülen özelliğimiz: Halılarınız belirtilen gün ve saatte tam zamanında alınıp teslim edilir.',
      iconBg: 'bg-teal-50 text-teal-700 border-teal-200',
      badge: 'Dakik Hizmet'
    },
    {
      icon: Users,
      title: 'Deneyimli Ekip & Cengiz Bey',
      description: 'İşinde tecrübeli usta ekip. İşletme sahibi Cengiz Bey her aşamayla birebir ilgilenerek kaliteli hizmet sunar.',
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
      badge: 'Birebir İlgi'
    },
    {
      icon: Star,
      title: 'Yüksek Müşteri Memnuniyeti',
      description: '246’dan fazla gerçek Google yorumu ve 4,9/5 müşteri puanı ile bölgenin en yüksek değerlendirmeye sahip işletmelerinden biri.',
      iconBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      badge: '4.9/5 Puan'
    },
    {
      icon: Heart,
      title: 'Gönül Rahatlığıyla Teslim Edin',
      description: '2020 yılından bu yana halılarını düzenli olarak bize teslim eden binlerce ailenin yıllardır değişmeyen güveni.',
      iconBg: 'bg-rose-50 text-rose-700 border-rose-200',
      badge: 'Yılların Güveni'
    }
  ];

  return (
    <section id="neden-biz" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Farkımız & Değerlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Neden Öz Delenler Halı Yıkama?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Esenyurt ve çevresinde lekesiz temizlik, zamanında teslimat ve güler yüzlü hizmet garantisiyle yıllardır tercih ediliyoruz.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center font-bold`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Öz Delenler Garantisi</span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card within the Grid */}
          <div className="bg-blue-950 text-white rounded-3xl p-8 border border-blue-900 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-blue-900 px-3 py-1 rounded-full border border-blue-800 inline-block">
                Siz de Deneyin
              </span>
              <h3 className="text-2xl font-black text-white">
                Halılarınızı Profesyonellere Emanet Edin
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Birkaç dakika içinde WhatsApp'tan fotoğraf veya halı sayınızı ileterek anında net fiyat teklifi alabilirsiniz.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() =>
                  sendToWhatsApp({
                    customText: "Merhaba Öz Delenler Halı Yıkama, teklif ve bilgi almak istiyorum."
                  })
                }
                className="w-full bg-[#25D366] hover:brightness-105 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp'tan Hemen Bilgi Al</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="w-full bg-blue-900 hover:bg-blue-850 text-slate-100 font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-blue-800"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>Veya Bizi Arayın: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
