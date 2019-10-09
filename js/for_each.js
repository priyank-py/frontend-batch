const ul= document.querySelector('.groceries')
const groceries = ['rice', 'wheat', 'juice', 'milk'];

html = ``;
groceries.forEach(grocery => {
    html += `<li><input type="checkbox">${grocery}</li>`;
});

console.log(html);

ul.innerHTML = html;
ul.style.listStyle = 'none';


