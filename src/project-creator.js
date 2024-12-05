export{createProject}

function createProject(h1Text,pText){
    //Declaring HTML Variables
    const divCreate = document.createElement("div");
    const h1Create = document.createElement("h1");
    const pCreate = document.createElement("p");
    const contentProjectDiv = document.querySelector(".contentProjectDiv");
    let projectArray = []


    //Functions
    function createDivSection(parentDiv,div,className){
        let cloneDivCreate = div.cloneNode(true);
        cloneDivCreate.classList.add(className)
        parentDiv.appendChild(cloneDivCreate);
        return{cloneDivCreate}
    }

    function createP(div,p,text,className){
        let clonePCreate = p.cloneNode(true);
        clonePCreate.innerText = text;
        clonePCreate.classList.add(className);
        div.appendChild(clonePCreate);
    }

    function createH1(div,h1,text,className){
        let cloneH1Create = h1.cloneNode(true);
        cloneH1Create.innerText = text;
        cloneH1Create.classList.add(className);
        div.appendChild(cloneH1Create);
    }

    // function appendProject(parentDiv,childDiv,h1,p,className){
    //     let cloneChildDiv = childDiv.cloneNode(true);
    //     cloneChildDiv.classList.add(className);
    //     parentDiv.appendChild(cloneChildDiv);
    //     cloneChildDiv.appendChild(h1);
    //     cloneChildDiv.appendChild(p);
    // }

    let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
    let projectH1 = createH1(projectDiv.cloneDivCreate,h1Create,h1Text,"projectH1");
    let projectP = createP(projectDiv.cloneDivCreate,pCreate,pText,"projectP");

    // appendProject(contentProjectDiv,testDiv.cloneDivCreate,testH1,testP,"projectDiv");
}
