const btncardapio = document.querySelector('.check-menu')
const btncontatos = document.querySelector('.order-now')
const list = document.querySelector('ul')
const btnTraditional = document.querySelector('.btn-traditional')
const btnVegan = document.querySelector('.btn-vegan')
const btnSweet = document.querySelector('.btn-sweet')
const btnDrink = document.querySelector('.btn-drink')
const btnOrder = document.getElementById('btn-order')
const formularioPedido = document.querySelector('.pedido-form')


// Redireciona para a página do cardápio
btncardapio?.addEventListener('click', () => {
    window.location.href = 'cardapio.html'
})

btncontatos?.addEventListener('click', () => {
    window.location.href = 'pedido.html'
}) 



// Exibe os produtos na tela
function showAll(productArray) {
    let myLi = ''
    productArray.forEach(product => {
        myLi += `
            <li>
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <span class="price">$${product.price.toFixed(2)}</span>
            </li>
        `
    })
    list.innerHTML = myLi
}


function filterProducts(type) {
    if (typeof listProducts !== 'undefined') {
        const filteredMenu = listProducts.filter(product => product.type === type)
        showAll(filteredMenu)
    } else {
        console.error("Erro: O array 'listProducts' não foi encontrado. Verifique a importação.")
    }
}


btnTraditional?.addEventListener('click', () => filterProducts('tradicional'))
btnVegan?.addEventListener('click', () => filterProducts('vegana'))
btnSweet?.addEventListener('click', () => filterProducts('doce'))
btnDrink?.addEventListener('click', () => filterProducts('bebida'))


btnOrder?.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Pedido enviado com sucesso!');
    formularioPedido?.reset();
});