// Save product to local storage
localStorage.clear();
document.getElementById("save-product").addEventListener("click", function(){
    var productId = document.getElementById("product-id").value;
    var sellingPrice = document.getElementById("selling-price").value;
    var productName = document.getElementById("product-name").value;
    var category= document.getElementById("category").value;
    
    var product = {
      id: productId,
      price: sellingPrice,
      name: productName,
      category: category
    }
    
    localStorage.setItem(productId, JSON.stringify(product));
    displayProducts();
  });
  
  // Delete product from local storage
  function deleteProduct(productId){
    localStorage.removeItem(productId);
    displayProducts();
  }
  
  // Display stored products
  function displayProducts() {
    var productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      var product = JSON.parse(localStorage.getItem(k));
  
      var productDiv = document.createElement("div");
      productDiv.setAttribute("id", "product-" + product.id);
  
      var productId = document.createElement("p");
      productId.innerHTML = "Product ID: " + product.id;
      productDiv.appendChild(productId);
  
      var productPrice = document.createElement("p");
      productPrice.innerHTML = "Selling Price: " + product.price;
      productDiv.appendChild(productPrice);
  
      var productName = document.createElement("p");
      productName.innerHTML = "Product Name: " + product.name;
      productDiv.appendChild(productName);
  
      var productCategory = document.createElement("p");
      productCategory.innerHTML = "Category: " + product.category;
      productDiv.appendChild(productCategory);
  
      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener("click", function(){
        deleteProduct(product.id);
      });
      productDiv.appendChild(deleteBtn);
  
      productList.appendChild(productDiv);
    }
  }
  
  displayProducts();
  
