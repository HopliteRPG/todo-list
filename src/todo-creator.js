export {todoCreator,displayArray}
let displayArray = [];

function todoCreator(id,desc){
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
    
    const testTodoObject = createTodoObject(id);

    createTodo(testTodoObject,desc);
    
    addTodoToDisplayArray(displayArray,testTodoObject);
    printDisplayArray(displayArray)




    
}

