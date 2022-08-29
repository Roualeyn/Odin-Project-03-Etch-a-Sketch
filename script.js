function createNewGrid(num){
    const main = document.querySelector("main");
    emptyGrid(main);
    for (let i = 0; i < num; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("blockLine");
        for (let j = 0; j < num; j++) {
            let newBlock = document.createElement("div");
            newBlock.classList.add("drawingBlock");
            newBlock.addEventListener("mouseenter", changeColour);
            newRow.appendChild(newBlock);
        }
        main.appendChild(newRow)
    }
}

function promptForGridSize() {
    let gridSize = Number(prompt("Please enter the desired grid size.", "16"));
    if (gridSize >= 100) {
        alert("Grid cannot be larger than 100");
        return;
    } else if (isNaN(gridSize)) {
        alert("Did not enter a number");
        return;
    }
    createNewGrid(gridSize);
}

function changeColour() {
    this.style.backgroundColor = "black";
}

function emptyGrid(main){
    main.innerHTML = '';
}

// Add Button Functionality
document.querySelector("#newGridButton").addEventListener("click", promptForGridSize);
// Create Initial Grid
createNewGrid(32);
