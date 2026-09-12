const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];
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
  const todoArrayStr = JSON.stringify(todoArray);
  localStorage.setItem("todoArray", todoArrayStr);
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
    <li><span>${todoArray[i]}</span><!-- From Uiverse.io by aaronross1 --> 
      <button class="delete-button"  onclick="deleteTodo(${i})">
        <svg class="delete-svgIcon" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
      </button>
    </li>`;
    // <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
  }
}
showTodo();

function deleteTodo(index) {
  todoArray.splice(index, 1);
  const todoArrayStr = JSON.stringify(todoArray);
  localStorage.setItem("todoArray", todoArrayStr);
  showTodo();
}
