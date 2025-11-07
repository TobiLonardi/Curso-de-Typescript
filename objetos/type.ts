(()=>{

type Heroe = {
    nombre: string,
    edad?: number,
    poderes: string[],
    getName?: () => string
}

    let flash:Heroe = {nombre: 'Barry Allen', edad:24, poderes: ['super velocidad', 'viajar en el tiempo']}
    flash = {nombre: 'Clark Kent',
         //edad:30,
          poderes: ['super fuerza', 'volar', 'vision laser'],
          getName(){
                return this.nombre;
          }
        };
    let superman:Heroe= {
        nombre: 'Clark Kent',
        edad:30,
        poderes: ['super fuerza', 'volar']
    };
})()