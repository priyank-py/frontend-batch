// const scores = [25, 32, 18, 54, 38, 29];

// const scores = new Array(45, 32, 62, 29, 53)
// console.log(scores)


//filter

// const filteredScores = scores.filter(score => score > 30);

// console.log(filteredScores)
/*
const scores = [
    {player: 'Mario', points: 80},
    {player: 'luigi', points: 70},
    {player: 'ryu', points: 50},
    {player: 'luigi', points: 110},
    {player: 'Mario', points: 40}
]

const filteredScores = scores.filter(score => score.points > 70);
console.log(filteredScores)
*/

// Map method
/*
const prices = [250, 790, 480, 520, 180, 355, 680]

const discountPrices = prices.map((price) => {
    if(price > 500){
        return Math.round(price/2)
    } else {
        return price
    }
})

console.log(discountPrices)
console.log(prices)
*/


//reduce method

// const prices = [250, 790, 480, 520, 180, 355, 680]

// const items = prices.reduce((total, price) => {
//     if(price > 500){
//         total++
//     }
//     return total
// }, 0)

// console.log(items)

/*

const scores = [
    {player: 'Mario', points: 80},
    {player: 'luigi', points: 70},
    {player: 'ryu', points: 50},
    {player: 'luigi', points: 110},
    {player: 'Mario', points: 40},
    {player: 'Mario', points: 120},
    {player: 'luigi', points: 70},
    {player: 'ryu', points: 50},
    {player: 'luigi', points: 90},
    {player: 'Mario', points: 75},
    {player: 'Mario', points: 95},
    {player: 'luigi', points: 70},
    {player: 'ryu', points: 50},
    {player: 'luigi', points: 110},
    {player: 'Mario', points: 50},
]

const marioScores = scores.reduce((total, score) => {
    if(score.player == 'Mario'){
        total += score.points
    }
    return total
}, 0)

console.log(marioScores)

*/

// find

const prices = [250, 790, 480, 520, 180, 355, 680]

const findHigh = prices.find((price) => {
    return price > 500
})

console.log(findHigh)








