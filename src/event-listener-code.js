export{touchHTML,currentProjectId}
let currentProjectId = 0;
function touchHTML(dom,targetHTMLClassname){
    
  let targetHTML = dom.querySelectorAll(targetHTMLClassname);
  targetHTML.forEach(element => {
    element.addEventListener("click", event =>{
      let pressedId = event.currentTarget.id;
      currentProjectId = pressedId
        console.log(pressedId);
        console.log(currentProjectId);
    });
  });
}