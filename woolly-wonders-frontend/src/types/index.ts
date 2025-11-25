export interface FormData {
  name: string;
  phone: string;
  message: string;
}

export interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'sweater' | 'accessory' | 'felted';
}