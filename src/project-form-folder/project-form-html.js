
export{appendButtonToProject}




const buttonContentProjectDiv = document.querySelector(".buttonContentProjectDiv");



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
    appendButtonToProjectTest(buttonContentProjectDiv,cloneDivCreate,cloneButtonCreate);
}





