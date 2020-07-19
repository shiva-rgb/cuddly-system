//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//Fucntions

function addTodo(Event){
    // prevent form from submitting
    event.preventDefault();
    //Todo Div creation
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Tick mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Deleted mark button

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class= "fas fa-trash"></li>';
    trashButton.classList.add("delete-btn");
    todoDiv.appendChild(trashButton);

    //Append list
    todoList.appendChild(todoDiv);

    // Clear list
    todoInput.value="";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete todo
    if(item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
    //ANimation
    todo.addEventListener('transitionend', function(){
    todo.remove();
    });

        
    }

    //Check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display= "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none"
                }
                break;
                case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none"
                }
                break;
        }
    }); 
}

