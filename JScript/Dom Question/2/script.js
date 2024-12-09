// question no.2 
// take a number from user and show it in the paragraph

let number = parseInt(prompt("Enter a number"));
let message = document.getElementById("message");

message.innerText = number;
message.style.color = "white";    
message.style.backgroundColor = "Blue";
message.style.textAlign = "center";



message.setAttribute("style","color: white; background-color: blue; text-align: center; font-size: 30px; font-weight: bold; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;");



