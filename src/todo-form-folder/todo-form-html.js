export{appendButtonToTodo}

const contentTodoDiv = document.querySelector(".contentTodoDiv");

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