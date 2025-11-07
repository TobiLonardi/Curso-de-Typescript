(()=>{
    type Heroe = {
    nombre: string,
    edad?: number,
    poderes: string[],
    getName?: () => string
}

    let myCustomVar: (string | number | Heroe) = "fernando";
    console.log( myCustomVar );
    myCustomVar = 20;
    console.log( myCustomVar );
    myCustomVar = {nombre: 'Bruce Wayne', poderes: ['dinero']};
    console.log( myCustomVar );
})();