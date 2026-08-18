import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const MobileCTA: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <button
          onClick={() =>
            sendToWhatsApp({
              customText: "Merhaba Öz Delenler Halı Yıkama, mobil siteden yazıyorum. Fiyat teklifi alabilir miyim?"
            })
          }
          className="flex items-center justify-center gap-1.5 bg-[#25D366] active:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp'tan Fiyat Al</span>
        </button>

        {/* Call Button */}
        <a
          href={BUSINESS_CONFIG.phoneTel}
          className="flex items-center justify-center gap-1.5 bg-blue-950 active:bg-blue-900 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm"
        >
          <Phone className="w-4 h-4 text-teal-400" />
          <span>Hemen Ara</span>
        </a>
      </div>
    </div>
  );
};
