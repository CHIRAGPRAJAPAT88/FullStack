document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return; // Don't add empty tasks
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const editBtn = document.createElement('button1');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>';
    editBtn.className = 'edit';
    editBtn.addEventListener('click', () => editTask(li, taskText));

    const deleteBtn = document.createElement('button1');
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = ''; // Clear the input
}

function editTask(li, oldTask) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = oldTask; // Set input to the current task text

    li.remove(); // Remove the current task

    // Focus on the input for editing
    taskInput.focus();
}
