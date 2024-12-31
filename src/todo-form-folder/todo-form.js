import { createTodo } from "../todo-creator-folder/todo-creator";
import { displayTodoCreator } from "../todo-creator-folder/todo-creator";
import { touchHTML } from "../event-listener-code";
import { projectArray } from "../project-creator-folder/project-creator";
import { currentProjectId } from "../event-listener-code";
import { updateTodoPage } from "../todo-creator-folder/todo-creator-html";
import { displayArray } from "../todo-creator-folder/todo-creator";

export {todoFormLogic}

function todoFormLogic(){
const contentProjectDiv = document.querySelector(".contentProjectDiv");
const contentTodoDiv = document.querySelector(".contentTodoDiv");
//Dialong and Modal Code 
const dialog = document.querySelector(".todoDialog");
const showBtn = document.querySelector(".addTodoButton");
const closeBtn = document.querySelector(".todo-close-btn");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".todoForm");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});



form.addEventListener("submit",(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  displayTodoCreator();
  createTodo(displayArray[currentProjectId],formData.get("todo_h1"))
  
  updateTodoPage(displayArray,currentProjectId)

  form.reset();
  dialog.close();
  touchHTML(contentProjectDiv,".projectDiv");
//   todoFormLogic();
});




closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
}

