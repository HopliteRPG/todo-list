import { createProject } from "../project-creator-folder/project-creator";
import { appendProject } from "../project-creator-folder/project-creator-html";
import { projectArray } from "../project-creator-folder/project-creator";
import { touchHTML } from "../event-listener-code";
export {projectFormLogic}

function projectFormLogic(){
const contentProjectDiv = document.querySelector(".contentProjectDiv");
//Dialong and Modal Code 
const dialog = document.querySelector(".projectDialog");
const showBtn = document.querySelector(".addProjectButton");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".projectForm");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});



form.addEventListener("submit",(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  createProject(formData.get("project_h1"),formData.get("project_p"));
  form.reset();
  dialog.close();
  appendProject(projectArray);
  touchHTML(contentProjectDiv,".projectDiv");
});




closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
}


