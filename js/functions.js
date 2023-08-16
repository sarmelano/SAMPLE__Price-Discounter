function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}

function getProductNumber() {
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));
  return productNumber;
}

function getProductsAmount() {
  let productsAmount;
  do {
    productsAmount = parseInt(prompt('Enter products amount:'));
  } while (productsAmount < 1 || isNaN(productsAmount));
  return productsAmount;
}

function calculateInitialPrice(price, amount) {
  return price * amount;
}

function applyDiscount(price) {
  if (price >= startDiscountFrom) {
    const finalPrice = price * discountValue;
    console.log('Congrats! You got a discount, NOW your total is only $' + finalPrice);
  }
}