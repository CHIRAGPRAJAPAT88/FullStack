let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Your Task");
    } else {
        let ul = document.createElement("ul");
        ul.innerHTML = `${inputs.value}<i class="fa fa-trash" aria-hidden="true"></i>`;
        // ul.innerHTML = `${inputs.value} <i class="fa-solid fa-pen-to-square" aria-hidden="true" id="edit"></i>`;
        text.appendChild(ul);
        inputs.value = "";

        ul.querySelector("i").addEventListener("click" , remove);

        function remove() {
            ul.remove();
        }

        ul.onclick = function() {
            this.parentNode.remove();
        }
    }
}