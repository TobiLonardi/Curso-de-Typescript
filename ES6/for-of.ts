(()=>{
    type Avengers={
        name:string,
        weapon:string
    }

    const ironman: Avengers={
        name:"ironman",
        weapon:"armor suit"
    }

    const capitanAmerica: Avengers={
        name:"capitanAmerica",
        weapon:"shield"
    }

    const thor: Avengers={
        name:"thor",
        weapon:"hammer"
    }

    const avengersArr: Avengers[] = [ironman, capitanAmerica, thor];
    for (const avenger of avengersArr) {
        console.log(avenger);
    }

})();