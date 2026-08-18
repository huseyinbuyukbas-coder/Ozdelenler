import React from 'react';
import { PhoneCall, FileText, Truck, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { sendToWhatsApp } from '../config';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '1. İletişime Geçin',
      desc: 'WhatsApp veya telefon üzerinden bize ulaşın. Ekibimiz anında size yanıt verir.',
      icon: PhoneCall,
      color: 'bg-blue-50 text-blue-900 border-blue-200'
    },
    {
      num: '02',
      title: '2. Bilgi ve Fiyat',
      desc: 'Yıkatmak istediğiniz ürünlerin adedi, türü veya ölçüsü hakkında kısa bilgi verip anında fiyat teklifi alın.',
      icon: FileText,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      num: '03',
      title: '3. Ücretsiz Alım / Yerinde',
      desc: 'Halılarınız adresinizden ücretsiz makbuzla teslim alınır. Koltuk ve yatak yıkama ise adresinizde gerçekleştirilir.',
      icon: Truck,
      color: 'bg-blue-50 text-blue-900 border-blue-200'
    },
    {
      num: '04',
      title: '4. Mis Kokulu Teslimat',
      desc: 'Hijyenik fırçalama, kapalı kurutma ve kontrolden geçen ürünleriniz özenle ambalajlanıp kapınıza teslim edilir.',
      icon: Sparkles,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    }
  ];

  return (
    <section id="surec" className="py-16 sm:py-20 bg-blue-950 text-white relative overflow-hidden border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-900 text-teal-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Kolay & Şeffaf İşleyiş</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hizmet Sürecimiz Nasıl İşler?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Sizi yormayan, dakik ve hızlı 4 adımlı halı ve koltuk yıkama süreci.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-blue-900/60 rounded-3xl p-6 border border-blue-800 shadow-sm relative flex flex-col justify-between space-y-4 hover:border-blue-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-blue-400/40 font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-teal-300 bg-blue-950 px-2.5 py-1 rounded-lg border border-blue-800 inline-block">
                    {idx === 0 && 'Anında Yanıt'}
                    {idx === 1 && 'Net Sabit Fiyat'}
                    {idx === 2 && 'Adresten Ücretsiz'}
                    {idx === 3 && 'Zamanında Teslim'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center bg-blue-900/40 border border-blue-800 rounded-2xl p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-white text-base">Sipariş Vermek Çok Kolay</h4>
            <p className="text-xs text-slate-300">WhatsApp'tan mesaj atmanız veya hemen aramanız yeterlidir.</p>
          </div>
          <button
            onClick={() =>
              sendToWhatsApp({
                customText: "Merhaba Öz Delenler Halı Yıkama, adresten halı alımı için iletişime geçiyorum."
              })
            }
            className="bg-[#25D366] hover:brightness-105 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Süreç İçin Yazın</span>
          </button>
        </div>
      </div>
    </section>
  );
};
