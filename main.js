document.addEventListener('DOMContentLoaded', () => {

    //Load Card Array
    const cardArray = [
        {name: 'Ace of Hearts', img: 'images/ace-hearts.jpg'},
        {name: 'Ace of Hearts', img: 'images/ace-hearts.jpg'},
        {name: 'Ace of Spades', img: 'images/ace-spades.jpg'},
        {name: 'Ace of Spades', img: 'images/ace-spades.jpg'},
        {name: 'King of Hearts', img: 'images/king-hearts.jpg'},
        {name: 'King of Hearts', img: 'images/king-hearts.jpg'},
        {name: 'King of Spades', img: 'images/king-spades.jpg'},
        {name: 'King of Spades', img: 'images/king-spades.jpg'},
        {name: 'Queen of Hearts', img: 'images/queen-hearts.jpg'},
        {name: 'Queen of Hearts', img: 'images/queen-hearts.jpg'},
        {name: 'Queen of Spades', img: 'images/queen-spades.jpg'},
        {name: 'Queen of Spades', img: 'images/queen-spades.jpg'},
        {name: 'Jack of Hearts', img: 'images/jack-hearts.jpg'},
        {name: 'Jack of Hearts', img: 'images/jack-hearts.jpg'},
        {name: 'Jack of Spades', img: 'images/jack-spades.jpg'},
        {name: 'Jack of Spades', img: 'images/jack-spades.jpg'},
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // Board Creation
    function createBoard(){
        for (let i =0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/cover.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', turncard);
            grid.appendChild(card);
        }
    }


  //matches?
  function checkForMatch(){
      var card = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      if (cardsChosen[0] === cardsChosen[1]){
          alert('MATCH');
          card[optionOneId].setAttribute('src', 'images/grey.jpg');
          card[optionTwoId].setAttribute('src', 'images/grey.jpg');
          cardsWon.push(cardsChosen);
      }else{
          card[optionOneId].setAttribute('src', 'images/cover.jpg');
          card[optionTwoId].setAttribute('src', 'images/cover.jpg');
          alert('Try Again...');
        };
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'You Beat Me';
        };
  };

  //flip card
  function turncard(){
      var cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2){
          setTimeout(checkForMatch, 500);
      };
  };

  createBoard();
});
