let user = {
    name: 'Johnny',
    age: '78',
    email: 'johnny78@gmail.com',
    login: function(){
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out');
    }
}

console.log(user['name']);
console.log(user.age);
user.login();
user.logout();