const todoList = document.querySelector("#todo-list")
const todoForm = document.querySelector("#todo-form")

// local storage send and receive data
const getData = () => JSON.parse(localStorage.getItem("todos"));
const setDate = (todos) => localStorage.setItem("todos", JSON.stringify(todos));

let todos = getData() || [];
console.log(todos)

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = document.querySelector("#todo");
    if(task){
        const newTodo = {
            id: Date.now(),
            task: task.value,
            completed: false
        }
        todos.push(newTodo)
        setDate(todos)
       renderTodos(todos)
    }
})

// delete event listener and filter the specfic id

function renderTodos(todos){
    todoList.innerHTML="" //refresh
    todos && todos.forEach((t) => render(t))
}

function render(todo){
    const taskDiv = document.createElement("div")
    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("id", `task-${todo.id}`)
    checkBox.setAttribute("class","me-2")

    const task = document.createElement("label")
    task.setAttribute("for", `task-${todo.id}`)
    task.innerText = todo.task

    // Add delete btn

    taskDiv.append(checkBox, task);
    todoList.appendChild(taskDiv);
}

renderTodos(todos);