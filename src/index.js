import "./styles.css";
import { createProject } from "./project-creator-folder/project-creator";
import {touchHTML} from "./event-listener-code";
import { projectArray } from "./project-creator-folder/project-creator";
import { appendProject } from "./project-creator-folder/project-creator-html";
import { projectFormLogic } from "./project-form-folder/project-form";
import { updateTodoPage } from "./todo-code-folder/todo-code-html";
import {displayTodoCreator,createTodo,displayArray} from "./todo-code-folder/todo-code"

const contentProjectDiv = document.querySelector(".contentProjectDiv");

//Creating Project Test
createProject("Test H1","This is a test to see if P works");
createProject("Bruh H1","lorem ipsum");
createProject("HUH H1","HSJLDAFH;LSDJK");
createProject("lol H1","lol lol lol");

appendProject(projectArray);

//Creating Todo Test

displayTodoCreator();
createTodo(displayArray[0],"test12");
createTodo(displayArray[0],"sjdflkasdfj");
// console.log(displayArray)
updateTodoPage(displayArray,0)


touchHTML(contentProjectDiv,".projectDiv");
projectFormLogic();