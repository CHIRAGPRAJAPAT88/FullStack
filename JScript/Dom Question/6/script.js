// question no. 6 
// ask user a no. and if no. is
// positive => box => green ,positive
// negative => box => red ,negative
// zero => box => yellow ,zero
let checkNumber = parseInt(prompt("Enter a number"));
let result = document.getElementById("result");


if (checkNumber > 0) {
    result.textContent = checkNumber + " (Positive)";
    result.style.backgroundColor = "green";
    result.style.color = "white";
} else if (checkNumber < 0) {
    result.textContent = checkNumber + " (Negative)";
    result.style.backgroundColor = "red";
    result.style.color = "white";
} else {
    result.textContent = checkNumber + " (Zero)";
    result.style.backgroundColor = "yellow";
    result.style.color = "black";
}