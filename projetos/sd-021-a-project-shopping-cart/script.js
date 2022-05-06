const itemsSection = document.getElementsByClassName('items')[0];
const cart = document.getElementsByClassName('cart__items')[0];
const totalPriceElement = document.getElementsByClassName('total-price')[0];
const btnEmptyCart = document.getElementsByClassName('empty-cart')[0];

const emptyCart = () => {
  localStorage.clear();
  cart.innerHTML = '';
  totalPriceElement.innerText = 0;
};

btnEmptyCart.addEventListener('click', emptyCart);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const getLocalItem = () => {
  const item = JSON.parse(localStorage.getItem('cartItem'));
  return item;
};

const getTotalPrice = () => {
  let totalPrice = 0;
  // const cartItems = getSavedCartItems();
  const cartItems = getLocalItem();

  console.log(!cartItems);

  if (!cartItems || Object.keys(cartItems).length === 0) {
    console.log('teste');
    totalPriceElement.innerText = 0;
    return;
  }

  Object.keys(cartItems).forEach((item) => {
    const { salePrice } = cartItems[item];
    totalPrice += salePrice;
    console.log(salePrice);
    totalPriceElement.innerText = totalPrice.toFixed('2');
  });
};

function cartItemClickListener(event) {
  const product = event.target;
  product.remove();
  const productSku = product.innerText.split(' ')[1];
  // const products = getSavedCartItems();
  const products = getLocalItem();
  delete products[productSku];
  localStorage.setItem('cartItem', JSON.stringify(products));

  getTotalPrice();
  return product;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
}

const buildCartItem = (productObj) => {
  const storaged = JSON.parse(localStorage.getItem('cartItem'));
  const productSku = productObj.sku;
  const product = {};
  product[productSku] = productObj;
  
  if (storaged) {
    storaged[productSku] = productObj;
    localStorage.setItem('cartItem', JSON.stringify(storaged));
  } else {
    localStorage.setItem('cartItem', JSON.stringify(product));
  }
};

const getItem = async (event) => {
  const product = await event.target.parentElement;
  const productSku = product.querySelector('.item__sku').innerText;
  const item = await fetchItem(productSku);

  const sku = productSku;
  const name = item.title;
  const salePrice = item.price;

  const productObj = { sku, name, salePrice };
  buildCartItem(productObj);
  saveCartItems(productObj);

  const li = createCartItemElement({ sku, name, salePrice });
  cart.appendChild(li);

  getTotalPrice();
};

const populateCartSection = () => {
  // const cartItems = getSavedCartItems();
  const cartItems = getLocalItem();
  if (cartItems) {
    Object.keys(cartItems).forEach((item) => {
      const { sku, name, salePrice } = cartItems[item];
      const li = createCartItemElement({ sku, name, salePrice });
      cart.appendChild(li);
    });
  }
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', getItem);
  section.appendChild(button);

  return section;
}

const populateItemsSection = async () => {
  const loading = document.createElement('h3');
  loading.classList = 'loading';
  loading.innerText = 'carregando...';
  itemsSection.appendChild(loading);

  const data = await fetchProducts('computador');
  itemsSection.innerHTML = '';
  const products = data.results;
  products.forEach((product) => {
    const sku = product.id;
    const name = product.title;
    const image = product.thumbnail;

    const element = createProductItemElement({ sku, name, image });
    itemsSection.appendChild(element);
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = async () => {
  populateItemsSection();
  populateCartSection();
  getTotalPrice();
};
