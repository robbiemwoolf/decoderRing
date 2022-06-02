// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
      // alphabet refers to the substituition alphabet
      // input can include spaces, letters, and special characters
    let substitute = alphabet // for clarity
    let standard = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let array = [];
    let message = input.toLowerCase(); // ignore capital letters
    
    if (!input || !substitute) {
        return false;
    }
   
    // substitution alphabet has to be the same length of the standard alphabet
    if (substitute.length !== 26) { 
        return false;
    }
    
    // all characters in the substitution alphabet must be unique
    for (let characters in substitute) {
        if (array.indexOf(substitute[characters]) < 0) { // will be -1 if not present, and it will unless there are repeat characters
            array.push(substitute[characters]); // pushes character into array
        } else {
            return false;
        }
    } 

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") { // maintains spaces
            result += " ";
        } else {
            let standardAbcs = standard;
            let subAbcs = substitute;
            if (!encode) {
               standardAbcs = substitute;
               subAbcs = standard;
            };

            for (let j = 0; j < standardAbcs.length; j++) {
                if (message[i] === standardAbcs[j]) {
                    result += subAbcs[j];
                }
            }
        }
    }   
    return result;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

