let gridSize = 16*16;
let container = document.querySelector("#container");


for (let i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    div.setAttribute('class', "element");
    container.appendChild(div);
}
