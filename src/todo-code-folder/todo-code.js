export {displayTodoCreator,createTodo,displayArray}
let displayArray = [];


function displayTodoCreator(){


   function createTodoObject(){
       let id = undefined;
       let todoContentArray = [];
       return{id,todoContentArray};
   }
  




   function createID(todoObject){
       if(todoObject.id == undefined){
           todoObject.id = projectIdCount;
           todoObject++;
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
   todoObject.todoContentArray.push(desc);
}  

