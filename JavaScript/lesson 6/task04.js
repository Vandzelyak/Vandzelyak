/**
 * Created by Lena on 24.08.2015.
 */

//creating objects
var vasya = {
    name: "Вася",
    age: 23
};
var masha = {
    name: "Маша",
    age: 18
};
var vovochka = {
    name: "Вовочка",
    age: 6
};

//creating an array
var people = [ vasya , masha , vovochka ];

//creating a function for sorting the array with age property
function compareAge(personA, personB) {
    if (personA.age > personB.age) {
        return 1;
    } else if (personA.age < personB.age) {
        return -1;
    } else {
        return 0;
    }
}

//sorting an array by function compareAge
people.sort(compareAge);

//displaying an array
for(var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}