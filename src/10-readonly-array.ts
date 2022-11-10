(() => {

  // Mutable array
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(6);

  console.log(numbers);

  // Immutable or readonly array
  const numbers2: ReadonlyArray<number> = [1, 2, 3, 4, 5];
  // numbers2.push(6); // ERROR

  // Valid no mutable methods

  console.log(numbers2);
  console.log(numbers2[0]);
  console.log(numbers2.length);
  console.log(numbers2[0] + numbers2.length);
  console.log(numbers2.map((n) => n * 2));
  console.log(numbers2.filter((n) => n > 2));
  console.log(numbers2.reduce((a, b) => a + b, 0));



})();
