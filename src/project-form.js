import { createProject } from "./project-creator";
export {projectFormLogic}

function projectFormLogic(){
//Dialong and Modal Code 
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector(".addProjectButton");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});



form.addEventListener("submit",(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  createProject(formData.get("project_h1"),formData.get("project_p"));
  form.reset();
  dialog.close();
});




closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
}

