const findTheOldest = function(people) {
    const d = new Date();
    let year = d.getFullYear();
    // console.log("Working");
    var ans;
    let oldest = 0;
    people.forEach(element => {
        let age;
        if(element.yearOfDeath==undefined){
            age = year - element.yearOfBirth;
        }else{
            age = element.yearOfDeath - element.yearOfBirth;
        }
        // console.log(element.name);
        // console.log(age);
        if(age>oldest){
            ans = element;
            // console.log(element.name);
            oldest = age;
        }
    });
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
