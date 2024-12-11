import "./styles.css";
import { createProject } from "./project-creator";
import {touchHTML} from "./event-listener-code";

const contentProjectDiv = document.querySelector(".contentProjectDiv");

createProject("Test H1","This is a test to see if P works");
createProject("Bruh H1","lorem ipsum");
createProject("HUH H1","HSJLDAFH;LSDJK");

touchHTML(contentProjectDiv,".projectDiv");