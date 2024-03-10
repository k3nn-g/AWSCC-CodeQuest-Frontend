function greet (name) {
    console.log(`Hello there, ${name}!`);
}
greet ("Kenneth");

function addNumbers (a, b) {
    return a + b;
}
const result = addNumbers(67,89);
console.log(result);

function calculateAverage (num) {
    let sum = 0 
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum / num.length;
}

const array = [17,13,3];
const average = calculateAverage(array);

console.log(`The average is ${average}.`);
