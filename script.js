document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const deadline = document.getElementById('deadline').value;
        const priority = document.getElementById('priority').value;
        const categorization=document.getElementById('categorization').value

        if (title && description && deadline && priority&&categorization) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
                <p><strong>Deadline:</strong> ${deadline}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>categorization:</strong> ${categorization}</p>
                <button class="completeBtn">Mark as Completed</button>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            `;
            taskList.appendChild(taskItem);

            taskForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('completeBtn')) {
            const taskItem = e.target.parentElement;
            taskItem.classList.toggle('completed');
        }

        if (e.target.classList.contains('editBtn')) {
            const taskItem = e.target.parentElement;
            editTask(taskItem);
        }

        if (e.target.classList.contains('deleteBtn')) {
            const taskItem = e.target.parentElement;
            taskItem.remove();
        }
    });

    function editTask(taskItem) {
        const title = taskItem.querySelector('h3').textContent;
        const description = taskItem.querySelector('p').textContent;
        const deadline = taskItem.querySelectorAll('p')[1].textContent.split(':')[1].trim();
        const priority = taskItem.querySelectorAll('p')[2].textContent.split(':')[1].trim();

        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        document.getElementById('deadline').value = deadline;
        document.getElementById('priority').value = priority;

        taskItem.remove();
    }
});
