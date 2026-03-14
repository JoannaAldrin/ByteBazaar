const products = [
  {
    id: 1,
    title: "Blue Widget",
    description: "A stylish blue widget",
    price: 19.99,
    compareAt: 24.99,
    stock: 5,
    image: "assets/images/blue-widget.jpg"
  },
  {
    id: 2,
    title: "Red Widget",
    description: "A flashy red widget",
    price: 21.99,
    compareAt: 29.99,
    stock: 8,
    image: "assets/images/red-widget.jpg"
  },
  {
    id: 3,
    title: "Green Widget",
    description: "Eco-friendly green widget",
    price: 15.99,
    compareAt: null,
    stock: 10,
    image: "assets/images/green-widget.jpg"
  }
];
const productGrid = document.getElementById("product-grid");
const template = document.getElementById("product-card-template");

function renderProducts(productsList) {
  productGrid.innerHTML = ""; 

  productsList.forEach(product => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector(".product");
    article.dataset.productId = product.id;
    clone.querySelector(".product__title").textContent = product.title;
    clone.querySelector(".product__description").textContent = product.description;
    clone.querySelector(".product__price").textContent = `$${product.price.toFixed(2)}`;
    if(product.compareAt){
      clone.querySelector(".product__price--compare").textContent = `$${product.compareAt.toFixed(2)}`;
    }
    clone.querySelector(".product__stock").textContent = `Stock: ${product.stock}`;
    clone.querySelector(".product__image").src = product.image;
    clone.querySelector(".product__image").alt = product.title;

    productGrid.appendChild(clone);
  });
}

renderProducts(products);
let cart = [];

productGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("product__add")) {
    const article = e.target.closest(".product");
    const productId = parseInt(article.dataset.productId);
    const qty = parseInt(article.querySelector(".product__qty-input").value);

    const product = products.find(p => p.id === productId);

    const cartItem = cart.find(item => item.id === productId);
    if(cartItem){
      cartItem.qty += qty;
    } else {
      cart.push({...product, qty});
    }
    updateCartUI();
  }
});

const cartItemsEl = document.getElementById("cart-items");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartCountEl = document.querySelector(".header-cart__count");

function updateCartUI(){
  cartItemsEl.innerHTML = "";
  let subtotal = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("cart__item");
    li.innerHTML = `
      <span class="cart__item-title">${item.title} x ${item.qty}</span>
      <span class="cart__item-meta">$${(item.price*item.qty).toFixed(2)}</span>
    `;
    cartItemsEl.appendChild(li);
    subtotal += item.price*item.qty;
  });
  cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  cartCountEl.textContent = cart.reduce((acc, i)=>acc+i.qty,0);
}
function updateCartUI(){
  cartItemsEl.innerHTML = "";
  if(cart.length === 0){
    document.getElementById("cart-empty-msg").style.display = "block";
  } else {
    document.getElementById("cart-empty-msg").style.display = "none";
  }
  let subtotal = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("cart__item");
    li.innerHTML = `
      <span class="cart__item-title">${item.title} x ${item.qty}</span>
      <span class="cart__item-meta">$${(item.price*item.qty).toFixed(2)}</span>
    `;
    cartItemsEl.appendChild(li);
    subtotal += item.price*item.qty;
  });
  const tax = subtotal*0.05;
  cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("cart-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${(subtotal+tax).toFixed(2)}`;
  cartCountEl.textContent = cart.reduce((acc, i)=>acc+i.qty,0);
}
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", ()=>{
  if(cart.length === 0) return;
  alert("Order placed! Thank you!");
  cart = [];
  updateCartUI();
});

// Enable checkout button when items exist
function updateCartUI(){
  checkoutBtn.disabled = cart.length === 0;
}
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e)=>{
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p=>p.title.toLowerCase().includes(query));
  renderProducts(filtered);
});
const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("change", (e)=>{
  const val = e.target.value;
  let sorted = [...products];
  if(val==="price-asc") sorted.sort((a,b)=>a.price-b.price);
  if(val==="price-desc") sorted.sort((a,b)=>b.price-a.price);
  renderProducts(sorted);
});
const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
navToggle.addEventListener("click", ()=>{
  const expanded = navToggle.getAttribute("aria-expanded")==="true";
  navToggle.setAttribute("aria-expanded", !expanded);
  navList.style.display = expanded?"none":"flex";
});