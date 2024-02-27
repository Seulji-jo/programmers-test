function addTodo() {
  // 여기에 기능을 구현하세요.
  const $newTodo = document.getElementById("newTodo");
  const $todoItem = document.createElement("li");
  $todoItem.classList.add("todo");
  $todoItem.textContent = $newTodo.value.trim();
  renderTodos($todoItem);
  $newTodo.value = "";
}

function deleteTodo(index) {
  // 여기에 기능을 구현하세요.
}

function renderTodos($todoItem) {
  // 여기에 기능을 구현하세요.
  const $todoList = document.getElementById("todoList");
  const $deleteBtn = document.createElement("button");
  $deleteBtn.textContent = "delete";
  $todoItem.appendChild($deleteBtn);
  $todoList.appendChild($todoItem);
}
