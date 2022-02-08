const todos = [];
let id = 0;

function addTodo(todo) {
  const todoObject = {
    id: id,
    title: todo,
    completed: false
  };

  todos.push(todoObject);
  id++;
  updateTodoList();
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
  const todoInput = document.getElementById("todo");
  const todoValue = todoInput.value;

  if (!todoValue) {
    alert("Please enter a todo task.");
  } else {
    addTodo(todoValue);
  }
});

function deleteTodo(todo) {
  todos.splice(todo.id, 1);
  updateTodoList();
}

function completeTodo(todo) {
  todo.completed = true;
  updateTodoList();
}

function updateTodoList() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = "";

  for (let todo of todos) {
    const item = document.createElement("li");
    item.innerHTML = todo.title;
    if (todo.completed) {
      item.style.textDecoration = "line-through";
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTodo(todo);
    });
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Mark as Complete";
    completeButton.addEventListener("click", function () {
      completeTodo(todo);
    });
    item.appendChild(deleteButton);
    item.appendChild(completeButton);
    listElement.appendChild(item);
  }
}
