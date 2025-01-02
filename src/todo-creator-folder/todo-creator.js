export {displayTodoCreator,createTodo,displayArray}
let displayArray = [];
let todoObjectIdCounter = 0;



function displayTodoCreator(){

    function createTodoObject(){
       let id = undefined;
       let todoContentArray = [];
       return{id,todoContentArray};
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
    return{checked,todoDescription}
}

function createTodo(todoObject,desc){
    console.log(todoObject)
    let currentTodoAndDesc = createTodoCheckAndDesc(desc)
   todoObject.todoContentArray.push(currentTodoAndDesc);
}  

