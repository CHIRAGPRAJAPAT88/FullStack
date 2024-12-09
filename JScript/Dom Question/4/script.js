// question no. 4
// ask user a no. and if no. is
// positive => box => green ,positive
// negative => box => red ,negative
// zero => box => yellow ,zero


let userNumber = parseInt(prompt("Please enter a number:"));

if (userNumber > 0) {
    document.getElementById("result").textContent = userNumber + " (Positive)";
    document.getElementById("result").classList.add("positive");
} else if (userNumber < 0) {
    document.getElementById("result").textContent = userNumber + " (Negative)";
    document.getElementById("result").classList.add("negative");
} else {
    document.getElementById("result").textContent = userNumber + " (Zero)";
    document.getElementById("result").classList.add("zero");
}

