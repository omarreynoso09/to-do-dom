const todoForm = document.querySelector("#todo-form");
const todoInputText = document.querySelector("#todo-input-text");
const todoList = document.querySelector("#todo-list");
const todoListItem = document.querySelector("#todo-list div");
const addTodoSubmit = document.querySelector("#add-todo-submit");
const deleteOneSubmit = document.querySelector("#delete-one-submit");
const editOneSubmit = document.querySelector("#edit-one-submit");
const removeCompletedSubmit = document.querySelector(
  "#remove-completed-submit"
);
const removeAllSubmit = document.querySelector("#remove-all-submit");

// values for the buttons
addTodoSubmit.value = "ADD";
removeCompletedSubmit.value = "REMOVE COMPLETED TASKS";
removeAllSubmit.value = "REMOVE ALL";
deleteOneSubmit.value = "Delete One";
editOneSubmit.value = "Edit One";

//event listeners
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let str = todoInputText.value;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = str;

  newDiv.addEventListener("click", function () {
    if (newDiv.style.textDecoration === "") {
      newDiv.style.textDecoration = "line-through";
    } else {
      newDiv.style.textDecoration = "";
    }
  });

  if (str !== "") {
    todoList.appendChild(newDiv);
  }

  todoForm.reset();
});
let editOne = false;
let deleteOne = false;
editOneSubmit.addEventListener("click", function () {
  editOne = true;
  console.log(editOne);
});
deleteOneSubmit.addEventListener("click", function () {
  deleteOne = true;
  console.log(deleteOne);
});
todoList.addEventListener("click", function (event) {
  if (deleteOne === true) {
    event.target.remove();
    deleteOne = false;
  }
  if (editOne === true) {
    const edit = prompt("edit this shit:");
    event.target.innerHTML = edit;
    event.target.style.textDecoration = "";
    editOne = false;
  }
  console.log("");
});

removeCompletedSubmit.addEventListener("click", function () {
  const todoList = document.querySelectorAll("#todo-list div");
  for (let i = 0; i < todoList.length; i++) {
    const items = todoList[i];
    if (items.style.textDecoration === "line-through") {
      items.remove();
    }
  }
});

removeAllSubmit.addEventListener("click", function () {
  const todoList = document.querySelectorAll("#todo-list div");
  for (let i = 0; i < todoList.length; i++) {
    const items = todoList[i];
    items.remove();
  }
});
