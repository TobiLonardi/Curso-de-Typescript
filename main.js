"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Erik Lehnsherr');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) - ${this.realName}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    antman.realName = 'Scott Lang';
    console.log(Avenger.getAvgAge());
    console.log(antman.bio());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
            this.getFullName();
        }
        getFullNameDesdeXmen() {
            return `${this.name} - ${this.realName}`;
        }
        get fullName() {
            return this.getFullName();
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.getFullNameDesdeXmen();
    console.log(wolverine.getFullNameDesdeXmen());
    const nuevoAvenger = new Avenger('Antman', 'Scott Lang');
    wolverine.fullName = 'New Name';
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis...El fin de los tiempos');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis2.changeName('Xavier');
    console.log(apocalipsis2);
    console.log(apocalipsis3);
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map