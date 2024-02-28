//task 1
const product = {
    name: 'Will to live',
    price: 102030,
    quantity: 3,
}

const productJSON = JSON.stringify(product);
console.log(productJSON);

//task 2
const bookJSON = `{
    "title": "Between the Rainbow",
    "author": "ineryss",
    "publishedYear": 2023
}`;

const book = JSON.parse(bookJSON);
console.log(book.author);

//task 3
const person = [
    {name: "Brent", age: 24, city: "Manila City"},
    {name: "Shiloh", age: 22, city: "Cebu City"},
    {name: "Mavrick", age: 24, city: "Lipa City"},
    {name: "Rade", age: 27, city: "Muntinlupa City"}
];

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personJS = JSON.parse(personJSON);

personJS.forEach(person => {
    console.log(`Name: ${person.name}, City: ${person.city}`);
});
