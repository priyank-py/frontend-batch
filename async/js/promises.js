const getData = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)
            if(request.readyState === 4 && request.status === 200){
                const data = request.responseText
                myData = JSON.parse(data)
                // console.log(myData)
                // callback(myData)
                resolve(myData)
            } else if(request.readyState === 4){
                // console.log('URL not found')
                // callback({people: null, player: null})
                reject('Data not found')
            }
        })           
        request.open('GET', 'test.json')
        request.send()
    })
}
getData().then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err)
})