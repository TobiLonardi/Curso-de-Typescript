(() => {
    const fullName = (firstName: string, lastName?: string, uper:boolean = false): string => {
        return `${firstName} ${lastName || 'No last name'}`;
        if(uper){
            return `${ firstName } ${ lastName || 'No last name' }`.toUpperCase();
        }
        else{
            return `${ firstName } ${ lastName || 'No last name' }`;
        }
    }
    const name = fullName('Tony',"Stark",true);
    console.log(name);
})()
