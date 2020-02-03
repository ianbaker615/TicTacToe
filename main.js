//gameBoard Module
const gameBoard = (function() {
  let board = [
  "X","O","O",
  "X","X","O",
  "X","O","X"
  ]

  return {
    board: board,
    //next thing
  };
})();

//displayController Module
const displayController = (function() {
  //logic

  return {
    //public methods and properties
  }
})();

//Player Factory Function
const Player = () => {
  //Write your functions
  const test = () => console.log('asuh');

  //Return your public methods
  return {test}
}

//Render gameBoard onto page
function render(gameBoard){
  const container = document.getElementById("container");

  gameBoard.board.forEach(tile => {
    const gameTile = document.createElement("div");
    gameTile.classList.add("gameTile");

    gameTile.innerHTML = tile;

    container.appendChild(gameTile);
  });
}

render(gameBoard);