async function setupTask(){
    var setup_func = await loadStringFromLocalStorage('setupFunction')
    setup_func = setup_func || "setupMechanicalTurkTask()"
    console.log('setup_func', setup_func)
    await eval(setup_func)
}