// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let output = "";
    let message = input.toLowerCase(); // ignores capital letters

    // invalid input and shift values
    if (shift === 0 || shift < -25 || shift > 25 || !shift || !input) { 
        return false;
    }

    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (!alphabet.includes(message[i])) { //finds spaces and special characters
                output += message[i]; // adds them to output
                break
            }
            
            if (alphabet[j] === message[i]) { // encoding shift
                let shifted = j + shift;
                if (!encode) {   // decoding shift
                    shifted = j - shift;
                }
                
                // account for beginning and end of alphabet
                if (shifted < 0) {
                    shifted += 26;
                    output += alphabet[shifted];
                } else if (shifted > 25) {
                    shifted -= 26;
                    output += alphabet[shifted];
                } else {
                    output += alphabet[shifted];
                }
            }
        }
    }
    return output;
}


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

