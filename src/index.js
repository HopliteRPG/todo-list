import "./styles.css";
import { createProject } from "./project-creator";
import {touchHTML} from "./event-listener-code";
import { projectArray } from "./project-creator";
import { appendProject } from "./project-creator-html";
import { projectFormLogic } from "./project-form";

const contentProjectDiv = document.querySelector(".contentProjectDiv");


createProject("Test H1","This is a test to see if P works");
createProject("Bruh H1","lorem ipsum");
createProject("HUH H1","HSJLDAFH;LSDJK");
createProject("lol H1","lol lol lol");


appendProject(projectArray)

touchHTML(contentProjectDiv,".projectDiv");
projectFormLogic();