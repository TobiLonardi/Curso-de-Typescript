(()=>{
    const batman: string="batman";
    const linternaVerde: string="linterna verde";
    const volcanNegro: string=`heroe: volcan negro`;
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'no existe');
    console.log(linternaVerde.toUpperCase());
    console.log(volcanNegro.toUpperCase());
})()