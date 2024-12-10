let padWidth = 16;
let padHeight = 16;
let padSize = padWidth * padHeight;
// Why does this work without the explicit declaration below ??
// const containers = document.querySelector("#containers");

for (let i = 0; i < padSize; i++) {
    let div = document.createElement("div");
    div.setAttribute('class', "element");
    div.setAttribute('id', i+1);
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    let elementClass = event.target.getAttribute("class");
    if (elementClass === "element") {
        event.target.style.background = "#120055";
        setTimeout(() => {
            event.target.style.background = "";
          }, 1900);
    }
},false,);

button.addEventListener('click', () => {
    // pop up and capture new grid size dimensions
    padWidth = parseInt(prompt("Enter pad width"));
    padHeight = parseInt(prompt("Enter pad height"));
    
    // call function to reset/create new pad
    // createPad();
})
