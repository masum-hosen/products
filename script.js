// Taking reference to the product grid element
const productGrid = document.getElementById("products");

// Fetching product data from the API
fetch("https://fakestoreapi.com/products")
  .then(response => response.json()) // Converting data to JSON
  //   .then(res => console.log(res))
  .then(products => {
    products.forEach(product => {
      // Creating a card for each product
      const productCard = document.createElement("div");
      productCard.classList.add("product");

      // The HTML structure of the product
      productCard.innerHTML = `
                <div class="img">
                <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="info">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 100)}...</p>
                <span>$${product.price}</span>
                <br>
                <div class="rat">${product.rating.rate}</div>
                </div>
                
                <br>
                <button>Add to Cart</button>
            `;

      // Adding product cards to the grid
      productGrid.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });
