const fibonacci = function(number) {
    
    let first = 1;
    let second = 1;

    if (number < 0) {
        return "OOPS"
    }

    //two numbers dont get added together and return 1;
    if (number <= 2) {
        return 1;
    }
 
    //start at 3 number in sequence;
    for(let i = 3; i <= number; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
