export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  image: string;
  iconName: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  serviceType: 'Halı' | 'Koltuk' | 'Yatak' | 'Genel';
  highlight?: string;
  platform: 'Google' | 'Yandex';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  tag: string;
}

export interface ServiceArea {
  name: string;
  district: string;
  description: string;
  badge?: string;
}
