import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { sendToWhatsApp } from '../config';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Sık Sorulan Sorular
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Halı, koltuk ve yatak yıkama süreçlerimiz hakkında aklınıza takılan soruların yanıtları.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-blue-950 text-base hover:text-teal-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-blue-50 border-blue-200 text-blue-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question CTA */}
        <div className="mt-10 p-6 sm:p-8 bg-blue-950 text-white rounded-3xl border border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="font-bold text-base text-white">Başka Bir Sorusunuz mu Var?</h3>
            <p className="text-xs text-slate-300">Ekibimiz WhatsApp üzerinden tüm sorularınızı yanıtlamaktan mutluluk duyar.</p>
          </div>
          <button
            onClick={() =>
              sendToWhatsApp({
                customText: "Merhaba Öz Delenler Halı Yıkama, bir sorum olacaktı."
              })
            }
            className="bg-[#25D366] hover:brightness-105 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp'tan Soru Sor</span>
          </button>
        </div>
      </div>
    </section>
  );
};
