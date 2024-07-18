document.addEventListener('DOMContentLoaded', function() {
    // Function to display products from local storage
    function displayProducts() {
        const products = JSON.parse(localStorage.getItem('Products')) || [];

        // Clear existing product list
        const productList = document.getElementById('productList');
        productList.innerHTML = '';

        // Update product count
        const productCount = document.getElementById('productCount');
        productCount.textContent = products.length;

        // Loop through products and create HTML elements
        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('product');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
                <p>Gender: ${product.gender}</p>
                <p>Sold: ${product.sold ? 'Yes' : 'No'}</p>
                <button class="remove" data-index="${index}">Remove</button>
                <button class="sold" data-index="${index}">Toggle Sold</button>
            `;
            productList.appendChild(productItem);

            // Add event listeners for remove and sold toggle buttons
            productItem.querySelector('.remove').addEventListener('click', function() {
                // Remove product from array
                products.splice(index, 1);
                // Update local storage
                localStorage.setItem('Products', JSON.stringify(products));
                // Update UI
                displayProducts();
            });

            productItem.querySelector('.sold').addEventListener('click', function() {
                // Toggle sold status
                products[index].sold = !products[index].sold;
                // Update local storage
                localStorage.setItem('Products', JSON.stringify(products));
                // Update UI
                displayProducts();
            });
        });
    }

    // Initial call to display products
    displayProducts();
});
