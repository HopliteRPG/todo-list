export{createProject}

function createProject(){
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

    function appendProject(parentDiv,childDiv,h1,p,className){
        parentDiv.appendChild(childDiv);
        childDiv.className.add(className);
        childDiv.appendChild(h1);
        childDiv.appendChild(p);
    }

    const testDiv = createDivSection(contentProjectDiv,divCreate,"testDiv");
    const testH1 = createH1(testDiv.cloneDivCreate,h1Create,"Test H1","testH1");
    const testP = createP(testDiv.cloneDivCreate,pCreate,"this is a test description","testP")
}
