// Why does this work without the explicit declaration below ??
// const container = document.querySelector("#container");
// let contains = document.getElementById("container");

function createPad(padSize) {
    // try to create a div per row, then append the div row
    // this way we should end up with a controllable number of rows
    for (let i = 0; i < padSize; i++) {
        let div = document.createElement("div");
        div.setAttribute('class', "element");
        div.setAttribute('id', i+1);
        container.appendChild(div);
    }
}

function createPadv2(padWidth, padHeight) {
    // try to create a div per row, then append the div row
    // this way we should end up with a controllable number of rows
    for (let i = 0; i < padHeight; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', "row");
        row.setAttribute('id', i+1);
        for (let j = 0; j < padWidth; j++) {
            let item = document.createElement("div");
            item.setAttribute('class', "element");
            item.setAttribute('id', j+1);
            row.appendChild(item);
        }
        container.appendChild(row);
    }
}

function resetPad(padSize) {
    // Clear pad
    // document.getElementById("container").innerHTML = "";
    // document.getElementById("container").textContent = "";
    document.getElementById("container").replaceChildren();

    // Create new pad
    createPad(padSize);
}

function resetPadv2(padWidth, padHeight) {
    // Clear pad
    // document.getElementById("container").innerHTML = "";
    // document.getElementById("container").textContent = "";
    document.getElementById("container").replaceChildren();

    // Create new pad
    createPadv2(padWidth, padHeight);
}

function sketch () {
    let padWidth = 16;
    let padHeight = 16;
    // let padSize = padWidth * padHeight;
    createPadv2(padWidth, padHeight);

    button.addEventListener('click', () => {
        // pop up and capture new grid size dimensions
        padWidth = parseInt(prompt("Enter pad width"));
        padHeight = parseInt(prompt("Enter pad height"));
        padSize = padWidth * padHeight;
        
        // call function to reset pad
        resetPadv2(padWidth, padHeight);
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
