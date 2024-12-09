let totalAmount = document.getElementById("totalAmount");
let transactionHistory = document.getElementById("transactionHistory");
let amountInput = document.getElementById("amountInput");
let depositBtn = document.getElementById("depositBtn");
let withdrawBtn = document.getElementById("withdrawBtn");

let balance = 0;

depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);

function deposit() {
    balance += Number(amountInput.value);
    totalAmount.innerText = balance;
    addTransaction("Deposit", amountInput.value, balance);
    amountInput.value = "";
}

function withdraw() {
    balance -= Number(amountInput.value);
    totalAmount.innerText = balance;
    addTransaction("Withdraw", amountInput.value, balance);
    amountInput.value = "";
}

function addTransaction(type, amount, balance) {
    let li = document.createElement("li");
    li.innerText = `${type}: ${amount}₹ | Balance: ${balance}₹`;
    transactionHistory.appendChild(li);
}





