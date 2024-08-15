function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        <input type="checkbox" class="complete-btn" onclick="toggleComplete(this)">
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function toggleComplete(checkbox) {
    const taskText = checkbox.previousElementSibling;
    if (checkbox.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}
