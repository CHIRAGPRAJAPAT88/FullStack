// question no. 5
 // take age from user and if age is more than 18 
    // show inside a paragraph welcome to site and backgroundColor
    // green otherwise red or text is not allowed     with background color
let userAge  = parseInt(prompt("Please enter your age:"));
let message = document.getElementById("message");

if (userAge >= 18) {
    message.innerText = "Welcome to site";
    message.style.backgroundColor = "green";
    message.style.color = "white";
} else {
    message.innerText = "Text is not allowed";
    message.style.backgroundColor = "red";
    message.style.color = "white";
}