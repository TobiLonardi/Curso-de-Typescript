(()=>{
    class Avenger{
        //private name:string;
        //public team:string
        //public realName:string;
        static avgAge:number=35;
        static getAvgAge(){
            return this.name;
        }
        constructor(private name:string, private team:string, public realName:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        public bio(){
            return `${this.name} (${this.team}) - ${this.realName}`;
        }
    }
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    //antman.name = 'Antman';
    //antman.team = 'Capitan';
    antman.realName = 'Scott Lang';
    console.log(Avenger.getAvgAge());
    console.log(antman.bio());
})();