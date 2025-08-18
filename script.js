//this is a factory function creating player.

function createPlayer (player , marker){
    return{player , marker};
}
//this is creating array using IIFEs
const gameBoard = (function (){
    let arr =  Array["","","","","","","","",""];
    return{arr};
})();
//conditions for winning
function winning (){
    const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
}   
//creates player and starts game
function gameControl(){
    const player1 = createPlayer("player1" , "X" );
    const player2 = createPlayer("player2" , "O");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((div)=>{
        div.addEventListener("click",()=>{
            div.innerHTML = player1.marker;
            
        });
    });

}
gameControl();


