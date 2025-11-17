"use strict";
(() => {
    let flash = { nombre: 'Barry Allen', edad: 24, poderes: ['super velocidad', 'viajar en el tiempo'] };
    flash = { nombre: 'Clark Kent',
        poderes: ['super fuerza', 'volar', 'vision laser'],
        getName() {
            return this.nombre;
        }
    };
    let superman = {
        nombre: 'Clark Kent',
        edad: 30,
        poderes: ['super fuerza', 'volar']
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Tobias',
        age: 30,
        address: {
            id: 125,
            zip: 'AB123',
            city: 'New York'
        },
        getFullAddress(id) {
            return this.address.city + ', ' + this.address.zip;
        }
    };
    const client2 = {
        name: 'Maria',
        age: 28,
        address: {
            city: 'Los Angeles',
            id: 126,
            zip: 'CD456'
        },
        getFullAddress(id) {
            return this.address.city + ', ' + this.address.zip;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map