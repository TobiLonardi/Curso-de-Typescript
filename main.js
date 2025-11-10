"use strict";
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, lastName, uper) {
        if (uper === void 0) { uper = false; }
        return "".concat(firstName, " ").concat(lastName || 'No last name');
        if (uper) {
            return "".concat(firstName, " ").concat(lastName || 'No last name').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'No last name');
        }
    };
    var name = fullName('Tony', "Stark", true);
    console.log(name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'No last name');
    };
    var name = fullName('Tony');
    console.log(name);
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', "joseph", 'Kent');
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hello, ".concat(name); };
    var saveTheWorld = function () { return console.log('The world is saved!'); };
    var myFunction;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Tobias'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatisingal = function () {
        return "Batiseñal activada";
    };
    console.log(typeof activateBatisingal);
    var heroeName = returnName();
})();
(function () {
    var flash = { nombre: 'Barry Allen', edad: 24, poderes: ['super velocidad', 'viajar en el tiempo'] };
    flash = { nombre: 'Clark Kent',
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
(function () {
    var flash = { nombre: 'Barry Allen', edad: 24, poderes: ['super velocidad', 'viajar en el tiempo'] };
    flash = { nombre: 'Clark Kent',
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
(function () {
    var myCustomVar = "fernando";
    console.log(myCustomVar);
    myCustomVar = 20;
    console.log(myCustomVar);
    myCustomVar = { nombre: 'Bruce Wayne', poderes: ['dinero'] };
    console.log(myCustomVar);
})();
(function () {
    var avengers = 10;
    var exist;
    var power;
    avengers = 'Dr. Strange';
    console.log(avengers.charAt(0));
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, false];
    numbers.push(true);
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    var result = error('Error fatal');
    console.log(result);
})();
(function () {
    var isActive = null;
    var isAlive = undefined;
    console.log(isActive);
    console.log(isAlive);
})();
(function () {
    var avengers = 10;
    console.log({ avengers: avengers });
    var villains = 20;
    console.log({ villains: villains });
    if (avengers < villains) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
(function () {
    var _a;
    var batman = "batman";
    var linternaVerde = "linterna verde";
    var volcanNegro = "heroe: volcan negro";
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'no existe');
    console.log(linternaVerde.toUpperCase());
    console.log(volcanNegro.toUpperCase());
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        console.log('Batiseñal activada');
        return;
    }
    var a = callBatman();
    console.log(a);
    var callSuperman = function () {
        console.log('Superman al rescate');
        return;
    };
})();
//# sourceMappingURL=main.js.map