"use strict";
(function () {
    var flash = { nombre: 'Barry Allen', edad: 24, poderes: ['super velocidad', 'viajar en el tiempo'] };
    flash = { nombre: 'Clark Kent',
        //edad:30,
        poderes: ['super fuerza', 'volar', 'vision laser'], getName: function () {
            return this.nombre;
        }
    };
    var superman = {
        nombre: 'Clark Kent',
        edad: 30,
        poderes: ['super fuerza', 'volar']
    };
})();
