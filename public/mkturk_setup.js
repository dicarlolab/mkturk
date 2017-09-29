async function setupTask(){
    var setup_func = await loadStringFromLocalStorage('setupFunction')
    
    if(setup_func.length <3){
        // tood: better check for nonsense ée
        setup_func = "setupMechanicalTurkTask()"
    }
    
    console.log('setup_func', setup_func)
    await eval(setup_func)
}