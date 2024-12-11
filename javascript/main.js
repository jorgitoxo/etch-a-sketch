// Why does this work without the explicit declaration below ??
// const container = document.querySelector("#container");
// let contains = document.getElementById("container");

function createPad(padSize) {
    for (let i = 0; i < padSize; i++) {
        let div = document.createElement("div");
        div.setAttribute('class', "element");
        div.setAttribute('id', i+1);
        container.appendChild(div);
    }
}

function resetPad(padSize) {
    // Clear pad
    document.getElementById("container").innerHTML = "";

    // Create new pad
    createPad(padSize);
}


function sketch () {
    let padWidth = 16;
    let padHeight = 16;
    let padSize = padWidth * padHeight;
    createPad(padSize);

    button.addEventListener('click', () => {
        // pop up and capture new grid size dimensions
        padWidth = parseInt(prompt("Enter pad width"));
        padHeight = parseInt(prompt("Enter pad height"));
        padSize = padWidth * padHeight;
        
        // call function to reset pad
        resetPad(padSize);
    });

    container.addEventListener("mouseover", (event) => {
        let elementClass = event.target.getAttribute("class");
        if (elementClass === "element") {
            event.target.style.background = "#120055";
            setTimeout(() => {
                event.target.style.background = "";
              }, 1900);
        }
    },false,);
}

sketch();
