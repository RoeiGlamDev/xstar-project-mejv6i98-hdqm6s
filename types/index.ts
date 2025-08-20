import { ReactNode } from 'react';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  amenities: string[];
  ownerId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  propertiesOwned: Property[];
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export interface Theme {
  primaryColor: string; // e.g., '#ff69b4' for pink
  secondaryColor: string; // e.g., '#000000' for black
  backgroundColor: string; // e.g., '#1a1a1a' for dark background
  textColor: string; // e.g., '#ffffff' for white text
}

export interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default {}; // Default export for module compatibility