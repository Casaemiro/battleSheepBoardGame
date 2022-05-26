 let xCordinate = [0,1,2,3,4,5,6];
 let yCordinate = ["A", "B", "C", "D","E","F","G"];
 let numberOFRows = 7;
 let inputText;
 let hiddenShipLocation = [];
// import {xCordinate,yCordinate,numberOFRows} from "./model.js";


//this function creates table data and inserts them into a pre-created table//_________________________________
function createTable(){
    let table = document.getElementById("board");
    table.innerHTML += "<tr>"+ "<td></td>".repeat(11) +"</tr>"
    for(let i = 0; i < numberOFRows; i++){
        
        let newTag ="<tr><td></td><td></td>";

        for(let j = 0; j < numberOFRows; j++){
            newTag += "<td id="+ yCordinate[i] +""+ xCordinate[j] +"></td>";
        }
        table.innerHTML += newTag + "<td></td><td></td></tr>";
    }
    table.innerHTML += "<tr>"+ "<td></td>".repeat(11) +"</tr>"
}
createTable();
//
function randomlyPlaceThreeShips(){
    for(let i = 0; i < 3; i++){
        let randomCellrow = (Math.floor(Math.random() * (7 - 0) + 0))
        let randomCellcol = (Math.floor(Math.random() * (7 - 0) + 0))
        console.log(xCordinate[randomCellrow])
        console.log(yCordinate[randomCellcol])
        let tempCellId = yCordinate[randomCellcol] + xCordinate[randomCellrow];
        console.log(tempCellId)
        hiddenShipLocation.push(tempCellId);
        let tempCell = document.getElementById(tempCellId)
        tempCell.innerHTML = '<img src="./ship.png" >'
        tempCell.style.display = "none"
    }
}

randomlyPlaceThreeShips()






function fireShip(){
    if(hiddenShipLocation.includes(inputText)){
        let CurrentShipCell = document.getElementById(inputText);
        CurrentShipCell.style.display = "block";
    }else{
        console.log(inputText)
        let CurrentShipCell = document.getElementById(inputText);
        console.log(CurrentShipCell)
        CurrentShipCell.innerHTML = "<img src='./miss.png'>" 
    }
}






function validateUserInpute(){
    inputText = document.getElementById("textInput").value;
    if(document.getElementById(inputText) != undefined && inputText.length == 2){
        console.log("validInput")
    }else{
        alert("Invalid input text")
        return 0
    }
    fireShip()
}
// validateUserInpute()


const fireButton = document.getElementById("fire");
fireButton.addEventListener("click",validateUserInpute);


