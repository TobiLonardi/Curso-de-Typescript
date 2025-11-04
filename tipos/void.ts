(()=>{
// tipos/void.ts
    function callBatman():void{
        console.log('Batiseñal activada');
        return;
    }
    const a = callBatman();
    console.log(a);

    const callSuperman = ():void => {
        console.log('Superman al rescate');
        return;
    }
})()