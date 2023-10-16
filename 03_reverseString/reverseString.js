const reverseString = function(word) {
    newWord = word.split("");
    return newWord.reverse().join("");

};


reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
