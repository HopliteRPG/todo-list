export{exportCheckboxPress,exportCheckboxLogic}
import { displayArray } from "../todo-creator-folder/todo-creator";
import { currentProjectId } from "./get-project-id";

const contentTodoDiv = document.querySelector(".contentTodoDiv"); 
const childContentTodoDiv = contentTodoDiv.childNodes;
// const todoDiv = document.querySelectorAll(".todoDiv");


//The plan is that if the checkbox is pressed a function called updateCheckbox is run and the boolean in each object is set to either true or false

// function automaticallyCheckAllBoxes(contentTodoDiv){
// contentTodoDiv.forEach(element => {
// const checkBox = element.querySelector(".todoCheckbox");
// checkBox.checked = true;
//    console.log(checkBox)
// });
// }




function checkboxPress(){
    childContentTodoDiv.forEach(element => {
        let checkbox = element.querySelector(".todoCheckbox");

        let parentDivOfCheckbox = checkbox.parentNode;


        checkbox.addEventListener("change",function(){
            let idOfParentDivOfCheckbox = parentDivOfCheckbox.id;
            console.log(idOfParentDivOfCheckbox)
            console.log(displayArray[currentProjectId].todoContentArray[idOfParentDivOfCheckbox])

            if(checkbox.checked == true){
                displayArray[currentProjectId].todoContentArray[idOfParentDivOfCheckbox].checked = true
                console.log(displayArray[currentProjectId].todoContentArray[idOfParentDivOfCheckbox])

              }
            else if(checkbox.checked == false){
                displayArray[currentProjectId].todoContentArray[idOfParentDivOfCheckbox].checked = false
                console.log(displayArray[currentProjectId].todoContentArray[idOfParentDivOfCheckbox])
              }
            })
    });



}

function checkboxLogic(){

    displayArray[currentProjectId].todoContentArray.forEach(element => {
        if(element.checked == true){
            childContentTodoDiv[element.subTodoId].childNodes[0].checked = true;
        }
        else if(element.checked == false){
            childContentTodoDiv[element.subTodoId].childNodes[0].checked = false;
        }
    });
}

function exportCheckboxPress(){
    checkboxPress()
}

function exportCheckboxLogic(){
    if(childContentTodoDiv.length !== 0){
        checkboxLogic()
    }
    else{
        return
    }
}