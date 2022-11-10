import { addProduct } from "./products/products.service";

addProduct({
  id: 1,
  name: "Product 1",
  price: 100,
  sizes: 'S',
  stock: 10,
  isNew: true,
  category: {
    id: 1,
    name: "Category 1"
  }
});
