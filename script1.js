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

for(let i = 0; i < products.length; i++){

    let li = document.createElement('li');
    ul.appendChild(li)

    let p1 = document.createElement('p'); // pq nao preciso colocar innerHTMl aqui?
    let p2 = document.createElement('p');

    p1 = products[i].nome; // se colocar .innerhtml aqui da erro/ pq?
    p2 = `R$ ${products[i].preco}`

    li.insertAdjacentHTML('afterbegin', p1)
    li.insertAdjacentHTML('beforeend', p2)


}
let li = document.createElement('li');
ul.appendChild(li)

let soma = products.reduce((a, b) => a + b.preco, 0)

let p3 = document.createElement('p');
let p4 = document.createElement('p');
li.appendChild(p3)
li.appendChild(p4)

p3.innerText = 'Total'
p4.innerText = `R$ ${soma}`





