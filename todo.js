let todoItems = [];

function addTodo() {
  let input = document.getElementById("input-list");
  let items_wrapper = document.getElementById("items");
  let p = createItemElement(input.value);
  items_wrapper.appendChild(p);

  let new_item = document.getElementById(items.length + input.value);
  input.value = "";
  new_item.setAttribute("onclick", "removeItem(this)");
}

function removeItem(elm) {
  elm.remove();
}

function createItemElement(name) {
  let element = document.createElement("p");
  todoItems.push(element);
  element.classList.add("item");
  element.innerHTML = name;
  element.id = items.length + name;
  return element;
}

// function toggleDone(key) {
//   const index = todoItems.findIndex(item => item.id === Number(key));
//   todoItems[index].checked = !todoItems[index].checked;
//
//   const item = document.querySelector(`[data-key='${key}']`);
//   if (todoItems[index].checked) {
//     item.classList.add("done");
//   } else {
//     item.classList.remove("done");
//   }
// }

// function deleteTodo(key) {
//   todoItems = todoItems.filter(item => item.id !== Number(key));
//   const item = document.querySelector(`[data-key='${key}']`);
//   item.remove();
//
//   const list = document.querySelector(".js-todo-list");
//   if (todoItems.length === 0) list.innerHTML = "";
// }
//
// const list = document.querySelector(".js-todo-list");
// list.addEventListener("click", event => {
//   if (event.target.classList.contains("js-tick")) {
//     const itemKey = event.target.parentElement.dataset.key;
//     toggleDone(itemKey);
//   }
//
//   if (event.target.classList.contains("js-delete-todo")) {
//     const itemKey = event.target.parentElement.dataset.key;
//     deleteTodo(itemKey);
//   }
// });
