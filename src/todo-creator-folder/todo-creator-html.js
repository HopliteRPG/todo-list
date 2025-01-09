    import { displayArray } from "./todo-creator";
    import { exportCheckboxLogic,exportCheckboxPress} from "../event-listener-code/checkbox-code";
    export {updateTodoPage}
   //Declaring HTML Variables
    const divCreate = document.createElement("div");
    const h1Create = document.createElement("h1");
    const pCreate = document.createElement("p");
    const contentTodoDiv = document.querySelector(".contentTodoDiv");
    const todoCheckbox = document.createElement("INPUT");
    todoCheckbox.setAttribute("type", "checkbox");

    //Functions
    function createDivSection(parentDiv,div,className,id){
        let cloneDivCreate = div.cloneNode(true);
        cloneDivCreate.classList.add(className)
        parentDiv.appendChild(cloneDivCreate);
        cloneDivCreate.setAttribute("id",id)
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

    function appendTodo(todoText,id){
            console.log(todoText)
            let todoDiv = createDivSection(contentTodoDiv,divCreate,"todoDiv",id);
            createTodoCheckbox(todoDiv.cloneDivCreate,todoCheckbox,"todoCheckbox")
            createP(todoDiv.cloneDivCreate,pCreate,todoText,"todoP");
    }



    function clearProjectDisplay(){
        contentTodoDiv.innerText = "";
    }

    function updateTodoPage(displayArray,projectId){
        clearProjectDisplay()
       
        displayArray[projectId].todoContentArray.forEach(element => {
        appendTodo(element.todoDescription,element.subTodoId)
        });
        exportCheckboxLogic();
        exportCheckboxPress();
    }