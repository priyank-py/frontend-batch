var btn = document.querySelector('.button');

function click1(){
    console.log('Button clicked');
    btn.removeEventListener('click', click1)
}

function click2(){
    console.log('another task');
}

btn.addEventListener('click', click1);
btn.addEventListener('click', click2);