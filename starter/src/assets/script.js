/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let cherry = {
  name : "cherry",
  price : 5,
  quantity : 0,
  productId : 100,
  image : "images/cherry.jpg"
};

let orange = {
  name : "orange",
  price : 6,
  quantity : 0,
  productId : 101,
  image : "images/orange.jpg"
};

let strawberry = {
  name : "strawberry",
  price : 7,
  quantity : 0,
  productId : 102,
  image : "images/strawberry.jpg"
};

/* Put products in product array */

products.push(cherry, orange, strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Declare function to get product based on its ID */

function getProduct(elementId, productList) {
  return productList.find(element => element.productId === elementId);
}

function addProductToCart(productId) {

  /* Adding product to cart from products array */

  let product = getProduct(productId, products);
  product.quantity += 1;

  if (cart.includes(product) === false) {
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let product = getProduct(productId, cart);
  product.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let product = getProduct(productId, cart)
  product.quantity -= 1;
  if (product.quantity === 0) {
    cart.splice(cart.indexOf(product),1);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let product = getProduct(productId, cart);
  product.quantity = 0;
  cart.splice(cart.indexOf(product),1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/


function cartTotal() {

  /* Declare variable containing total cost of cart items */
  let grandTotal = 0;
  /* Loop over cart to calculate total cost based on price and qty */
  cart.forEach(function(product) {
    grandTotal += product.quantity * product.price;
  });
  return grandTotal;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  /* Loop over the cart and delete one item at a time to empty cart */
  const cartItems = cart.length;
  for (let productIndex = 0; productIndex <= cartItems; productIndex++) {
      cart.splice(productIndex, 1);
  }
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Initialize total amount paid by user */

let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;
  return totalPaid - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}