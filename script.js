let productName = prompt("Enter the product name");
let itemPrice = parseFloat();
let quantity = parseInt();

// Prompt user for product price and validate input
while (true) {
  itemPrice = prompt("Enter the product price");
  if (!isNaN(itemPrice)) {
    break;
  }
  alert("Invalid input. Please enter the product price.");
}

// Prompt user for quantity and validate input
while (true) {
  quantity = prompt("Enter the quantity of the product");
  if (!isNaN(quantity)) {
    break;
  }
  alert("Invalid input. Please enter the quantity of the product.");
}

let totalPrice = itemPrice * quantity;

// Apply discount if product name is 'SPECIAL' or total exceeds 10,000
if (productName.toUpperCase() === 'SPECIAL' || totalPrice > 10000) {
  let discount = prompt("Enter the discount percentage", '20%');

  // Remove non-digit characters and calculate decimal discount
  let numberDiscount = discount.replace(/[^\d]/g, '');
  let decimalDiscount = numberDiscount / 100;

  let discountAmount = totalPrice * decimalDiscount;
  let discountPrice = totalPrice - discountAmount;

  document.getElementById('myDiv1').innerHTML = "We have applied a discount of " + discount + " and the total value of your purchase is " + discountPrice;
} else {
  document.getElementById('myDiv1').innerHTML = "The total value of your purchase is " + totalPrice;
}

