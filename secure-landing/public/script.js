const products = [
  { title: "Mig-23", price: "$19.99", image: "res/p1.jpg" },
  { title: "Type 59 Tank Winter Camouflage", price: "$29.99", image: "res/p2.jpg" },
  // Add more products here
];

// Function to preload images
function preloadImages() {
  products.forEach((product) => {
    const img = new Image();
    img.src = product.image;
  });
}

// Function to display all products in the product list
function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productBox = `
      <div class="product-box">
        <div class="product-image" style="background-image: url('${product.image}')"></div>
        <h3>${product.title}</h3>
        <p>${product.price}</p>
      </div>
    `;
    productList.innerHTML += productBox;
  });
}

// Function to search and display matching products based on search input
function searchProducts() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productBox = `
      <div class="product-box">
        <div class="product-image" style="background-image: url('${product.image}')"></div>
        <h3>${product.title}</h3>
        <p>${product.price}</p>
      </div>
    `;
    productList.innerHTML += productBox;
  });
}

// Preload images and display all products
preloadImages();
displayProducts();
