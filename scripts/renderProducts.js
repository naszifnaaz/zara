//Render Products to DOM

function renderProducts(globalData, query) {
    document.querySelector("#container").innerHTML = null;
    if (query) {
        globalData = globalData.filter(function (elem) {
            return elem.itemCategory == query;
        })

        globalData.map(function (elem) {
            let div = document.createElement("div");
            div.setAttribute("class", "box");

            let image = document.createElement("img");
            image.setAttribute("src", elem.imageURL);
            image.setAttribute("class", "productImage");

            image.addEventListener("click", function () {
                localStorage.setItem("product", JSON.stringify(elem));
                window.location.href = "../pages/productDesc.html";
            })

            let title = document.createElement("p");
            title.textContent = elem.productName;
            title.setAttribute("class", "productTitle");

            let price = document.createElement("p");
            price.textContent = elem.price;
            price.setAttribute("class", "productPrice")

            let striked = document.createElement("h5");
            striked.textContent = elem.strikedPrice;
            striked.setAttribute("class", "productStrikedPrice");

            let price_div = document.createElement("div");
            price_div.setAttribute("class", "priceFlex");
            price_div.append(striked, price);

            div.append(image, title, price_div);
            document.querySelector("#container").append(div);
        })
    }
    else {
        globalData.map(function (elem) {
            let div = document.createElement("div");
            div.setAttribute("class", "box");

            let image = document.createElement("img");
            image.setAttribute("src", elem.imageURL);
            image.setAttribute("class", "productImage");

            image.addEventListener("click", function () {
                localStorage.setItem("product", JSON.stringify(elem));
                window.location.href = "../pages/productDesc.html";
            })

            let title = document.createElement("p");
            title.textContent = elem.productName;
            title.setAttribute("class", "productTitle");

            let price = document.createElement("p");
            price.textContent = elem.price;
            price.setAttribute("class", "productPrice")

            let striked = document.createElement("h5");
            striked.textContent = elem.strikedPrice;
            striked.setAttribute("class", "productStrikedPrice");

            let price_div = document.createElement("div");
            price_div.setAttribute("class", "priceFlex");
            price_div.append(striked, price);

            div.append(image, title, price_div);
            document.querySelector("#container").append(div);
        })
    }
}

export default renderProducts;