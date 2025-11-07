(()=>{
    let flash:{nombre: string, edad?: number, poderes: string[], getName?: () => string} = {nombre: 'Barry Allen', edad:24, poderes: ['super velocidad', 'viajar en el tiempo']}
    flash = {nombre: 'Clark Kent',
         //edad:30,
          poderes: ['super fuerza', 'volar', 'vision laser'],
          getName(){
                return this.nombre;
          }
        };
    let superman:{nombre: string, edad?: number, poderes: string[], getName?: () => string} = {
        nombre: 'Clark Kent',
        edad:30,
        poderes: ['super fuerza', 'volar']
    };
})()