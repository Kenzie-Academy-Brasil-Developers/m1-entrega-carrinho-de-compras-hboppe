let soma = 0;
let product = [

    {
        nome: "Uva Crimson", 
        preco: 44.99
    },

    {
        nome:"Vinho Canção",
        preco: 17.98
    },

    {
        nome:"Aguá de coco",
        preco: 8.99
    },

    {
        nome: "Mamão",
        preco: 9.98
    },

    {
        nome: "Aguá Tônica",
        preco: 17.98
    }
];

const main = document.createElement("main");
const list = document.createElement("ul");

document.querySelector("body").appendChild(main);
main.appendChild(list);



function somaObject (array) {
    
    for (let key in array) {
        let name = array[key].nome;
        let valor = array[key].preco;
        
        const productList = document.createElement("li");
        const text1 = document.createElement("p");
        const text2 = document.createElement("p");
        
        list.appendChild(productList);
        productList.appendChild(text1);
        productList.appendChild(text2);

        text1.innerText = name;
        text2.innerText = `R$ ${valor}`;

        soma += valor;
    }
    
      
}

somaObject(product);


const btnFinalizar = document.createElement("button");
const secao = document.createElement("section");
const text = document.createElement("p");

main.appendChild(secao);
secao.appendChild(text);
secao.appendChild(btnFinalizar);

text.innerText = soma;
btnFinalizar.innerText = "Finalizar";
