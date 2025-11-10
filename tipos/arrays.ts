(()=>{
// tipos/arrays.ts
 const numbers: (number | boolean)[] = [1, 2, 3, 4, 5,false];
 numbers.push(true);
 const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
 villians.forEach( v => console.log(v.toUpperCase()) );
  numbers.forEach( v => console.log(v) );


})();