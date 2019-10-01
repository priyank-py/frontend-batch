var parent = document.querySelector('.parent');
var child = document.querySelector('.child');

function light(event){
    event.stopPropagation();
    console.log('I am the light');
    // console.log(event);
}

function dark(){
    console.log('I am the dark');
}

parent.addEventListener('click', dark);
child.addEventListener('click', light);