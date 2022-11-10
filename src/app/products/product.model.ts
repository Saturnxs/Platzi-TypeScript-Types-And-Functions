import { Category } from "../category/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product {
  id: string | number;
  name: string;
  price: number;
  sizes: Sizes;
  stock?: number;
  isNew?: boolean;
  category: Category;
};
