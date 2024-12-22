export {todoCreator}
let displayArray = [];

function todoCreator(){


    function createTodoObject(id){
        let todoObjectId = id;
        let todoContentArray = [];
        return{id,todoContentArray};
    }
    
    function createTodo(todoObject,desc){
        todoObject.todoContentArray.push(desc);
    }   

    function addTodoToDisplayArray(displayArray,todoObject){
        displayArray.push(todoObject);
    }
    
    
    function printDisplayArray(displayArray){
        console.log(displayArray);
    }
    
    
  

    
}

