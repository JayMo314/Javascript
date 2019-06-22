// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const taskFilter = document.querySelector('#filter');


// Load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click', clearTasks);

    taskFilter.addEventListener('keyup', filterTasks);
}


// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }


    //Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));


    //Create new link element 
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';


    e.preventDefault();
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks() {

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';    
        }
    })
}