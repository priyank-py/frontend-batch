var container = document.querySelector('#container')
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#four');
var four = document.querySelector('#five');

function getOne(){
    container.style.background = 'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fforum%2F164000%2F164933_1329695875355_full.jpg&f=1&nofb=1)';
    console.log(container.style);
}
function getTwo(){
    container.style.background = 'url(http://fanaru.com/akame-ga-kill/image/78472-akame-ga-kill-night-raids-akame.png)';
}

function getThree(){
    container.style.background = 'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffanaru.com%2Fanime-girls%2Fimage%2F243185-anime-girls-kawaii-pink-hair-girl-avatar.jpg&f=1&nofb=1)';
}

function getFour(){
    container.style.background = 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-8d24dc3b02054ea7eb8561e7f9fdfb84-c&f=1&nofb=1)';
}


one.addEventListener('click', getOne);
two.addEventListener('click', getTwo);
three.addEventListener('click', getThree);
four.addEventListener('click', getFour);
