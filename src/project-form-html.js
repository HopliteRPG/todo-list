
export{appendButtonToProject,appendButtonToTodo}




const contentProjectDiv = document.querySelector(".contentProjectDiv");

const contentTodoDiv = document.querySelector(".contentTodoDiv");


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

function appendButtonToTodo(){
    const divCreate = document.createElement("div");
    const cloneDivCreate =  divCreate.cloneNode(true);

    const buttonCreate = document.createElement("button");
    const cloneButtonCreate =  buttonCreate.cloneNode(true);
    function appendButtonToTodoTest(contentTodoDiv,div,button){
        contentTodoDiv.appendChild(div);
        div.appendChild(button);
        button.innerText = "Add Todo";
        button.setAttribute("class","addTodoButton")

    }
    appendButtonToTodoTest(contentTodoDiv,cloneDivCreate,cloneButtonCreate);
}



