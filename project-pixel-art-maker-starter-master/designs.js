// Variables defined for grid
const color = document.getElementById("colorPicker");
const size = document.getElementById("sizePicker");
const grid = document.getElementById("pixelCanvas");

size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});
//This code will loop and help create the pixel canvas based on the height and width entered on the page
function makeGrid() {

    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    grid.innerHTML = '';

    for (var y = 0; y < height; y++) {
        var row = grid.insertRow(y);
        for (var x = 0; x < width; x++) {
            var cell = row.insertCell(x);
            cell.addEventListener('click', function(event) {
                //This code ensures the cells are clickable to fill the cell with the selected color when clicked
                event.target.style.backgroundColor = color.value;
            });
        }
    }
}
