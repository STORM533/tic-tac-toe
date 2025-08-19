//this is a factory function creating player.

function createPlayer (player , marker){
    return{player , marker};
}
//this is creating array using IIFEs
const gameBoard = (function (){
    let arr = ["","","","","","","","",""];
    return{arr};
})();
//conditions for winning
const winning = (function (){
    const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return{winPattern};
})();
//checks winner
function checkWinner(){
    for(let i = 0;i<winning.winPattern.length; i++){
        let [a , b , c] =winning.winPattern[i];
        if(gameBoard.arr[a] =="X" && gameBoard.arr[b] =="X" && gameBoard.arr[c] == "X"){
            console.log("player 1 wins");
        }
        if(gameBoard.arr[a] =="O" && gameBoard.arr[b] =="O" && gameBoard.arr[c] == "O"){
            console.log("player 2 wins");
        }
    }
}
  
//creates player and starts game
function gameControl(){
    let isFirstClick = true;
    const player1 = createPlayer("player1" , "X" );
    const player2 = createPlayer("player2" , "O");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((div)=>{
        div.addEventListener("click",()=>{
            let index = parseInt(div.id);
            if(isFirstClick){
                if(gameBoard.arr[index] == ""){
                    div.innerHTML = player1.marker;
                    gameBoard.arr[index]=player1.marker;
                    checkWinner();
                }
            }else{
                if(gameBoard.arr[index] == ""){
                    div.innerHTML = player2.marker;
                    gameBoard.arr[index]=player2.marker;
                    checkWinner();
                }
            }
            isFirstClick = !isFirstClick;
        });
    });
}
//display 
function displayController(){
    const container = document.querySelector("body");
    const display = document.createElement("div");
    display.classList.add("disp");
    container.appendChild(display);
    const disp = document.querySelector(".disp");
    const player1 = document.createElement("div");
    const player2 = document.createElement("div");
    player1.classList.add("player1");
    player2.classList.add("player2");
    disp.appendChild(player1);
    disp.appendChild(player2);
}

console.log(gameBoard.arr);
displayController();
gameControl();


