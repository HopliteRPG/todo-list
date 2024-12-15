import "./styles.css";
import {appendTodoCreator } from "./todo-creator-html";
import { createProject } from "./project-creator";
import {touchHTML} from "./event-listener-code";
import {todoCreator} from "./todo-creator";

const contentProjectDiv = document.querySelector(".contentProjectDiv");

createProject("Test H1","This is a test to see if P works");
createProject("Bruh H1","lorem ipsum");
createProject("HUH H1","HSJLDAFH;LSDJK");

touchHTML(contentProjectDiv,".projectDiv");

todoCreator(0,"test todo 1");
todoCreator(1,"test todo 2");
// todoCreator(2,"test todo 3");
appendTodoCreator();