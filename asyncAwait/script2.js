// //Part 1 Number facts - ASYNC AWAIT
// //exercise 1 -favorite number

// async function getInfo(favoriteNumber){
//   let url=`http://numbersapi.com/${favoriteNumber}?json`

//   let info= await axios.get(url)
//   console.log(info.data.text)
// }



// getInfo(18)


// // //exercise 2 multiple numbers

// async function multipleNums(arr){
//   url=`http://numbersapi.com/${arr}/`

//   let info= await axios.get(url)
//  return console.log(info.data)

// }
// multipleNums([12,16,34])

// //exercise 3- 4 facts about a number
// async function fourFacts(num){
//   url=`http://numbersapi.com/${num}?json`
//   let fact1=axios.get(url)
//   let fact2=axios.get(url)
//   let fact3=axios.get(url)
//   let fact4=axios.get(url)

//   let f1=await fact1
//   let f2=await fact2
//   let f3=await fact3
//   let f4=await fact4

//   console.log(f1.data.text)
//   console.log(f2.data.text)
//   console.log(f3.data.text)
//   console.log(f4.data.text)


// }

// fourFacts(1)


//Part 2 Deck of Cards API
//exercise 1 - draw one card from a shuffled deck and output result

async function drawCard(){
  let url='https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  response= await axios.get(url)
let deckID=response.data.deck_id

card=await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
// console.log(card.data.cards[0].value,'of' ,card.data.cards[0].suit)
// console.log(card.data.cards[0].image)
// let cardImageLink = card.data.cards[0].image
// let img = document.createElement('img');
// img.src=cardImageLink
// let pile=document.getElementById('card-pile')
// pile.append(img)


}

// drawCard()



//exercise 2 - draw 2 cards

async function drawTwo(){

  let newDeck= await axios.get('https://deckofcardsapi.com/api/deck/new/')
  let deckID=newDeck.data.deck_id
  let shuffled= await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)
  card1=await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
  card2=await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
console.log('card 1: ',card1.data.cards[0].value,'of',card1.data.cards[0].suit)
console.log('card 2:',card2.data.cards[0].value,card2.data.cards[0].suit)
}
// drawTwo()






//exercise 3- draw cards and display in DOM

//shuffle cards and get deck ID
async function shuffleCards(){
let url='https:deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
response= await axios.get(url)
 deckID=response.data.deck_id

}
window.onload=shuffleCards

async function drawCard(){
try {
//draw a card from the deck
response = await  axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
card = response.data.cards[0].code; // Access cards array
addCardToPile = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/pile/thePile/add/?cards=${card}`)
cardPile = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/pile/thePile/list/`)
cards=cardPile.data.piles.thePile.cards//cards in the card pile

let pile=document.getElementById('card-pile')
pile.innerHTML=''
//add each card image  to the DOM at the top of the pile
if(cards.length<=52){
  cards.map((card)=>{
  let cardImageLink = card.images.png
let img = document.createElement('img');
img.src=cardImageLink
pile.append(img)

 })
}

}
catch {
  let pile=document.getElementById('card-pile')

  pile.innerText='OUT OF CARDS'
  return console.log('OUT OF CARDS!!!!')

}

  }

const drawButton=document.getElementById('card-button')
drawButton.addEventListener('click',drawCard)
