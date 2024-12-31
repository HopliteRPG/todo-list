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
   addTodoToDisplayArray(displayArray,tempDisplayTodo)
}

function createTodo(todoObject,desc){
    console.log(todoObject)
   todoObject.todoContentArray.push(desc);
}  

