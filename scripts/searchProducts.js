//Importing render functionality
import renderProducts from "../scripts/renderProducts.js";

//Search Functionality
let query = document.getElementById("query");
query.addEventListener("input", searchQuery);

//Importing data set
let bags = JSON.parse(localStorage.getItem('bagData'));
let boys = JSON.parse(localStorage.getItem('boyData'));
let girls = JSON.parse(localStorage.getItem('girlData'));
let men = JSON.parse(localStorage.getItem('menData'));
let women = JSON.parse(localStorage.getItem('womenData'));
let shoes = JSON.parse(localStorage.getItem('shoesData'));
let allProducts = [...bags, ...boys, ...girls, ...men, ...women, ...shoes];

//Search database for products
function searchQuery() {
    let searchTerm = query.value;
    let matchingProducts = allProducts.filter((el) => {
        let product = el.productName.toLowerCase();
        return product.includes(searchTerm);
    })
    renderProducts(matchingProducts);
}