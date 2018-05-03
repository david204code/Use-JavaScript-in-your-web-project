// //Get first header
// var titleElements = document.getElementsByTagName("h2"); //get all h2
// console.log(titleElements[0]);  //print first h2 

// //Get all the elements that has the "class" wonders
// var wondersElements = document.getElementsByClassName("wonders");
// for (var i = 0; i < wondersElements.length; i++) {
//     console.log(wondersElements[i]);
// }

// //Get element  with the ID "new"
// console.log(document.getElementById("new"));

//Selecting elements via CSS selectors
//All paragraph
// console.log(document.querySelectorAll("p").length);

// //All paragraphs inside the "content" ID block
// console.log(document.querySelectorAll("#content p").length);

// //All element with the "exists class"
// console.log(document.querySelectorAll(".exists").length);

// //All "ancient" wonders that still exist
// console.log(document.querySelectorAll("#ancient > .exists").length);

// //first matching element using querySelector
// console.log(document.querySelector("p"));

// // The HTML content of the "content" ID
// console.log(document.getElementById("content").innerHTML);

// get the text content without HTML markup
//The href attributes of the first link
// NOT WORKING console.log(document.querySelector("a").getAttribute("href"));

// ID of the first list
//console.log(document.querySelector("ul").id);

//test the presence of a class on an element by callingcontains
// if (document.getElementById("ancient").classList.contains("wonders")) {
//     console.log("The element identified by 'ancient' also has the class 'wonders'.");
// } else {
//     console.log("The element identified by 'ancient' does not have the class 'wonders.'");
// }

//MODIFYING PAGE STRUCTURE
//Modifying an HTML element: adding an <li> 
document.getElementById("languages").innerHTML += `<li id="c">C</li>`;
//Delete
// document.getElementById("languages").innerHTML = "";

//Modify the title text' content
document.querySelector("h1").textContent += " for programming";

//set attribute
// document.querySelector("h1").setAttribute("id", "title");
// console.log(document.querySelector("#title"));

var titleElement = document.querySelector("h1"); //Grab the first h1
console.log(titleElement);
titleElement.classList.remove("beginning"); //remove the class begining
titleElement.classList.add("title"); //Add a class called "title"
console.log(titleElement);

var pythonElement = document.createElement("li")  //create an li element
pythonElement.id = "python"; //Add details to the element, like an id
pythonElement.textContent = "Python"; //Define its text content
document.getElementById("languages").appendChild(pythonElement); //Insert the new element into the DOM

//Insert insertAdjacentHTML
//Add an element to the beginning of the list
document.getElementById("languages").insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

//Replace or remove node
var bashElement = document.createElement("li"); //create an li Element
bashElement.id = "bash";  //define its id
bashElement.textContent = "Bash"; //define its content
//Replace the element identified by "perl" with the new element

//get style
var paragraphStyle = getComputedStyle(document.getElementById("content"));
console.log(paragraphStyle.fontStyle); // Will be "italic"
console.log(paragraphStyle.color); // Will show the color blue in RGB values









