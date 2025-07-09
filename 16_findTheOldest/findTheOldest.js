const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldestPerson = people[0];
    for (person in people){
        if(!people[person].yearOfDeath){
            people[person].age = currentYear - people[person].yearOfBirth;
        } else {
            people[person].age = people[person].yearOfDeath - people[person].yearOfBirth;
        }
        if(people[person].age > oldestPerson.age){
            oldestPerson = people[person];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
