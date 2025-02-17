export interface CategorySidebarProps {
  categories: string[];
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartProduct {
  title: string;
  image: string;
  category: string;
  ratings: number;
}
