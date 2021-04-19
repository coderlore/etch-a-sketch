function grid() {
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
}