
doSomething = () => {
    return  new Promise((resolve, reject) => {

        // resolve({a: 5, b: 10})
        reject('data not recieved')
    })
}
doSomething().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})






// const data = doSomething((data, err) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

