import React from 'react';
import { MapPin, Navigation, MessageCircle, ArrowRight } from 'lucide-react';
import { sendToWhatsApp } from '../config';

export const ServiceAreas: React.FC = () => {
  const areas = [
    { name: 'Esenyurt Merkez', badge: 'Merkez Şube', desc: 'Ardıçlı, Balıkyolu, Yeşilkent, Fatih, Üçevler, Saadetdere ve Esenyurt geneli' },
    { name: 'Ardıçlı Mahallesi', badge: 'Hızlı Servis', desc: 'İşletmemizin bulunduğu Ardıçlı mahallesine aynı gün içinde alım ve servis imkanı' },
    { name: 'Ispartakule', badge: 'Düzenli Servis', desc: 'Ispartakule caddesi, site ve konut projelerine haftanın her günü servis' },
    { name: 'Beylikdüzü', badge: 'Ücretsiz Servis', desc: 'Beylikdüzü, Yakuplu, Adnan Kahveci, Barış mahallesi ve çevresi' },
    { name: 'Bahçeşehir', badge: 'Mobil Hizmet', desc: 'Bahçeşehir 1. ve 2. Kısım, gölet çevresi konutlara adreste yıkama' },
    { name: 'Çevre Bölgeler', badge: 'Geniş Ağ', desc: 'Haramidere, Mehterçeşme, Avcılar sınır bölgeleri ve yakın mahalleler' }
  ];

  return (
    <section id="bolgeler" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Geniş Servis Ağı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Esenyurt ve Çevresinde Hizmet Veriyoruz
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Esenyurt merkezli Öz Delenler Halı Koltuk Yıkama olarak çevre bölgelerde de halı, koltuk ve yatak yıkama hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Regions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center font-bold">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-200">
                    {area.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-blue-950">
                  {area.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <button
                onClick={() =>
                  sendToWhatsApp({
                    address: area.name,
                    customText: `Merhaba Öz Delenler Halı Yıkama, ${area.name} bölgesinden iletişime geçiyorum. Halı/koltuk yıkama için servis zamanı ve fiyat öğrenebilir miyim?`
                  })
                }
                className="w-full bg-blue-50 hover:bg-teal-600 hover:text-white text-blue-950 font-bold text-xs py-2.5 px-3 rounded-xl border border-blue-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Bu Bölge İçin Fiyat Al</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
