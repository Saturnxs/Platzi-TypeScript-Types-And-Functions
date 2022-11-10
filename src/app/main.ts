import { faker } from '@faker-js/faker';
import { products, addProduct, updateProduct, getProduct } from "./products/products.service";

for(let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
    color: faker.color.human(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    isNew: true,
    categoryId: faker.datatype.uuid(),
    tags: faker.helpers.arrayElements()
  });

}

console.log(products);

const product = products[0];
console.log(updateProduct(product.id, {
  name: 'NEW PRODUCT NAME',
  stock: 1000,
}));


getProduct({
  stock: 1000,
  name: 'NEW PRODUCT NAME',
  isNew: true,
  tags: ['tag1', 'tag2', 'tag3'],
});
