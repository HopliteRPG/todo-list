export{createProject,projectArray}

let projectIdCount = 0;
let projectArray = [];

function createProject(h1Text,pText){
    function createProjectObject(h1Text,pText){
        const h1TextObj = h1Text;
        const pTextObj = pText;
        const id = undefined;
        return{h1TextObj,pTextObj,id}
    }

    function createID(projectObject){
        if(projectObject.id == undefined){
            projectObject.id = projectIdCount;
            projectIdCount++;
        }
    }

    function addObjectToArray(projectObject){
        createID(projectObject);
        projectArray.push(projectObject);
        console.log(projectArray);
    }

    const tempProject = createProjectObject(h1Text,pText);
    console.log("project created")
    addObjectToArray(tempProject);
}
