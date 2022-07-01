function distinctModes (number){
    let totalModes = 1;
    for(let i = 1 ; i <= number; i++){
        totalModes *= i
    }

    return totalModes
}

console.log(distinctModes(5))