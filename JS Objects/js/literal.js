
const user = {
    firstName: "John",
    lastName: "Wayne",
    age:56,
    email(){
        email = `${this.firstName}.${this.lastName}${this.age}.@gmail.com`;
        console.log(email)  
    },
    login(){
        console.log(this);
        console.log('User logged in');
    },
    logout(){
        console.log("User log out");
    }
}

console.log(user['lastName']);

user.email()
