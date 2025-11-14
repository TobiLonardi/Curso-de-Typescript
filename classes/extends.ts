(()=>{
    class Avenger{
        constructor(
            public name:string,
            public realName:string
        ){
            console.log('Constructor Avenger llamado');
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){
            super(name, realName);
            console.log('Constructor Xmen llamado');
            this.getFullName();
            
        }
        getFullNameDesdeXmen(){
            //return this.getFullName();
            return `${this.name} - ${this.realName}`;
        }

        get fullName(){
            return this.getFullName();
        }
        set fullName(name:string){
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