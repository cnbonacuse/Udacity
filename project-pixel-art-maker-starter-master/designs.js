// Variables
var color = document.getElementById("colorPicker");
var size = document.getElementById("sizePicker");
var grid = document.getElementById("pixelCanvas");

size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});
//Grid creation
function makeGrid() {

var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;
grid.innerHTML = '';

//Color selector
for (var y = 0; y < height; y++) {
    var row = grid.insertRow(y);
    for (var x = 0; x < width; x++) {
        var cell = row.insertCell(x);
        cell.addEventListener('click', function(event) {
            event.target.style.backgroundColor = color.value;
        });
      }
    }
}
