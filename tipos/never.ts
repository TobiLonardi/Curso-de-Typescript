(()=>{
    const error = (message: string): never => {
        throw new Error(message);
    }
    const result = error('Error fatal');
    console.log(result);
})();