//Task 1
const book = {
    title: 'Over the horizon',
    author: 'ineryss',
    year: 2023,
};
console.log(book.author);

//Task 2
const student = {
    name: 'Brent',
    age: 24,
    grade: 98,
};
student.age = 27;
console.log(student.age);
student.subject = ['Calculus', 'Ethics', 'Economics'];
console.log(student.subject);

//Task 3
const rectangle = {
    width: 150,
    height: 70, 
    calculateArea: function(a, b) {
        return this.width * this.height;
    }
};
const area = rectangle.calculateArea();
console.log(area);

//Task 4
const person = {
    name: 'Shiloh',
    age: 22,
    address:'Vista Heights',
};
delete person.address;

const employee = {
    name: 'Maverick',
    position: 'Architect', 
};

const employeeDetails = {
    ...person, 
    ...employee
};
console.log(employeeDetails);

