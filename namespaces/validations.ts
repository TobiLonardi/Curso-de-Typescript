namespace Validations{
    export const ValidateText = (text: string): boolean => {
        return(text.length > 3)? true : false;
        
    }

    const ValidateDate = (date: Date): boolean => {
        return ( isNaN(date.valueOf())) ? false : true;
    }
}


console.log(Validations.ValidateText("Hola"));