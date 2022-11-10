(() => {
  let anyVar: any;
  anyVar = "Hello";
  anyVar = true;
  anyVar = { name: "John" };

  anyVar.toUpperCase(); // no error

  let unknownVar: unknown;
  unknownVar = "Hello";
  unknownVar = true;
  unknownVar = { name: "John" };

  //unknownVar.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'.

  // force to verify if the variable is a string
  if(typeof unknownVar === 'string') {
    unknownVar.toUpperCase(); // no error
  }

  const parse = (str: string): unknown => {
    return JSON.parse(str);
  }

})();
