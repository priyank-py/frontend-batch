const div = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();

    html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
`;
    
    div.innerHTML = html
}

setInterval(tick, 1000)