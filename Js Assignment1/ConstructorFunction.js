// Define a constructor function for Product
function Product(name, category, image, price, gender, sold) {
    this.name = name;
    this.category = category;
    this.image = image;
    this.price = price;
    this.gender = gender;
    this.sold = sold || false; // default to false if not provided
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').value;
    const price = parseFloat(document.getElementById('price').value);
    const gender = document.getElementById('gender').value;
    const sold = document.getElementById('sold').checked;

    // Create a new Product object
    const newProduct = new Product(name, category, image, price, gender, sold);

    // Retrieve existing products from local storage or initialize empty array
    let products = JSON.parse(localStorage.getItem('Products')) || [];

    // Add the new product to the array
    products.push(newProduct);

    // Store updated products array back to local storage
    localStorage.setItem('Products', JSON.stringify(products));

    // Optionally, clear the form fields after submission
    document.getElementById('productForm').reset();

    // Optionally, inform the user that the product was added
    alert('Product added successfully!');
}

// Event listener for form submission
document.getElementById('productForm').addEventListener('submit', handleSubmit);
