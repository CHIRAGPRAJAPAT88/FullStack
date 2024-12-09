 //question no. 1
    // take age from user and if age is more than 18 
    // show inside a paragraph welcome to site and backgroundColor
    // green otherwise red or text is not allowed   

    let userAge  = parseInt(prompt("Please enter your age:"));

    let message = document.getElementById("message");
    
    if (userAge >= 18) {
        message.innerText = "Welcome to site";
        // message.style.color = "green";
        // message.style.fontWeight = "bold";
        // message.style.fontSize = "50px";
        message.setAttribute("style", "background-color: green; color: white; font-weight: bold; text-align: center; font-size: 50px;");
    } else {
        message.innerText = "Text is not allowed";
        message.style.backgroundColor = "red";
        message.style.color = "white";
        message.style.textAlign = "center";
    }
