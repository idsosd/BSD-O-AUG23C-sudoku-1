//alert("script getriggerd");
const sudokus = [
    [2,5,0,7,0,0,0,1,6,0,6,0,0,0,0,4,2,8,0,0,0,1,0,0,5,0,0,5,7,0,2,1,8,9,0,0,0,0,0,3,0,9,7,8,0,9,0,3,0,0,5,1,0,0,0,0,0,8,3,0,0,7,0,4,0,2,0,0,7,0,0,0,0,0,7,0,5,0,0,3,0],
    [0,0,9,0,0,0,0,0,8,6,0,7,4,1,0,0,5,0,0,0,2,0,5,0,0,0,7,0,9,0,1,0,7,6,0,0,0,4,0,0,9,6,3,0,0,8,6,3,0,0,4,7,0,9,5,3,6,0,0,0,0,7,0,0,0,0,7,8,0,0,3,0,0,7,0,0,0,0,0,9,2],
    [0,0,0,0,5,0,1,0,0,7,0,0,1,0,0,6,0,0,2,3,1,0,8,0,0,0,0,3,1,0,0,0,6,8,0,0,0,0,7,0,0,0,0,9,5,0,4,0,0,3,7,0,0,0,0,2,5,3,0,0,0,8,7,0,0,6,9,0,0,0,3,2,4,0,3,2,0,0,0,1,0],
    [6,0,0,5,1,8,0,0,0,4,2,1,0,0,0,0,0,0,0,8,0,0,3,0,6,9,1,0,0,0,1,0,2,7,5,8,5,1,6,0,0,0,2,0,0,0,0,0,9,5,3,0,6,0,0,0,0,0,0,0,0,1,7,3,9,8,7,0,1,0,0,6,0,5,0,8,4,6,0,2,0],
    [4,0,3,0,5,2,6,0,0,0,0,2,0,8,6,3,0,0,0,0,0,0,1,3,4,2,7,1,6,0,0,0,4,0,9,0,0,3,0,0,0,5,0,4,0,0,7,0,0,9,0,5,0,0,9,0,0,0,0,0,0,0,6,3,0,0,8,2,7,0,0,1,5,8,0,3,0,0,0,0,0],
    [0,0,2,0,0,0,4,3,8,4,3,9,0,0,5,0,0,2,8,0,0,2,0,3,0,0,5,6,0,0,9,5,0,0,0,0,5,9,4,0,0,0,8,2,0,7,0,0,0,6,4,0,9,0,0,0,0,0,0,8,1,6,0,0,4,0,0,0,0,0,0,0,2,8,0,4,0,9,3,0,0],
    [0,0,0,7,3,0,0,0,9,2,8,9,0,0,0,7,0,0,7,0,0,0,8,0,2,6,0,8,0,0,0,0,5,6,0,4,6,3,0,0,0,0,0,0,0,0,0,0,8,0,9,0,0,5,0,0,8,0,5,0,3,2,6,5,0,0,2,4,0,9,0,0,3,1,0,6,0,0,0,0,7]
]
let idmapping = [
    [0,0,0],
    [1,1,1],[1,2,1],[1,3,1],[1,4,2],[1,5,2],[1,6,2],[1,7,3],[1,8,3],[1,9,3],
    [2,1,1],[2,2,1],[2,3,1],[2,4,2],[2,5,2],[2,6,2],[2,7,3],[2,8,3],[2,9,3],

];
let rij1 = [];
let rij2 = [];
let rij3 = [];
let rij4 = [];
let rij5 = [];
let rij6 = [];
let rij7 = [];
let rij8 = [];
let rij9 = [];
let kolom1 = [];
let kolom2 = [];
let kolom3 = [];
let kolom4 = [];
let kolom5 = [];
let kolom6 = [];
let kolom7 = [];
let kolom8 = [];
let kolom9 = [];
let blok1 = [];
let blok2 = [];
let blok3 = [];
let blok4 = [];
let blok5 = [];
let blok6 = [];
let blok7 = [];
let blok8 = [];
let blok9 = [];

let activeId = 0;

let sudokustring = "<ul>";
for (i = 1; i <= 81; i++)
{
    sudokustring += `<li id="${i}" onclick="activateCell(${i})"><span></span></li>`;
}
sudokustring += "</ul>";
document.getElementById("sudoku").innerHTML = sudokustring;

function selectCijfer(cijfer)
{
    if(activeId == 0){
        return
    }
    document.getElementById(activeId).innerText = cijfer;
}

function activateCell(id)
{
    if(!document.getElementById(id).classList.contains("bg-secondary-subtle"))
    {
        document.getElementById(activeId).classList.remove("bg-primary-subtle");
        activeId = id;
        document.getElementById(id).classList.add("bg-primary-subtle")
    }
}

function generateSudoku()
{
    //random getal genereren tussen 0 en 6
    let random_nmbr = Math.floor(Math.random() * 7);
    //dit random_nmbr gebruiken we als index voor de sudokus-array
    //daarmee selecteren we dus een sudoku
    let selected_sudoku = sudokus[random_nmbr];
    let index = 0;
    for(i = 1; i <= 81; i++){
        if(selected_sudoku[index] == 0){
            document.getElementById(i).innerText = "";
            document.getElementById(i).classList.remove("bg-secondary-subtle");

        } else {
            document.getElementById(i).innerText = selected_sudoku[index];
            document.getElementById(i).classList.add("bg-secondary-subtle");
        }
        index++;
    }
}