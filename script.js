/* Example script.js file for the Glitch Shop */

// Add functionality to the "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.btn-learn-more');

learnMoreButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const feature = button.closest('.feature');
    feature.classList.toggle('show-description');
  });
});

// Add functionality to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const productId = button.getAttribute('data-product-id');
    const productName = button.getAttribute('data-product-name');
    const productPrice = button.getAttribute('data-product-price');

    // TODO: Add code to add product to cart
    console.log(`Added ${productName} to cart for $${productPrice}`);
  });
});

// Add functionality to the cart button in the header
const cartButton = document.querySelector('.btn-cart');

cartButton.addEventListener('click', (event) => {
  event.preventDefault();

  // TODO: Add code to show the cart modal
  console.log('Showing cart modal');
});
