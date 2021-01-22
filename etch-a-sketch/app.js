const container = document.querySelector("#container");
let gridValue = 16;
buildGrid(gridValue);

function buildGrid(gridValue)
{
    for(let i=0; i=gridValue;i++)
   {
    for(let j=0; j=gridValue;j++)
    {
    const div = document.createElement("div");
    div.innerHTML = "&nbsp;";
    div.classList.add("child-div");
    div.style.height = `${500/gridValue}px`;
    div.style.width = `${500/gridValue}px`;
    container.appendChild(div);

    }
   }

}
/*
function rebuildGrid(gridValue)
{   

    console.log(gridValue);
    const cont = document.getElementById("container");
    const body = document.body.removeChild(cont);
    const container = document.createElement("div");
    container.id = "container";
    for(let i=0; gridValue;i++)
   {
    for(let j=0; gridValue;j++)
    {
    const div = document.createElement("div");
    div.innerHTML = "&nbsp;";
    div.classList.add("child-div");
    div.style.height = `${500/gridValue}px`;
    div.style.width = `${500/gridValue}px`;
    container.appendChild(div);
    body.appendChild(container);

    }
   }
}*/

function hover(e)
{  
    e.target.classList.add("hover");
}

function clearSketch()
{
    divs.forEach(div=>div.classList.remove("hover"));
    const newGridDimensions = parseInt(prompt("Enter the new dimensions (For a 2*2 grid enter 2)"));
    rebuildGrid(newGridDimensions);

}



const divs = document.querySelectorAll(".child-div");
divs.forEach(div=> div.addEventListener("mouseover",hover));

const button = document.querySelector("#btn");
button.addEventListener("click",clearSketch);






