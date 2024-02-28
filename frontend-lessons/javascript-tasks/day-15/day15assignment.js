for (let i = 1; i<=5; i++) {
    console.log(i);
}

let cookies = ["Chocolate", "Matcha", "Macaroon"];

for (let i=0; i < cookies.length; i++) {
    console.log (cookies[i]);
}

let jarNotEmpty = true

while (jarNotEmpty) {
    if (cookies.length > 0) {
        cookies.pop();
        console.log("Eating cookies...");
    } else {
        console.log("Jar is empty");
        jarNotEmpty = false;
    }
}