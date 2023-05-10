let todos = [];

function addTodo() {
  const name = document.getElementById("name").value;
  const team = document.getElementById("team").value;
  const mobile = document.getElementById("mobile").value;
  if (name === "" || team === "" || mobile === "") {
    alert("Please fill out all fields");
    return;
  }
  const todo = {
    name,
    team,
    mobile,
  };
  todos.push(todo);
  renderTodos();
  document.getElementById("name").value = "";
  document.getElementById("team").value = "";
  document.getElementById("mobile").value = "";
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function updateTodo() {
  const name = document.getElementById("name").value;
  const team = document.getElementById("team").value;
  const mobile = document.getElementById("mobile").value;
  if (name === "" || team === "" || mobile === "") {
    alert("Please fill out all fields");
    return;
  }
  const index = document.getElementById("index").value;
  const todo = {
    name,
    team,
    mobile,
  };
  todos[index] = todo;
  renderTodos();
  document.getElementById("name").value = "";
  document.getElementById("team").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("index").value = "";
  document.getElementById("addBtn").style.display = "block";
  document.getElementById("updateBtn").style.display = "none";
}

function editTodoForm(index) {
  const todo = todos[index];
  document.getElementById("name").value = todo.name;
  document.getElementById("teams").value = todo.team;
  document.getElementById("mobile").value = todo.mobile;
  document.getElementById("index").value = index;
  document.getElementById("addBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "block";
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  let todoItems = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    todoItems += `
      <li>
        <p><b>Name:</b> ${todo.name}</p>
        <p><b>team:</b> ${todo.team}</p>
        <p><b>Mobile:</b> ${todo.mobile}</p>
        <button type="button" onclick="editTodoForm(${i})">Edit</button>
        <button type="button" onclick="deleteTodo(${i})">Delete</button>
      </li>
    `;
  }
  todoList.innerHTML = todoItems;
}
function toggleDone(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  let todoItems = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const doneClass = todo.done ? "done" : "";
    const doneText = todo.done ? "Undone" : "Done";
    todoItems += `
      <li class="${doneClass}">
        <p><b>Name:</b> ${todo.name}</p>
        <p><b>team:</b> ${todo.team}</p>
        <p><b>Mobile:</b> ${todo.mobile}</p>
        <button type="button" onclick="editTodoForm(${i})">Edit</button>
        <button type="button" onclick="deleteTodo(${i})">Delete</button>
        <button type="button" onclick="toggleDone(${i})">${doneText}</button>
      </li>
    `;
  }
  todoList.innerHTML = todoItems;
}


renderTodos();
