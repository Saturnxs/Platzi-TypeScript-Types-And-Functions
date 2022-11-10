export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

// export type Product = {
//   name: string;
//   price: number;
//   sizes: Sizes[];
//   stock: number;
//   isNew: boolean;
// };

export interface Product {
  name: string;
  price: number;
  sizes: Sizes[];
  stock: number;
  isNew: boolean;
};

const products: Product[] = [];

products.push({
  name: 'T-Shirt',
  price: 100,
  sizes: ['S', 'M', 'L'],
  stock: 10,
  isNew: true,
});

const addProduct = (data: Product) => {
  products.push(data);
};
