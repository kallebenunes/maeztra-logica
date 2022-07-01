function getRepeatedItems(numbers){
    let numbersOcurrencys = {}

    let repeatedNumbers = new Set()

    numbers.forEach(element => {
        if(numbersOcurrencys[element]){
            repeatedNumbers.add(element)
        } else {
            numbersOcurrencys[element] = 1
        }
    });

    return [...repeatedNumbers]

}

console.log(getRepeatedItems([4,5,44,98,4,5,6,7]))