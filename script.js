const todoArray = [];
const todoTask = document.querySelector("#todoTask");
const todoList = document.querySelector("#todoList");
const todoListH2 = document.querySelector("#todoListH2");
const error = document.querySelector("#error");

function todoUpdate(event) {
  event.preventDefault();
  if (todoTask.value.trim() === "") {
    error.textContent = "Please enter a task!";
    error.style.color = "red";
    return;
  }
  error.textContent = "";
  todoArray.push(todoTask.value);
  showTodo();
  todoTask.value = "";
}

function showTodo() {
  todoList.innerHTML = "";
  if (todoArray.length > 0) {
    todoListH2.style.display = "block";
  } else {
    todoListH2.style.display = "none";
  }
  for (let i = 0; i < todoArray.length; i++) {
    todoList.innerHTML += `
    <li><span>${todoArray[i]}</span><button class="delete-btn" onclick="deleteTodo(${i})">Delete</button></li>`;
  }
}
showTodo();

function deleteTodo(index) {
  todoArray.splice(index, 1);
  showTodo();
}
