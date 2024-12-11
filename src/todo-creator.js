export {todoCreator}
let todoArray = [];


function todoCreator(){
    function createTodoObject(id){
        let todoObjectId = id;
        let todoContentArray = [];
        return{id,todoContentArray}
    }
    
    function createTodo(todoObject,desc){
        todoObject.todoContentArray.push(desc);
    }   

    function addTodoToArray(todoArray,todoObject){
        todoArray.push(todoObject)
    }
    
    
    function printTodoArray(todoArray){
        console.log(todoArray);
    }
    
    let testTodoObject = createTodoObject(0);
    
    function testAddBlah(todoObject){
        createTodo(todoObject,"Todo1");
        addTodoToArray(todoArray,todoObject)
        printTodoArray(todoArray);
    }

    testAddBlah(testTodoObject)
    
}

