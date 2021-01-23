const container = document.querySelector("#container");
const colorPicker = document.getElementById("colorpicker");
let selectedColor = "#000000";
let gridValue = 16;
for(let i=0; i<gridValue;i++)
   {
    for(let j=0; j<gridValue;j++)
    {
    const div = document.createElement("div");
    div.innerHTML = "&nbsp;";
    div.classList.add("child-div");
    div.style.height = `${500/gridValue}px`;
    div.style.width = `${500/gridValue}px`;
    container.appendChild(div);

    }
   }



function rebuildGrid(gridValue)
{   

    console.log(gridValue);
    const cont = document.getElementById("container");
    const mainContainer = document.getElementById("main");
    const contain = document.createElement("div");
    contain.id = "container";
   mainContainer.replaceChild(contain,cont);
    for(let i=0;i< gridValue;i++)
   {
    for(let j=0;j< gridValue;j++)
    {
    const div = document.createElement("div");
    div.innerHTML = "&nbsp;";
    div.classList.add("child-div");
    div.style.height = `${500/gridValue}px`;
    div.style.width = `${500/gridValue}px`;
    contain.appendChild(div);


    }
   }
   const divs = document.querySelectorAll(".child-div");
divs.forEach(div=> div.addEventListener("mouseover",hover));
}

function hover(e)
{  
    e.target.classList.add("hover");
}

function clearSketch()
{
    divs.forEach(div=>div.classList.remove("hover"));
    

}



function resize()
{
    const newGridDimensions = parseInt(prompt("Enter the new dimensions (For a 4*4 grid enter 4)"));
    rebuildGrid(newGridDimensions);
}

function getColor(e)
{ 
  divs.forEach(div=>div.classList.remove("hover"));
  selectedColor =   e.target.value;
  const styleSheet = document.styleSheets[0];
  styleSheet.cssRules[2].style.backgroundColor = selectedColor;
}

const divs = document.querySelectorAll(".child-div");
divs.forEach(div=> div.addEventListener("mouseover",hover));

const button = document.querySelector("#btn");
button.addEventListener("click",clearSketch);

const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click",resize);


colorPicker.addEventListener("change",getColor);






