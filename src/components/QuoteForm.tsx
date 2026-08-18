import React, { useState } from 'react';
import { MessageCircle, Phone, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, sendToWhatsApp } from '../config';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Halı Yıkama',
    address: 'Esenyurt / Ardıçlı',
    note: ''
  });

  const [presetSelected, setPresetSelected] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      address: formData.address,
      note: formData.note
    });
  };

  const applyPreset = (service: string, presetNote: string) => {
    setPresetSelected(presetNote);
    setFormData(prev => ({
      ...prev,
      service: service,
      note: presetNote
    }));
  };

  return (
    <section id="fiyat-al" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Anında Fiyat Teklifi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              Hızlı Fiyat Teklifi Al
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Aşağıdaki bilgileri doldurun, WhatsApp üzerinden otomatik olarak hazırlanan mesajla anında net fiyat teklifi alın.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mb-6 p-4 bg-white rounded-2xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Hızlı Seçenekler (Tek Tıkla Doldurun):
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyPreset('Halı Yıkama', '3 Adet Makine Halısı Yıkatma')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer font-semibold ${
                  presetSelected === '3 Adet Makine Halısı Yıkatma'
                    ? 'bg-blue-900 text-white border-blue-900 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                3 Adet Halı Yıkama
              </button>
              <button
                type="button"
                onClick={() => applyPreset('Koltuk Yıkama', '1 Adet L-Koltuk Takımı Yıkatma')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer font-semibold ${
                  presetSelected === '1 Adet L-Koltuk Takımı Yıkatma'
                    ? 'bg-blue-900 text-white border-blue-900 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                L-Koltuk Yıkama
              </button>
              <button
                type="button"
                onClick={() => applyPreset('Yatak Yıkama', '1 Adet Çift Kişilik Yatak Yıkatma')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer font-semibold ${
                  presetSelected === '1 Adet Çift Kişilik Yatak Yıkatma'
                    ? 'bg-blue-900 text-white border-blue-900 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Çift Kişilik Yatak
              </button>
              <button
                type="button"
                onClick={() => applyPreset('Halı & Koltuk', 'Komple Ev Halı + Koltuk Yıkatma')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer font-semibold ${
                  presetSelected === 'Komple Ev Halı + Koltuk Yıkatma'
                    ? 'bg-blue-900 text-white border-blue-900 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Komple Ev Temizliği
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ad Soyad */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Telefon */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Örn: 0530 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Hizmet Seçimi */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hizmet Seçimi
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Halı Yıkama">Halı Yıkama</option>
                  <option value="Koltuk Yıkama">Koltuk Yıkama</option>
                  <option value="Yatak Yıkama">Yatak Yıkama</option>
                  <option value="Sandalye / Oturma Grubu">Sandalye / Oturma Grubu</option>
                  <option value="Ofis & İşletme Temizliği">Ofis & İşletme Temizliği</option>
                  <option value="Diğer Ev Tekstili">Diğer / Ev Tekstili</option>
                </select>
              </div>

              {/* Adres / Bölge */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Adres / Semt / Mahalle
                </label>
                <input
                  type="text"
                  placeholder="Örn: Ardıçlı / Esenyurt"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Mesaj / Not */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mesaj / Ürün Detayı (Adet, Leke veya Ölçü)
              </label>
              <textarea
                rows={3}
                placeholder="Örn: 3 adet salon halısı, 1 adet koltuk takımı. Ne zaman teslim alabilirsiniz?"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-base py-4 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>TEKLİF AL (WHATSAPP)</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Butona tıkladığınızda otomatik hazırlanmış WhatsApp sohbet penceresi açılır.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
