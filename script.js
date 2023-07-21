let boxs=document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let playerTurn=document.querySelector(".player");


const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

let options=['','','','','','','','',''];
let currentPlayer="X";
let running=false;
initializeGame();


function initializeGame(){
    // console.log("game initilized");
    boxs.forEach(box => box.addEventListener("click",cellClicked));
    reset.addEventListener("click",restartGame);
    playerTurn.textContent=`${currentPlayer}'s Turn`;
    running=true;
}

function cellClicked(){
    // console.log("cellclicked");
    const cellIndex=this.getAttribute("boxindex");
    if(options[cellIndex]!="" || running==false)
    {
        return;
    }

    updateCell(this,cellIndex);
    // changePlayer();
    checkWinner();

}

function updateCell(cell,index){
    // console.log("CELL updated");
     options[index]=currentPlayer;
     cell.textContent=currentPlayer;
}

function changePlayer(){
    // console.log("changePlayer")
    currentPlayer= (currentPlayer == "X") ? "0":"X";
    playerTurn.textContent =`${currentPlayer}'s Turn`;

}
function checkWinner(){
    // console.log("Checj winner");
    let roundWon=false;

    for(let i=0; i<winConditions.length;i++)
    {
        const condition=winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA ==" "||cellB ==""||cellC=="")
    {
        continue;
    }
    if(cellA==cellB && cellB==cellC)
    {
        roundWon=true;
    }
    }
    if(roundWon)
    {
            playerTurn.textContent=`${currentPlayer} Won`;
            running=false;
    }
    else if(!options.includes("")){
        playerTurn.textContent=`Draw!!!`;
        running=false;
    }
    else{
        changePlayer();
    }


}
function restartGame(){

    currentPlayer="X";
    options=["","","","","","","","",""];
    playerTurn.textContent =`${currentPlayer}'s Turn`;
    boxs.forEach(box=> box.textContent="");
    running=true;
}

