const getTodos = (response, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if(request.readyState === 4 && request.status == 200){
            const data = request.responseText
            myData = JSON.parse(data)
            // console.log(myData)
            callback(myData)
        } else if(request.readyState === 4){
            // console.log('URL not found')
            callback({people: null, player: null})
        }
    })
    
    
    request.open('GET', response)
    request.send()
}

getTodos('test.json', data => {
    console.log('people names', data.people)
})
getTodos('test2.json', record => {
    console.log("Players records are:", record.player)
})