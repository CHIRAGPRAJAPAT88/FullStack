let taskList = document.getElementById('list');
let addButton = document.getElementById('addButton');
let taskInput = document.getElementById('listInput');

// addButton.addEventListener('click', function() {
//     let listValue = listInput.value.trim();
//     if (listValue) {
//         let li = document.createElement('li');
//         li.textContent = listValue;
//         list.appendChild(li);
//         listInput.value = '';
//     }
// });

function addList() {
    let listValue = taskInput.value.trim();
    if (listValue) {
        let li = document.createElement('li');
        li.textContent = listValue;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

addButton.addEventListener('click', addList);   





