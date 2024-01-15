//Part 1 Number facts
//exercise 1 -favorite number
// let favoriteNumber =55
// let url=`http://numbersapi.com/${favoriteNumber}?json`

// axios.get(url)
// .then(response=>{
//   console.log(response.data)
// })
// .catch(error => {
//     console.error('There was an error!', error);


// })

// //exercise 2 multiple numbers
// let numbers=[12,16,34]
// url=`http://numbersapi.com/${numbers}`

// axios.get(url)
// .then(response=>{
//   console.log(response.data)
// })
// .catch(error => {
//     console.error('There was an error!', error);


// })


//exercise 3 - 4 facts
// for (let i = 0;i<=3;i++){
//   let number= 30
// let url=`http://numbersapi.com/${number}?json`

// axios.get(url)
// .then(response=>{
//   console.log(response.data)
// })
// .catch(error => {
//     console.error('There was an error!', error);


// })
// }


//Part 2 Deck of Cards API
//exercise 1 - draw one card from a shuffled deck and output result

//shuffle deck
// let url='https:deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// axios.get(url)
// .then(response=>{
//   //get deck id of shuffled deck to pass to the url to draw a card
//   let deckID=response.data.deck_id
//   //draw 1 card from shuffled deck
//   axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
//   .then(response => {
//     const card = response.data.cards; // Access cards array
//     console.log(card[0].value,'of',card[0].suit); // output card value and suit
//   })
// })
// .catch(error => {
//     console.error('There was an error!', error);
// })


//exercise 2 - draw 2 cards

//shuffle deck
// let url='https:deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// // draw 2 cards
// let cardsToDraw=2;
// axios.get(url)
// //get deck id of shuffled deck to pass to the url to draw a card
// .then(response=>{
//   let deckID=response.data.deck_id
//   axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${cardsToDraw}`)
//   .then(response => {
//     const cards = response.data.cards; // Access cards array
//     //iterate through the cards array and output value and suit
//     cards.map((card) => {
//     console.log(card.value,'of',card.suit);

//       });
//   })
// })
// .catch(error => {
//     console.error('There was an error!', error);
// })


//exercise 3- draw cards
//on load  create new shuffled  deck
//create pile
//display pile
// click on button to draw card
//add card to pile
//when remaining cards = 0 end

let deckID;
let card;

//shuffle cards
function shuffleCards(){
let url='https:deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
axios.get(url)
.then(response=>{
  //get deck id of shuffled deck to pass to the url to draw a card
 deckID=response.data.deck_id
  console.log(deckID)
})

}
window.onload=shuffleCards

 function drawCard(){

  axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
  .then(response => {
    card = response.data.cards[0].code; // Access cards array

    return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/pile/thePile/add/?cards=${card}`)
  })
  .then(()=>{
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/pile/thePile/list/`)
  })


    .then(response=>{
    let cards=response.data.piles.thePile.cards
    let pile=document.getElementById('card-pile')
    pile.innerHTML=''
    console.log(cards.length)
    if(cards.length <51){




    cards.map((card)=>{
      let cardImageLink = card.images.png

      let img = document.createElement('img');
    img.src=cardImageLink



    pile.append(img)


    })
  }

  })
  .catch(error => {
    console.error('No more remaining cards:', error);
   
  });


 }




  // axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/pile/thePile/add/?cards=${card}`)
  // .then(response => {
  //   console.log(response)
  // })
  // axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/pile/thePile/list/`)
  // .then(response => {
  //   console.log(response)
  // })

  // }









const drawButton=document.getElementById('card-button')
drawButton.addEventListener('click',drawCard)
