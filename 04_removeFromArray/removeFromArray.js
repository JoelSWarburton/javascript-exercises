const removeFromArray = function(theArray, ...toRemove) {
    
    for(const element of toRemove) {
        removeIndex = theArray.indexOf(element);
        
        //skip if element not present in array
        if (removeIndex == -1) continue;

        theArray.splice(removeIndex, 1);
    }
    return theArray;
};


// Do not edit below this line
module.exports = removeFromArray;
