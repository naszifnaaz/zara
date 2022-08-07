var product = JSON.parse(localStorage.getItem("cartData")) || [];
displayData(product);

function deleteTask(index) {
    document.querySelector("#cartContainer").innerHTML = "";
    product.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(product));
    displayData(product);
}

function displayData(product) {
    product.map(function (elem, index) {
        var div = document.createElement("div");
        div.setAttribute("id", "boxes");
        var div2 = document.createElement("div");
        div2.setAttribute("id", "item");
        var image = document.createElement("img");
        image.setAttribute("src", elem.imageURL);
        image.setAttribute("id", "avatar");
        var div3 = document.createElement("div");
        var ref = document.createElement("p");
        ref.textContent = "REF. | 4065/412";
        ref.setAttribute("id", "ref");
        var name = document.createElement("p");
        name.textContent = elem.productName;
        name.setAttribute("id", "productName");
        var price = document.createElement("p");
        price.textContent = elem.price;
        price.setAttribute("id", "cost");
        var del = document.createElement("p");
        del.textContent = "DELETE";
        del.setAttribute("id", "del");
        del.addEventListener("click", function () {
            deleteTask(index);
        });
        div3.append(ref, name, price, del);
        div2.append(image, div3);
        div.append(div2);
        document.querySelector("#cartContainer").append(div);
    });

    var prices = [];
    product.map(function (elem) {
        var price = elem.price;
        var bag = "";
        for (var i = 0; i < price.length; i++) {
            if (price[i] == "₹" || price[i] == ",") {
                continue;
            } else if (price[i] == ".") {
                break;
            } else {
                bag = bag + price[i];
            }
        }
        prices.push(bag);
    });

    var prices = prices.map(Number);
    var total = 0;
    for (var j = 0; j < prices.length; j++) {
        total = total + prices[j];
    }
    document.querySelector("#total-amount").textContent = `₹ ${total}.00`;
}