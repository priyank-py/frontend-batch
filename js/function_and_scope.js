// let value = 15;
var num = 12;
const pi = 3.14;





//function V method
/*
let s = 'some string'
// console.log(s.toUpperCase());

function printUpperCase(word){
    return word.toLowerCase()
}

console.log(printUpperCase(s))

*/

let ul = document.querySelector('.characters')

let characters = ['mario', 'luigi', 'ryu', 'li-chin']

var data = ``;
for(let i=0; i<characters.length; i++){
    data += `<li>${characters[i]}</li>`
}
// console.log(data);
ul.innerHTML = data;


/*
const converter = function(kelvin){
    const celsius = 40;
    kelvin(celsius);
};

converter(function(temp){
    console.log(`Value in Kelvin is ${temp + 100}!`)
});
*/

//Callback Functions
/*
const myFunc = function(num){
    console.log(num)
}
myFunc(5);


const myFunc = function(testFunc){
    let n = 20;
    testFunc(n);
};

myFunc(function(num){
    console.log(num);
});

*/


//Arrow Functions: 
/*
const greet = () => console.log('hello world');

greet();

const amount = (p, r, t) => p + (p*r*t)/100;

result = amount(10000, 12.8, 2);
console.log(result);

const name = 'Mario';
let age = 35;
let data = `Hi! Imma ${name}, and i am ${age} years old!`;

console.log(data);


let name = 'Mario'
let category = 'Tech'

const welcomeFeed = (name, genre) => `Hi ${name}! You selected ${genre} news feed.`

msg = welcomeFeed(name, category);
console.log(msg);







const myFunc = function(num){
    return num
}

const myFunc = num => num; //arrow function

result = myFunc(23);
console.log(result);

const myFunc = function(num){
    console.log(num);
};

myFunc(34);


function myFunc(){
    
    const pi = 3.14;
}

if(num>10){
    const a = 15;
}

console.log(pi);

*/