(() => {

  // infered type: never
  const withoutEnd = () => {
    while (true) {
      console.log('Hola Mundo');
    }
  }

  // infered type: never
  const fail = (message: string) => {
    throw new Error(message);
  }

  const example = (input: unknown) => {
    if (typeof input === 'string') {
      // infered type: string
      return 'Hello ' + input;
    } else if (Array.isArray(input)) {
      // infered type: never[]
      return 'Hello ' + input.join(' ');
    }
    return fail('Invalid input');
  }

  console.log(example('John'));
  console.log(example(['John']));
  console.log(example(123));
  console.log(example('Hola Mundo'));

})();
