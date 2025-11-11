(()=>{
    class Avenger{
        name;
        power;
        constructor(name = "no name", power = 0){
            this.name = name;
            this.power = power;
        }
    }

    class flyingAvenger extends Avenger{
        flying;
        constructor(name, power){
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger("hulk", 1000);
    const falcon = new flyingAvenger("falcon", 600);

    console.log(falcon);
    console.log(hulk);
})();