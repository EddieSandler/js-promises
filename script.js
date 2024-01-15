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
for (let i = 0;i<=3;i++){
  let number= 30
let url=`http://numbersapi.com/${number}?json`

axios.get(url)
.then(response=>{
  console.log(response.data)
})
.catch(error => {
    console.error('There was an error!', error);


})
}