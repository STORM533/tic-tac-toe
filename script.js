//this is a factory function creating player.
function createPlayer (player , marker){
    return{player , marker};
}
//creating player 1 and 2 using IIFEs
const player = (function(){
    const player1 = createPlayer("player 1" , "X");
    const player2 = createPlayer("player 2" , "O");
    return{player1 , player2};
})();
//this is creating array using IIFEs
const gameBoard = (function (){
    let arr = ["","","","","","","","",""];
    return{arr};
})();
//conditions for winning using IIFEs
const winning = (function (){
    const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return{winPattern};
})();
//checks winner
function checkWinner(){
    for(let i = 0;i<winning.winPattern.length; i++){
        let [a , b , c] =winning.winPattern[i];
        if(gameBoard.arr[a] =="X" && gameBoard.arr[b] =="X" && gameBoard.arr[c] == "X"){
            console.log(player.player1.player + " wins");
            return true;
        }
        if(gameBoard.arr[a] =="O" && gameBoard.arr[b] =="O" && gameBoard.arr[c] == "O"){
            console.log(player.player2.player + " wins");
            return true;
        }
    }
}
//game working
function gameControl(){
    let isFirstClick = true;
    const player1 = player.player1;
    const player2 = player.player2;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((div)=>{
        div.addEventListener("click",()=>{
            let index = parseInt(div.id);
            if(isFirstClick){
                if(gameBoard.arr[index] == ""){
                    div.innerHTML = player1.marker;
                    div.style.color = "#ff7c01d3";
                    gameBoard.arr[index]=player1.marker;
                    if(checkWinner()){
                        gameOff();
                    }
                }
            }else{
                if(gameBoard.arr[index] == ""){
                    div.innerHTML = player2.marker;
                    div.style.color = "#4907e2c4"
                    gameBoard.arr[index]=player2.marker;
                    if(checkWinner()){
                        gameOff();  
                    }
                }
            }
            isFirstClick = !isFirstClick;
        });
    });
}
//stops game after a winner
function gameOff(){
    document.querySelectorAll(".box").forEach(box =>{
        box.style.pointerEvents = "none";
    });
}
//display 
function displayController(){

    
}

console.log(gameBoard.arr);
displayController();
gameControl();


