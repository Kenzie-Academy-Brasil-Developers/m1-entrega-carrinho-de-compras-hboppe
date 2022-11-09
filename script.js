let products = [
{nome: 'Uva Crimson', preco: 44.99},
{nome: 'Vinho Cançao', preco: 17.98}, 
{nome: 'Água de coco', preco: 8.99},
{nome: 'Mamão', preco: 9.98},
{nome: 'Água Tonica', preco: 17.98}
]

let body = document.getElementsByTagName('body')[0];
let main = document.createElement('main');
let ul = document.createElement('ul');
main.appendChild(ul);
body.appendChild(main);
let liTop = document.createElement('li')
liTop.classList.add('listTop');
let item = document.createElement('p');
let valor = document.createElement('p');
item.innerHTML = 'Item'
valor.innerHTML = 'Valor'
liTop.appendChild(item);
liTop.appendChild(valor);
ul.appendChild(liTop)

for(let i = 0; i < products.length; i++){

    let li = document.createElement('li');
    ul.appendChild(li)

    let p1 = document.createElement('p'); 
    let p2 = document.createElement('p');

    p1.innerHTML = products[i].nome; // se colocar .innerhtml aqui da erro/ pq?
    p2.innerHTML = `R$ ${products[i].preco}`

    li.appendChild(p1)
    li.appendChild(p2)


}
let li = document.createElement('li');
li.classList.add('total')
ul.appendChild(li)

let soma = products.reduce((a, b) => a + b.preco, 0)

let p3 = document.createElement('p');
let p4 = document.createElement('p');
li.appendChild(p3)
li.appendChild(p4)

p3.innerText = 'Total'
p4.innerText = `R$ ${soma}`





