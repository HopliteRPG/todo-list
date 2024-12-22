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

    function appendTodo(todoObject){
        todoObject.todoContentArray.forEach(element => {
            let todoDiv = createDivSection(contentTodoDiv,divCreate,"todoDiv");
            let todoDiv2 = createDivSection(todoDiv.cloneDivCreate,divCreate,"todoDiv2");
            createTodoCheckbox(todoDiv2.cloneDivCreate,todoCheckbox,"todoCheckbox")
            createP(todoDiv2.cloneDivCreate,pCreate,element,"todoP");
        });
    }

    function updateTodoPage(todoObject){
        createTodo(todoObject,"Todo1");
        createTodo(todoObject,"Todo2");
        addTodoToDisplayArray(displayArray,todoObject);
        appendTodo(testTodoObject)
        printDisplayArray(displayArray);
    }