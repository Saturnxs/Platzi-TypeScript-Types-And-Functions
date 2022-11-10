import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product): void => {
  // data.id = '1' // Error: Cannot assign to 'id' because it is a read-only property.
  // data.createdAt = new Date() // Error: Cannot assign to 'createdAt' because it is a read-only property.
  products.push(data);
};
