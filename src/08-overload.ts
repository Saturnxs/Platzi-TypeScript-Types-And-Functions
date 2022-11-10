
  export function parseString(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
      return input.join('');
    } else {
      return input.split('');
    }
  }

  const array = parseString("Hello");
  const word = parseString(['a', 'b', 'c']);

  // Problem

  // array.reverse(); TypeScrip can't infer the type of array so can't use the type of reverse() unless we cast it
  //
  // if(Array.isArray(array)) {
  //   array.reverse(); // Now we can use reverse() because we know it's an array
  // }

  // word.toUpperCase(); // TypeScript can't infer the type of word so can't use the type of toUpperCase() unless we cast it

  // if(typeof word === 'string') {
  //   word.toUpperCase(); // Now we can use toUpperCase() because we know it's a string
  // }


  // Solution with overloads

  export function parseString2(input: string): string[]; // Overload 1 - input is a string, return is a string array
  export function parseString2(input: string[]): string; // Overload 2 - input is a string array, return is a string

  export function parseString2(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
      return input.join('');
    } else {
      return input.split('');
    }
  }

  const array2 = parseString2("Hello");
  const word2= parseString2(['a', 'b', 'c']);

  array2.reverse(); // Now we can use reverse() because we know it's an array
  word2.toUpperCase(); // Now we can use toUpperCase() because we know it's a string


