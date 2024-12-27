    import { displayArray } from "./todo-code";
    import { appendButtonToTodo } from "../project-form-folder/project-form-html";
    export {updateTodoPage}
   //Declaring HTML Variables
    const divCreate = document.createElement("div");
    const h1Create = document.createElement("h1");
    const pCreate = document.createElement("p");
    const contentTodoDiv = document.querySelector(".contentTodoDiv");
    const todoCheckbox = document.createElement("INPUT");
    todoCheckbox.setAttribute("type", "checkbox");

    //Functions
    function createDivSection(parentDiv,div,className){
        let cloneDivCreate = div.cloneNode(true);
        cloneDivCreate.classList.add(className)
        parentDiv.appendChild(cloneDivCreate);
        return{cloneDivCreate};
    }

    function createP(div,p,text,className){
        let clonePCreate = p.cloneNode(true);
        clonePCreate.innerText = text;
        clonePCreate.classList.add(className);
        div.appendChild(clonePCreate);
    }

    function createTodoCheckbox(div,checkbox,className){
        let cloneTodoCheckbox = checkbox.cloneNode(true);
        cloneTodoCheckbox.classList.add(className);
        div.appendChild(cloneTodoCheckbox);
        return{cloneTodoCheckbox};
    }

    function appendTodo(todoText){
            console.log(todoText)
            let todoDiv = createDivSection(contentTodoDiv,divCreate,"todoDiv");
            createTodoCheckbox(todoDiv.cloneDivCreate,todoCheckbox,"todoCheckbox")
            createP(todoDiv.cloneDivCreate,pCreate,todoText,"todoP");
    }

    function updateTodoPage(displayArray,projectId){
        appendButtonToTodo();
       
        displayArray[projectId].todoContentArray.forEach(element => {
        appendTodo(element)
        });
    }