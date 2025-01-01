import { updateTodoPage } from "../todo-creator-folder/todo-creator-html";
import { displayArray } from "../todo-creator-folder/todo-creator";
export { exportOnClickShowTodos };

const contentProjectDiv = document.querySelector(".contentProjectDiv");

function onClickShowTodos(dom,targetHTMLClassname,displayArray){
  let targetHTML = dom.querySelectorAll(targetHTMLClassname);
  targetHTML.forEach(element => {
    element.addEventListener("click", event =>{
      let pressedId = event.currentTarget.id;
      updateTodoPage(displayArray,pressedId);
      console.log("showtodos")
    });
  });
}

function exportOnClickShowTodos(){
    onClickShowTodos(contentProjectDiv,".projectDiv",displayArray)
}
