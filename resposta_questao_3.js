let pairBracket = {
    "{": "}",
    "[": "]",
    "(": ")"
}

function sequeceIsValid(sequence){
    
    if((sequence.length == 0)){
        console.log("Sequência válida")
        
        return
    }

    sequence = sequence.replace(/\s/g, "")
    
    let charactersList = sequence.split("")
    let bracketPairIndex = charactersList.indexOf(pairBracket[charactersList[0]])
    
    charactersList.splice(bracketPairIndex, 1)
    charactersList.splice(0,1)
  

    if(!(charactersList.length % 2 == 0) | bracketPairIndex == -1){
        console.log("Seequência inválida")
        
        return
    } else {
        sequeceIsValid(charactersList.join(""))
    }
    
}



sequeceIsValid("{ [ ( ) ( ) { } [ ] ] { } }")
sequeceIsValid("{ [ ( ( ) ] }")
sequeceIsValid("{ } [ ] ( )")
sequeceIsValid("( ( ) { } [ [ ] )")
sequeceIsValid("} ( ) { } [ [ ] )")
