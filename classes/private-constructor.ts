(()=>{
    class Apocalipsis{
        static instance:Apocalipsis;
      private constructor(private name:string){}
      static callApocalipsis():Apocalipsis{
        if(!Apocalipsis.instance){
            Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis...El fin de los tiempos');
        }
        return Apocalipsis.instance;
        }
        changeName(newName:string){
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
   //const apocalipsis2 = new Apocalipsis('Soy Apocalipsis...El fin de los tiempos');
   
})();