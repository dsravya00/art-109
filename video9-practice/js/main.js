
console.log("hello hello");


// Javascript Timeout changes h1 title after 3 seconds
setTimeout(function () {
    document.querySelector("#page-title").style.color = "#fff";
    // console.log("timeout worked!");
}, 3000); 

// Click event on header changes background color
document.querySelector("header").onclick = function () {
    // console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "";
}


/* Same code, but stores the html dom objects inside variables

// Declare variables
let pageTitle = document.querySelector("#page-title");
let header = document.querySelector("header");
let body = document.querySelector("body");

// Javascript Timeout changes h1 title after 3 seconds
setTimeout(function(){
    pageTitle.style.color = "pink";
    // console.log("timeout worked!");
}, 3000);


// Click event on header changes background color
header.onclick = function() {
    // console.log("clicked header");
    body.style.backgroundColor = "black";
}

*/


 //first store all the iamge-di class element in a variable 
 let divs = document.querySelectorAll(".image-div"); 
 
 // next apply an event listener to all of them at once using a forEach Loop
 
 divs.forEach((div) => {
     div.addEventListener('click', () => {
          console.log("forEach worked"); 
          div.style.visibility = "hidden";   
         
 });
     
 }); 