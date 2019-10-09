function generatingEmail(getData){
    name = 'Johnny';
    console.log(name);
    email = getData(name);
    console.log(email);
}

generatingEmail(function(name){
    return `${name}@gmail.com`;
})
