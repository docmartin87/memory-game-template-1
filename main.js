  document.addEventListener("DOMContentLoaded", () => {

    //Load Card Array
    const cardsArray = [
        {name: "Ace of Hearts", img: "images/ace-hearts.png"},
        {name: "Ace of Hearts", img: "images/ace-hearts.png"},
        {name: "Ace of Spades", img: "images/ace-spades.png"},
        {name: "Ace of Spades", img: "images/ace-spades.png"},
        {name: "King of Hearts", img: "images/king-hearts.png"},
        {name: "King of Hearts", img: "images/king-hearts.png"},
        {name: "King of Spades", img: "images/king-spades.png"},
        {name: "King of Spades", img: "images/king-spades.png"},
        {name: "Queen of Hearts", img: "images/queen-hearts.png"},
        {name: "Queen of Hearts", img: "images/queen-hearts.png"},
        {name: "Queen of Spades", img: "images/queen-spades.png"},
        {name: "Queen of Spades", img: "images/queen-spades.png"},
        {name: "Jack of Hearts", img: "images/jack-hearts.png"},
        {name: "Jack of Hearts", img: "images/jack-hearts.png"},
        {name: "Jack of Spades", img: "images/jack-spades.png"},
        {name: "Jack of Spades", img: "images/jack-spades.png"},
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    const table = document.querySelector(".table");
    const scoreDisplay = document.querySelector("#score");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // Board Creation
    function createBoard(){
        for (let i =0; i < cardsArray.length; i++){
            var card = document.createElement("img");
            card.setAttribute("src", "images/question-marks.jpg");
            card.setAttribute("data-id", i);
            card.addEventListener("click", turncard);
            table.appendChild(card);
        }
    }


  //matches?
  function checkForMatch(){
      var cards = document.querySelectorAll("img");
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      if (cardsChosen[0] === cardsChosen[1]){
          alert("MATCH");
          cards[optionOneId].setAttribute("src", "images/grey.png");
          cards[optionTwoId].setAttribute("src", "images/grey.png");
          cardsWon.push(cardsChosen);
      }else{
          cards[optionOneId].setAttribute("src", "images/question-marks.jpg");
          cards[optionTwoId].setAttribute("src", "images/question-marks.jpg");
          alert("Try Again...");
        };
        cardsChosen = [];
        cardsChosenId = [];
        scoreDisplay.textContent === cardsWon.length
        if (cardsWon.length === cardsArray.length/2) {
            scoreDisplay.textContent = "You Beat Me"
        };
  };

  //flip card
  function turncard(){
      var cardId = this.getAttribute("data-id");
      cardsChosen.push(cardsArray[cardId.name]);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardsArray[cardId].img);
      if (cardsChosen.length === 2){
          setTimeout(checkForMatch, 500);
      };
  };

  createBoard();
});
