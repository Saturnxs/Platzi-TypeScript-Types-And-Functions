export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true, // nullish coalescing operator (??) - only null or undefined will be replaced by true (not 0 or '')
  };
};

console.log(createProduct('123'));
console.log(createProduct('123', 100));
console.log(createProduct(123, 10, false));
