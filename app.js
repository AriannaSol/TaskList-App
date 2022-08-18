const taskInput = document.querySelector('#new-task-input');
const taskList = document.querySelector('#tasks');
const form =document.querySelector('#new-task-form')



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskInput.value === "") {
        alert('inserisci task');
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task';
    taskList.appendChild(taskContainer);

    const div = document.createElement('div');
    div.className = 'content';
    taskContainer.appendChild(div);

    const newTask = document.createElement('input');
    newTask.className = 'text';
    newTask.value = taskInput.value;
    newTask.readOnly = true;
    div.appendChild(newTask);

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'actions';
    taskContainer.appendChild(actionsContainer);

    const elimina = document.createElement('button');
    elimina.className ='delete';
    elimina.innerText = 'Delete';
    actionsContainer.appendChild(elimina);

    const modifica = document.createElement('button');
    modifica.className ='edit';
    modifica.innerText = 'Edit';
    actionsContainer.appendChild(modifica);

    taskInput.value = "";


    modifica.addEventListener('click', (e) => {
        e.preventDefault();

        if (modifica.innerHTML == "Edit") {
            modifica.innerHTML = "Save";
            newTask.removeAttribute("readonly");
            newTask.focus;
        } else if (modifica.innerHTML == "Save") {
            modifica.innerHTML = "Edit";
            newTask.setAttribute("readonly", "readonly");
        }
    });

    elimina.addEventListener('click', (e) => {
        e.preventDefault();
        taskList.removeChild(taskContainer);
    
    });

});