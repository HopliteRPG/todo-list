export{createProject}
let projectIdCount = 0;
let projectArray = [];




function createProject(h1Text,pText){
    //Declaring HTML Variables
    const divCreate = document.createElement("div");
    const h1Create = document.createElement("h1");
    const pCreate = document.createElement("p");
    const contentProjectDiv = document.querySelector(".contentProjectDiv");


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

    function createProjectObject(h1Text,pText){
        const h1TextObj = h1Text;
        const pTextObj = pText;
        const id = undefined;
        return{h1TextObj,pTextObj,id}
    }

    function createID(projectObject,projectDiv){
        if(projectObject.id == undefined){
            projectObject.id = projectIdCount;
            projectDiv.setAttribute("id", projectIdCount)
            projectIdCount++;
            projectArray.push(projectObject);
            console.log(projectArray)
        }
    }

    const tempProject = createProjectObject(h1Text,pText);


    function appendProject(projectObject){
        let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
        createH1(projectDiv.cloneDivCreate,h1Create,tempProject.h1TextObj,"projectH1");
        createP(projectDiv.cloneDivCreate,pCreate,tempProject.pTextObj,"projectP");
        createID(projectObject,projectDiv.cloneDivCreate);
    }

    appendProject(tempProject)





}
