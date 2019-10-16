const colors = ['Green', 'blue', 'red', 'yellow'];

colors.forEach((color, index) => {
    console.log(index+1, color);
});

const doSomething = name => {
    return name.toUpperCase();
}

const caps = doSomething('text');
console.log(caps);