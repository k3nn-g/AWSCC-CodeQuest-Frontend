//Task 1
const cities = ['manila', 'seoul', 'japan', 'tokyo', 'singapore'];
    console.log(cities[2]);
    
    cities [1] = 'italy';
    console.log(cities[1]);

//Task 2
const fruits = ['mango', 'strawberry', 'apple'];
    fruits.push("tangerine");
    fruits.pop();
    for (let i = 0; i< fruits.length; i++) {
        console.log(fruits[i]);
    }

//Task 3
const numbers = [10,4,17,13,7];
const doublednum = numbers.map(function(number) {
    return number * 2;
});
    console.log(doublednum);

const greaterFive = numbers.filter(function(number){
    return number >= 5;
});
    console.log(greaterFive);

//Task 4
const colors = ['maroon', 'blue', 'black', 'white'];
    colors.unshift('dandelion');
    colors.shift();
const firstTwoColors = colors.slice (1,3);
console.log (firstTwoColors);

//Task 5
const characters = ['a', 'b', 'c', 'd', 'e', 'f'];
    characters.splice(2, 2, 's', 'v');
    console.log(characters);
    characters.splice(4, 3);
    console.log(characters);