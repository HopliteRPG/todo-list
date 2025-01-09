import "./styles.css";
import { createProject } from "./project-creator-folder/project-creator";
import {touchHTML} from "./event-listener-code/get-project-id";
import { projectArray } from "./project-creator-folder/project-creator";
import { appendProject } from "./project-creator-folder/project-creator-html";
import { projectFormLogic } from "./project-form-folder/project-form";
import { updateTodoPage } from "./todo-creator-folder/todo-creator-html";
import {displayTodoCreator,createTodo,displayArray} from "./todo-creator-folder/todo-creator";
import { todoFormLogic } from "./todo-form-folder/todo-form";
import { appendButtonToProject } from "./project-form-folder/project-form-html";
import { appendButtonToTodo } from "./todo-form-folder/todo-form-html";
import { exportOnClickShowTodos } from "./event-listener-code/show-current-todo-list";
import { exportAutomaticallyCheckAllBoxes } from "./event-listener-code/checkbox-code";

const contentProjectDiv = document.querySelector(".contentProjectDiv");


//Creating Project button
    appendButtonToProject();

//Creating Project Test
createProject("Test H1","This is a test to see if P works");
createProject("Bruh H1","lorem ipsum");
// createProject("HUH H1","HSJLDAFH;LSDJK");
// createProject("lol H1","lol lol lol");

appendProject(projectArray);

//Creating todo button
appendButtonToTodo()

//Creating Todo Test

displayTodoCreator();
createTodo(displayArray[0],"test12");
createTodo(displayArray[0],"test13");
createTodo(displayArray[0],"kys");
displayTodoCreator();
createTodo(displayArray[1],"sjdflkasdfj");
// console.log(displayArray)
updateTodoPage(displayArray,0)


touchHTML(contentProjectDiv,".projectDiv");
projectFormLogic();
todoFormLogic();

exportOnClickShowTodos();

exportCheckboxPress();