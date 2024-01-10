//alert("script getriggerd");
let sudokustring = "<ul>";
for (i = 0; i < 81; i++)
{
    sudokustring += "<li><input class='form-control text-center' style='font-size: 52px' value='" + i + "'></li>";
}
sudokustring += "</ul>";
document.getElementById("sudoku").innerHTML = sudokustring;