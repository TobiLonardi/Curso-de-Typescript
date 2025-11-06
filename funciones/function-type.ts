(()=>{
   const addNumbers = (a: number, b: number): number =>  a + b;
   const greet = (name: string): string =>   `Hello, ${name}`;
   const saveTheWorld = (): void => console.log('The world is saved!');

   let myFunction;
   console.log(myFunction);

   myFunction = addNumbers;
   console.log( myFunction(1,2) );

   myFunction = greet;
   console.log( myFunction('Tobias') );
   myFunction = saveTheWorld;
   console.log( myFunction() );
})()