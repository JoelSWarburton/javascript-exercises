const palindromes = function (word) {
    

    word = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedWord = ""
    for(i = word.length -1; i >= 0; i--) {
        reversedWord += word[i]
    }
   
    for(i = 0; i < word.length; i++) {
        if(word[i] != reversedWord[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
