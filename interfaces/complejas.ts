(()=>{

    interface Client{
        name: string;
        age?: number;
        address:Address
        getFullAddress (id:number) : string;
    }

    interface Address{
        id:number;
        zip:string;
        city:string;
    }
    
    const client:Client ={
        name: 'Tobias',
        age: 30,
        address:{
            id:125,
            zip: 'AB123',
            city: 'New York'
        },
        getFullAddress(id:number){
            return this.address.city + ', ' + this.address.zip;
        }
    }
    const client2:Client ={
        name: 'Maria',
        age: 28,
        address:{
            city: 'Los Angeles',
            id: 126,
            zip: 'CD456'
        },
        getFullAddress(id:number){
            return this.address.city + ', ' + this.address.zip;
        }
    }

})()