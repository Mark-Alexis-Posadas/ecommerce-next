export interface CardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

export interface ProductListProps {
  limit?: number;
  category?: string | null;
}
