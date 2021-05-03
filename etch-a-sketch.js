const container = document.getElementById("container");
const button = document.querySelectorAll('button');

let row = document.getElementsByClassName("row");
let col = document.getElementsByClassName("col");

let value = 16;

function newGrid() {
    value = parseInt(window.prompt("Choose a new grid size (between 2 and 64)"));
    if (value >= 2 && value <= 64) {
        grid(value);
    } else {
        alert('Enter a valid number. Refresh the browser to try again.');
    }
}
newGrid();
function grid(value) {
    makeRows(value);
    makeColumns(value);
}

function makeRows(rowNum) {
    // Creates rows
    for (x = 0; x < rowNum; x++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    };
};

function makeColumns(colNum) {
    for (let y = 0; y < row.length; y++) {
        for (z = 0; z < colNum; z++) {
            let newCol = document.createElement("div");
            row[z].appendChild(newCol).className = "col";
        };
    };
};

// Changes the background color 
function changeColor (target) {
    target.style.backgroundColor = "rgba(109, 36, 36, 0.699)";
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.col")) {
        changeColor(target);
    }
});

// Prompts user for a new grid size
const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    window.location.reload();
})