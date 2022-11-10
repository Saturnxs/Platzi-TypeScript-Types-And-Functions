export const createProduct = (
  id: string | number,
  stock: number = 10, // default value
  isNew: boolean = true // default value
) => {
  return {
    id,
    stock, // default value
    isNew, // default value
  };
};

console.log(createProduct('123')); // { id: '123', stock: 10, isNew: true }
console.log(createProduct('123', 100)); // { id: '123', stock: 100, isNew: true }
console.log(createProduct(123, 10, false)); // { id: 123, stock: 10, isNew: false }
