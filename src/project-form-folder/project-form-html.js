
export{appendButtonToProject}




const contentProjectDiv = document.querySelector(".contentProjectDiv");



function appendButtonToProject(){
    const divCreate = document.createElement("div");
    const cloneDivCreate =  divCreate.cloneNode(true);

    const buttonCreate = document.createElement("button");
    const cloneButtonCreate =  buttonCreate.cloneNode(true);
    function appendButtonToProjectTest(contentProjectDiv,div,button){
        contentProjectDiv.appendChild(div);
        div.appendChild(button);
        button.innerText = "Add Project";
        button.setAttribute("class","addProjectButton")

    }
    appendButtonToProjectTest(contentProjectDiv,cloneDivCreate,cloneButtonCreate);
}





