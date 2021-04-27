const container = document.getElementById("container");
const button = document.querySelectorAll('button');

let row = document.getElementsByClassName("row");
let col = document.getElementsByClassName("col");

let value = 16;

grid(value);

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
    target.style.backgroundColor = "red";
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
    let newSize = window.prompt("Choose a new grid size");
    if (newSize == 50) {
        //windows.location.reload();
        makeRows(newSize);
        makeColumns(newSize);
        grid(newSize);
    }
    //window.location.reload();
    //value = newSize;
    //makeRows(value);
    //makeColumns(value);
})

/*function grid() {
    let container = document.createElement('div');
    container.id = "main";
    container.className = "container";

    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.id = "row" + 1;

        for (let j = 0; j < 16; j++) {
            let box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    return container;
}*/