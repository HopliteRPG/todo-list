export{touchHTML}

function touchHTML(dom,targetHTMLClassname){
    
  let targetHTML = dom.querySelectorAll(targetHTMLClassname);
  targetHTML.forEach(element => {
    element.addEventListener("click", event =>{
      let pressedId = event.currentTarget.id;
        console.log(pressedId);
    });
  });
}