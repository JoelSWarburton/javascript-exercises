const findTheOldest = function(people) {
    let oldest = people[0];
    for(const person of people) {

        if (age(person) > age(oldest)) {
            oldest = person;
        }
    }

    return oldest;
};

const age = function(person) {
    
    if(person.yearOfDeath == undefined) {
        let currentYear = new Date().getFullYear();
        
        return currentYear - person.yearOfBirth;
    }

    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
