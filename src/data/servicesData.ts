import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hali-yikama',
    title: 'Halı Yıkama',
    description: 'Halılarınızın cinsine özel otomatik fırçalama, derinlemesine toz alma, kapalı alanda kurutma ve özenli paketleme.',
    features: [
      'Cinsine özel bitkisel şampuanlar',
      'Leke odaklı ön işlem ve durulama',
      'Kapalı, tozsuz kurutma odaları',
      'Adresten ücretsiz alım ve teslimat'
    ],
    ctaText: 'Halı Yıkama Fiyatı Al',
    image: '/carpet_cleaning_staff.jpg',
    iconName: 'Layers',
    popular: true
  },
  {
    id: 'koltuk-yikama',
    title: 'Koltuk Yıkama',
    description: 'Koltuk, kanepe ve L-koltuk takımlarında adreste buharlı ve vakumlu derinlemesine leke ve kir temizliği.',
    features: [
      'Yerinde adreste profesyonel yıkama',
      'Yüksek emiş güçlü vakumlama',
      'Kumaşa zarar vermeyen temizleyiciler',
      'Kötü kokuları ve lekeleri yok etme'
    ],
    ctaText: 'Koltuk Yıkama Fiyatı Al',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800',
    iconName: 'Armchair',
    popular: true
  },
  {
    id: 'yatak-yikama',
    title: 'Yatak Yıkama',
    description: 'Yataklarınızda biriken mite, toz akarı, leke ve ter izlerinden arındıran anti-alerjenik adreste yıkama hizmeti.',
    features: [
      'Derinlemesine mite ve akar temizliği',
      'Sarı leke ve ter izi leke giderici',
      'Hızlı kuruma garantili vakumlama',
      'Hijyenik ferah koku uygulaması'
    ],
    ctaText: 'Yatak Yıkama Bilgisi Al',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800',
    iconName: 'Bed'
  },
  {
    id: 'sandalye-yikama',
    title: 'Sandalye & Oturma Grubu',
    description: 'Mutfak sandalyeleri, yemek odası sandalyeleri ve berjerlerde kumaş yıpratmayan özel köpüklü temizlik.',
    features: [
      'Ev ve restoran sandalyeleri',
      'Kumaş ve sünger derin hijyeni',
      'Yerinde hızlı ve pratik temizlik',
      'Toplu adet indirimi imkanı'
    ],
    ctaText: 'Bilgi Al',
    image: '/dining_room_chair.jpg',
    iconName: 'Chair'
  },
  {
    id: 'ofis-isletme',
    title: 'Ofis & İşletme Temizliği',
    description: 'Ofis, otel, cami, kafe ve ticari mekanlar için duvardan duvara halı, koltuk ve zemin tekstili yıkama çözümleri.',
    features: [
      'Kurumsal toplu yıkama teklifleri',
      'İş saatlerine uygun esnek takvim',
      'Faturalı ve kurumsal hizmet',
      'Hızlı kuruma teknolojisi'
    ],
    ctaText: 'Teklif Al',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
    iconName: 'Building2'
  }
];
