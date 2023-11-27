let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'AIR JORDAN 1',
        brand: 'air jordan',
        image: 'shoes1.webp',
        price: 1000000
    },
    {
        id: 2,
        name: 'AIR JORDAN 2',
        brand: 'air jordan',
        image: 'shoes2.webp',
        price: 2000000
    },
    {
        id: 3,
        name: 'AIR JORDAN 3',
        brand: 'air jordan',
        image: 'shoes3.webp',
        price: 3000000
    },
    {
        id: 4,
        name: 'AIR JORDAN 4',
        brand: 'air jordan',
        image: 'shoes4.webp',
        price: 4000000
    },
    {
        id: 5,
        name: 'AIR JORDAN 5',
        brand: 'air jordan',
        image: 'shoes5.webp',
        price: 5000000
    },
    {
        id: 6,
        name: 'AIR JORDAN 6',
        brand: 'air jordan',
        image: 'shoes6.webp',
        price: 6000000
    },
    {
        id: 6,
        name: 'AIR JORDAN 7',
        brand: 'air jordan',
        image: 'shoes7.webp',
        price: 7000000
    },
    {
        id: 6,
        name: 'AIR JORDAN 8',
        brand: 'air jordan',
        image: 'shoes8.webp',
        price: 8000000
    }
];
let listCards = [];
function renderProduct() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../Project_Mindx 18+/../img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">add to cart</button>`;
        list.appendChild(newDiv);
    })
}
renderProduct();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../Project_Mindx 18+/../img/${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})" style="background-color: transparent"; ><div style="color: white;">-</div></button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function showResult() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
                   <h4 style="background-color: green; color: white">Result</h4>
            <img src="../Project_Mindx 18+/../img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">add to cart</button>`;
        list.appendChild(newDiv);
    })
}
function searchShoes() {
    let name = document.getElementById("inputName").value
    let foundShoes = products.filter(shoes => shoes.name == name)
    console.log(foundShoes)
    products = foundShoes
    showResult()
}

function checkOutSuccess() {
    alert("Check out successfully. Your package will be delivered in 24 hours")
    location.reload()
}
