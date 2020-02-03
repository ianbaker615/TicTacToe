//gameBoard Module
const gameBoard = (function() {
  let board = [
  ["","",""],
  ["","",""],
  ["","",""]
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

const jeff = Player();
jeff.test();