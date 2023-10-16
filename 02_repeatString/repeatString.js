const repeatString = function(str, number) {
      let  newString = "";
    if (number < 0) return "ERROR";


    for (let i = 0; i < number; i++) {
        newString += str;
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
