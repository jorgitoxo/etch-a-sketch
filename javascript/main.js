// Why does this work without the explicit declaration below ??
// const container = document.querySelector("#container");

function createPad(padSize) {
    for (let i = 0; i < padSize; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', "row");
        row.setAttribute('id', i+1);
        for (let j = 0; j < padSize; j++) {
            let item = document.createElement("div");
            item.setAttribute('class', "element");
            item.setAttribute('id', j+1);
            row.appendChild(item);
        }
        container.appendChild(row);
    }
}

function resetPad(padSize) {
    // replaceChildren will remove elements if no parameter is passed
    document.getElementById("container").replaceChildren();
    createPad(padSize);
}

function sketch () {
    // --  explore turning padSize into arrow function expression --
    let padSize = 16;
    createPad(padSize);

    button.addEventListener('click', () => {
        do {
            padSize = parseInt(prompt("Enter pad size in blocks"));
            if ((padSize >= 2) && (padSize <= 100))
                resetPad(padSize);
            else
                alert("Size limit 2-100 blocks!");
        } while ((padSize < 2) || (padSize > 100));
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
