// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// 1. Create an HTML document with various elements, including headings, paragraphs, and divs.
// 2. Use JavaScript to select and log the following elements to the console:

//    a. All paragraphs on the page using `getElementsByTagName`.
   
//    b. All elements with the class "info" using `getElementsByClassName`.
   
//    c. The element with the ID "header" using `getElementById`.
   
//    d. The first element with the class "highlight" using `querySelector`.

// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
// 4. Change the background color of the div with the ID "header" to a different color of your choice.

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
// 6. Append the newly created `h3` element to the end of the body of the HTML document.

// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.

// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.

// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.
// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.

// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*

    /*Task 1*/
    const paragraphElements = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphElements.length; i++) {
        console.log("Paragraph: ", paragraphElements[i]);
    }
    const infoElements = document.getElementsByClassName("info");
    for (let i = 0; i <  infoElements.length; i++) {
        console.log("Information: ", infoElements[i]);
    }
    const headerElements = document.getElementById("header");
    console.log("Header: ", headerElements);

    const highlightElements = document.querySelector(".highlight");
    console.log("Highlight: ", highlightElements);

    /*Task 2*/
    const secondParag = document.getElementsByTagName("p")[1];
    secondParag.textContent = "This paragraph is now updated!";

    const div = document.getElementById("header");
    div.style.backgroundColor = "blue";

    /*Task 3*/
    const header3 = document.createElement("h3");
    header3.textContent = "New Section";
    document.body.appendChild(header3);

    /*Task 4*/
    const paragraph1 = document.querySelector("p");
    document.body.removeChild(paragraph1);

    /*Task 5*/
    const headerclicker = document.getElementById("header");
    headerclicker.addEventListener('click', () => {
        console.log("Header clicked!");
    })

    /*Task 6*/
    let color = ["blue", "black", "maroon", "grey"];
    for (let i = 0; i < paragraphElements.length; i++) {
        paragraphElements[i].style.backgroundColor = color[i];
    }