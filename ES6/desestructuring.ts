(()=>{
    type Avengers={
        nick:string,
        ironman:string,
        vision:string,
        activos:boolean,
        poder:number
    }

    const avengers: Avengers = {
        nick:"Samuel L Jackson",
        ironman:"Robert Downey Jr",
        vision:"Paul Bettany",
        activos:true,
        poder:1500
    }

    //const {poder, vision} = avengers
    //console.log(poder, vision.toUpperCase);
    const printAvenger = ({ironman, ...resto}: Avengers) => {
        console.log(ironman,resto)
    }

    const avengersArr:[string, boolean, number] = ['Cap. America', true, 150.15]

    const [capitan,ironman,] = avengersArr
    console.log(ironman,capitan)
})();