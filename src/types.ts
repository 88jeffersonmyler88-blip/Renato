export interface GalleryItem {
  id: string;
  title: string;
  category: 'esportivos' | 'suvs' | 'sedans' | 'residencial' | 'antivandalismo';
  vehicleOrPlace: string;
  filmType: string;
  imageUrl: string;
  date?: string;
  badge?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  imageUrl: string;
  irRejection: string;
  uvProtection: string;
  durability: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  vehicle: string;
  comment: string;
  service: string;
}

export interface TintLevel {
  grade: string;
  vlt: number; // Visible Light Transmission %
  label: string;
  irRejection: number;
  uvProtection: number;
  privacy: string;
  recommendedFor: string;
  darknessValue: number; // for CSS opacity
}
