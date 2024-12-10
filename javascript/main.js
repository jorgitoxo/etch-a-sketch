let gridSize = 16*16;
// const containers = document.querySelector("#containers");

for (let i = 0; i < gridSize; i++) {
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
