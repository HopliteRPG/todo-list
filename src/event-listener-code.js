export{touchHTML}

function touchHTML(dom,targetHTMLClassname){
    
  let targetHTML = dom.querySelectorAll(targetHTMLClassname);
  targetHTML.forEach(element => {
    element.addEventListener("click", event =>{
      let pressedId = event.target.id;
        console.log(pressedId);
    });
  });
}