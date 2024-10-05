// Get the search input field and products container
const searchInput = document.getElementById('search-input');
const productsContainer = document.getElementById('products-container');

// Add an event listener to the search input field
searchInput.addEventListener('input', () => {
    // Get the search input value
    const searchValue = searchInput.value.toLowerCase();

    // Get all products
    const products = productsContainer.children;

    // Loop through each product
    for (let i = 0; i < products.length; i++) {
        // Get the product name
        const productName = products[i].getAttribute('data-name').toLowerCase();

        // Check if the product name includes the search value
        if (productName.includes(searchValue)) {
            // Show the product
            products[i].style.display = 'block';
        } else {
            // Hide the product
            products[i].style.display = 'none';
        }
    }
});