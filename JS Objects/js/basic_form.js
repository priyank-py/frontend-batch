const span = document.querySelector('.message')

const form = document.querySelector('.myform');
const pattern = /[a-zA-Z0-9!@#\$%\^&\*]{8,20}/;

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(form.userid.value);
    console.log(form.password.value);

    
    const result = pattern.test(form.password.value);
    console.log(result);

    if(result){
        span.innerHTML = 'Password is Valid'
    } else{
        span.innerHTML = 'Password is Invalid'
    }
});

form.password.addEventListener('keyup', e => {
    
    const passwd = e.target.value;
    result = pattern.test(passwd);
    if(result){   
        form.password.setAttribute('class', 'success');
    } else{ 
        form.password.setAttribute('class', 'error');
    }
})