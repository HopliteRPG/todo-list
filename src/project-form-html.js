export{appendButtonToProject}

const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");
const contentProjectDiv = document.querySelector(".contentProjectDiv");

function appendButtonToProject(){
    function appendButtonToProjectTest(contentProjectDiv,div,button){
        contentProjectDiv.appendChild(div);
        div.appendChild(button);
        button.innerText = "Add Project"
    }
    appendButtonToProjectTest(contentProjectDiv,divCreate,buttonCreate);

}