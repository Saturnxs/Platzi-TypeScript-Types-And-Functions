import { Category } from "../category/category.model";
import { baseModel } from "../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product extends baseModel {
  name: string;
  price: number;
  sizes: Sizes;
  stock?: number;
  isNew?: boolean;
  category: Category;
};
