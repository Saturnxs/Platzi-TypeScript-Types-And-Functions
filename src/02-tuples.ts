(() => {
  const prices: (number | string)[] = [10, 20, 30, 'as'];
  prices.push(40);
  console.log(prices);


  // Tuple

  const user: [string, number, boolean] = ['Thomas', 30, true];
  console.log(user);

  // bad uses of tuples
  // user = [];
  // user = ['Thomas'];
  // user = ['Thomas', 30, 40];
  // user = [30, 'Thomas'];
  // user = ['Thomas', 30, true, 'hello'];

  const [username, age, verified] = user; // destructuring of tuples
  console.log(username);
  console.log(age);
  console.log(verified);

})();
