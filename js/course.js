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






