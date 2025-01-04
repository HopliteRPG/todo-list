export {displayTodoCreator,createTodo,displayArray}
let displayArray = [];
let todoObjectIdCounter = 0;



function displayTodoCreator(){

    function createTodoObject(){
       let id = undefined;
       let todoContentArray = [];
       let subTodoIdCounter = 0;
       return{id,todoContentArray,subTodoIdCounter};
   }

   function createID(todoObject){
       if(todoObject.id == undefined){
           todoObject.id = todoObjectIdCounter;
           todoObjectIdCounter++;   
       }
   }

   function addTodoToDisplayArray(displayArray,todoObject){
       displayArray.push(todoObject);
   }
  
   function printDisplayArray(displayArray){
       console.log(displayArray);
   }
  
   const tempDisplayTodo = createTodoObject();
   createID(tempDisplayTodo);
   addTodoToDisplayArray(displayArray,tempDisplayTodo);
   printDisplayArray(displayArray)
}

function createTodoCheckAndDesc(description){
    let checked = false;
    let todoDescription = description;
    let subTodoId = undefined;
    return{checked,todoDescription,subTodoId}
}

function createTodo(todoObject,desc){
    console.log(todoObject)
    let currentTodoAndDesc = createTodoCheckAndDesc(desc);
   todoObject.todoContentArray.push(currentTodoAndDesc);

   createSubTodoId(todoObject)

}  


//Subtodo Stuff
function createSubTodoId(todoObject){
    todoObject.todoContentArray.forEach(element => {
        // console.log("bruh")
        // console.log(element)
        if(element.subTodoId == undefined){
            element.subTodoId = todoObject.subTodoIdCounter;
            todoObject.subTodoIdCounter++;
        }
    });
}

