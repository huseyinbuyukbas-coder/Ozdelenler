/**
 * Esenyurt Öz Delenler Halı Koltuk Yıkama
 * Central Configuration File
 */

export const BUSINESS_CONFIG = {
  name: "Esenyurt Öz Delenler Halı Koltuk Yıkama",
  shortName: "Öz Delenler",
  tagline: "HALI • KOLTUK • YIKAMA",
  phone: "0530 992 95 76",
  phoneRaw: "05309929576",
  phoneTel: "tel:+905309929576",
  whatsappNumber: "905309929576",
  address: "Ardıçlı, Ispartakule Cd. 795 Sokak No: 6 Dükkan: 1, 34510 Esenyurt/İstanbul",
  addressShort: "Ardıçlı, Ispartakule Cd. Esenyurt / İstanbul",
  workingHours: "24 Saat Açık",
  contactPerson: "Cengiz Bey",
  googleRating: 4.9,
  googleReviewsCount: 246,
  yandexRating: 5.0,
  yandexReviewsCount: 16,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ardıçlı,+Ispartakule+Cd.+795+Sokak+No:+6+Dükkan:+1,+34510+Esenyurt/İstanbul",
  googleReviewsProfileUrl: "https://www.google.com/maps/search/?api=1&query=Esenyurt+Öz+Delenler+Halı+Koltuk+Yıkama",
  primaryAreas: ["Esenyurt", "Ardıçlı", "Ispartakule", "Beylikdüzü", "Bahçeşehir", "Haramidere", "Gölevleri", "Mehterçeşme"]
};

export interface WhatsAppMessageData {
  name?: string;
  phone?: string;
  service?: string;
  address?: string;
  note?: string;
  customText?: string;
}

/**
 * Builds encoded WhatsApp URL and triggers redirect.
 * All communication forms in the app use this function.
 */
export const sendToWhatsApp = (data: WhatsAppMessageData): void => {
  let message = "";

  if (data.customText) {
    message = data.customText;
  } else {
    message = `Merhaba Öz Delenler Halı Koltuk Yıkama, web siteniz üzerinden iletişime geçiyorum.\n\n`;
    if (data.name) message += `👤 Ad Soyad: ${data.name.trim()}\n`;
    if (data.phone) message += `📞 Telefon: ${data.phone.trim()}\n`;
    if (data.service) message += `🧼 Hizmet: ${data.service}\n`;
    if (data.address) message += `📍 Adres / Bölge: ${data.address.trim()}\n`;
    if (data.note) message += `📝 Not / Ürün Detayı: ${data.note.trim()}\n`;
    message += `\nHizmet hakkında bilgi ve fiyat almak istiyorum. Müsait olduğunuzda dönüş yapabilir misiniz?`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};
