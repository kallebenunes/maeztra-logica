function sequenceIsOrdered(number) {
    let numberList = number.toString().split("");
    let firstNumber = numberList[0];
    let secondDifferentNumber = null;
  
    for (let i = 0; i < numberList.length; i++) {
      let diffrecence = Math.abs(numberList[i] - numberList[i + 1]);
  
      if (!isNaN(diffrecence) & !(diffrecence <= 1)) {
        console.log("Not ordered sequence");
        return;
      }
      secondDifferentNumber = numberList[i] !== firstNumber && numberList[i];
    }
  
    if (!secondDifferentNumber)
      return console.log("Todos os digítos da sequência são idênticos.");
  
    let orderType =
      firstNumber < secondDifferentNumber ? "crescent" : "decrescent";
  
    let orderMessages = {
      crescent: () => console.log("Crescent sequence"),
      decrescent: () => console.log("Decrescent sequence")
    };
  
    orderMessages[orderType]();
  }
  
  sequenceIsOrdered(1);
  