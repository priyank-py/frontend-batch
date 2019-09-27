function print(custom_value){
    console.log('function called!', custom_value);
}

function addition(n1, n2){
    console.log(n1 + n2);
}

var x = prompt('Enter 1st num: ');
x = Number(x);
var y = prompt('Enter 2nd number: ');
y = Number(y);

addition(x, y);