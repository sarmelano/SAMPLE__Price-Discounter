const startDiscountFrom = 10000;
const discount = 10;

const discountValue = (100 - discount) / 100;

showProducts();

const productNumber = getProductNumber();
const productsAmount = getProductsAmount();

const selectedProduct = products[productNumber - 1];

const initialPrice = calculateInitialPrice(selectedProduct.price, productsAmount);
console.log('Price: $', initialPrice);

applyDiscount(initialPrice);