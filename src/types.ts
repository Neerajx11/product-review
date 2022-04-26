export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export interface ProductState {
  isLoading: boolean;
  products: Array<Product>;
  error: string;
}

export interface ReviewState {
  id: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  content: string;
}
