let container = document.querySelector('.product-container');
let cartContainer =document.querySelector('.cart');
let cartEmpty = document.querySelector('.empty-cart');
let totalValue = document.querySelector('.totalValue');
console.log(totalValue);



const Products = [
    { id: 1, name: 'Product-1', price: 100,   },
    { id: 2, name: 'Product-2', price: 200,   },
    { id: 3, name: 'Product-3', price: 300,   },
    { id: 4, name: 'Product-4', price: 150,   },
    
];

Products.forEach((obj)=>{
    obj.quantity=0;
})
console.log(Products);


function updateCart(){
    cartContainer.innerHTML="";
    let total = 0;
    Products.forEach((obj)=>{
        if(obj.quantity>0){
        let prodcut = document.createElement('div');
        prodcut.className='product';
        total+=obj.price*obj.quantity;
        let productName = document.createElement('p');
        let prodcutQuantity = document.createElement('p');
        let mul = document.createElement('p');
        mul.innerText='×';
        let productPrice = document.createElement('p');
        let addItem  = document.createElement('div');
        addItem.className='add-item';
        addItem.append(prodcutQuantity,mul,productPrice);

        productName.innerText = obj.name;
        prodcutQuantity.innerText = obj.quantity;
        productPrice.innerText=obj.price;
        prodcut.append(productName,addItem);

        cartContainer.appendChild(prodcut);    
        

        }
        totalValue.innerHTML=total;
        console.log(total);
        
    })
    if(cartContainer.innerHTML!==""){
        cartEmpty.style.display='none';
        // alert("empty cart trigged")
    }
}

function updateQuantity(id, action) {
    let product = Products.find(obj => obj.id === id);
    if (action === '+') {
        product.quantity++;
    } else if (action === '-' && product.quantity > 0) {
        product.quantity--;
    }
    updateCart();
    addProdcutContainer(); // Call to update the display
}

// Function to list products in the container
function addProdcutContainer() {
    // Clear the existing product container to avoid duplication
    container.innerHTML = '';
    // let h3 = document.querySelector('h3');
    // h3.innerText='Product';
    // container.appendChild(h3);

    Products.forEach((obj) => {
        let producDiv = document.createElement('div');
        producDiv.classList.add('product');
        let productName = document.createElement('p');
        productName.innerText = obj.name;
        let productPrice = document.createElement('p');
        productPrice.innerText = obj.price;

        let productAddDiv = document.createElement('div');
        productAddDiv.classList.add('add-item');
        
        let productSubBtn = document.createElement('button');
        productSubBtn.innerText = '-';
        productSubBtn.addEventListener('click', () => updateQuantity(obj.id, '-'));
        
        let productVal = document.createElement('p');
        productVal.innerText = obj.quantity; // Display the current quantity
        
        let productAddBtn = document.createElement('button');
        productAddBtn.innerText = '+';
        productAddBtn.addEventListener('click', () => updateQuantity(obj.id, '+'));

        productAddDiv.appendChild(productSubBtn);
        productAddDiv.appendChild(productVal);
        productAddDiv.appendChild(productAddBtn);

        producDiv.appendChild(productName);
        producDiv.appendChild(productPrice);
        producDiv.appendChild(productAddDiv);

        container.appendChild(producDiv);
    });
}

// Initial call to populate the product container
addProdcutContainer();
console.log(Products);
