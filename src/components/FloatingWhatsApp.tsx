import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    sendToWhatsApp({
      customText: "Merhaba Öz Delenler Halı Yıkama, web sitenizden yazıyorum. Bilgi ve fiyat teklifi alabilir miyim?"
    });
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>7/24 WhatsApp'tan Yazın</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Kapat"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={handleClick}
        aria-label="WhatsApp Canlı Destek"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2.5 cursor-pointer ring-4 ring-emerald-500/30"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="hidden sm:inline-block font-extrabold text-sm pr-1">
          WhatsApp'tan Yazın
        </span>
      </button>
    </div>
  );
};
