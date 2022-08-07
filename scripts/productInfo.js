var ele = JSON.parse(localStorage.getItem("product"));
var cartarr = JSON.parse(localStorage.getItem("cartData")) || [];

creattable(ele);
function creattable(ele) {
    var bgdiv = document.createElement("div");
    var td1 = document.createElement("div");
    var img1 = document.createElement("img");

    img1.setAttribute("src", ele.imageURL);
    td1.append(img1);

    var td2 = document.createElement("div");
    var head1 = document.createElement("h1");
    head1.textContent = ele.productName;
    head1.setAttribute("class", "product-name");
    var smrp = document.createElement("span");
    smrp.textContent = ele.strikedPrice;
    smrp.setAttribute("class", "striked");

    var pmrp = document.createElement("span");
    pmrp.textContent = ele.price;
    pmrp.setAttribute("class", "realprice");

    var p4 = document.createElement("p");
    p4.textContent = "MRP incl. of all taxes";
    p4.style.marginBottom = 0;
    var p5 = document.createElement("p");
    p5.style.marginBottom = 0;
    p5.textContent = "Colour Natural | 0706/331";

    var select1 = document.createElement("select");
    var option1 = document.createElement("option");
    option1.text = "S (UK S)";
    select1.add(option1);
    var option2 = document.createElement("option");
    option2.text = "M (UK M)";
    select1.add(option2);
    var option3 = document.createElement("option");
    option3.text = "L (UK L)";
    select1.add(option3);
    var option4 = document.createElement("option");
    option4.text = "XL (UK XL)";
    select1.add(option4);

    var a1 = document.createElement("a");
    a1.textContent = "Check in-store availability";
    var a2 = document.createElement("a");
    a2.textContent = "Delivery, Exchanges and Returns";
    var a3 = document.createElement("a");
    a3.textContent = "Delivery, Exchanges and Returns";

    var btn = document.createElement("button");
    btn.textContent = "Add To Cart";
    btn.addEventListener("click", function () {
        cartarr.push(ele);
        localStorage.setItem("cartData", JSON.stringify(cartarr));
        alert("Added To Cart");
    });
    td2.setAttribute("class", "product-action");
    td2.append(head1, smrp, pmrp, p4, p5, select1, btn, a1, a2, a3);
    document.querySelector("#rightbox").append(td1, td2);
}