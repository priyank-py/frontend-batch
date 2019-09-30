// console.log(document.getElementsByTagName('div'));

// console.log(document.getElementsByClassName('container'));

// var item = document.getElementById('item')

// console.log(item);


// item.style.color  = '#ccc';
// item.style.fontSize = '20px';

var lists = (document.querySelector('#item'));
//lists.children[0].textContent = "new Item";

var parent = document.querySelector('.container');

var heading = document.querySelector('#heading')

var div = document.createElement('div');

div.textContent = 'Created by JS!';
div.style.color = 'aquamarine';
div.style.fontWeight = 'bold';
div.style.fontSize = '20px';

// parent.appendChild(div);

// parent.insertBefore(div, heading);

/*
beforebegin
afterbegin
beforeend
afterend
*/ 
console.log(div);
//parent.insertAdjacentElement('afterend', div);

 
