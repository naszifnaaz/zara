var currentUser = JSON.parse(localStorage.getItem("kyc"));
console.log(currentUser);

var box_1 = document.createElement("div");
var delivery_title = document.createElement("p");
delivery_title.setAttribute("class", "delivery");
delivery_title.textContent = "DELIVERY";

var delivey_details = document.createElement("div");
delivey_details.setAttribute("class", "delivery_details");
delivey_details.textContent =
    "STANDARD HOME SHIPPING · THURSDAY 27, JANUARY - TUESDAY 01, FEBRUARY";

var delivery_desc = document.createElement("div");
delivery_desc.setAttribute("class", "delivery_desc");
delivery_desc.textContent = "TRANSPORT RESTRICTIONS MAY APPLY TO SOME AREAS";

var userDetails = document.createElement("div");
userDetails.setAttribute("class", "userDetails");

var user_details = document.createElement("p");
user_details.setAttribute("class", "delivery");
user_details.textContent = "SHIPPING DETAILS";

var user_name = document.createElement("p");
user_name.setAttribute("class", "user");
user_name.textContent = currentUser[0].username;

var address = document.createElement("p");
address.setAttribute("class", "user");
address.textContent = currentUser[0].Address;

var address_2 = document.createElement("p");
address_2.setAttribute("class", "user");
address_2.textContent = currentUser[0].Addaddress;

var pin = document.createElement("p");
pin.setAttribute("class", "user");
pin.textContent = currentUser[0].Pincode;

var locality = document.createElement("p");
locality.setAttribute("class", "user");
locality.textContent = currentUser[0].Locality;

var state = document.createElement("p");
state.setAttribute("class", "user");
state.textContent = currentUser[0].State;

var phone = document.createElement("p");
phone.setAttribute("class", "user");
phone.textContent = currentUser[0].Mobile;

var email = document.createElement("p");
email.setAttribute("class", "user");
email.textContent = currentUser[0].Email;

var payment_method = document.createElement("p");
payment_method.setAttribute("class", "delivery");
payment_method.textContent = "PAYMENT METHOD";

var payment_image = document.createElement("img");
payment_image.setAttribute(
    "src",
    "https://static.zara.net/static/images/payment/payment/upi.svg"
);

userDetails.append(
    user_details,
    user_name,
    address,
    address_2,
    pin,
    locality,
    state,
    phone,
    email
);

box_1.append(
    delivery_title,
    delivey_details,
    delivery_desc,
    userDetails,
    payment_method,
    payment_image
);


var box_2 = document.createElement("div");
var cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
var box_2_1 = document.createElement("div");
var delivery_2 = document.createElement("p");
delivery_2.setAttribute("class", "delivery_2");
delivery_2.textContent =
    "DELIVERY THURSDAY 27, JANUARY - TUESDAY 01, FEBRUARY";

var numOfCartItems = document.createElement("p");
numOfCartItems.setAttribute("id", "numOfCart");
var products_num = document.createElement("span");
products_num.setAttribute("class", "products_num");
products_num.textContent = cartItems.length;

var products_text = document.createElement("span");
products_text.setAttribute("class", "products_num");
products_text.textContent = " PRODUCTS";

numOfCartItems.append(products_num, products_text);

var product_images = document.createElement("div");
product_images.setAttribute("id", "imageflex");
cartItems.map(function (elem) {
    var image = document.createElement("img");
    image.setAttribute("src", elem.imageURL);
    image.setAttribute("class", "productImage");
    product_images.append(image);
});

box_2.append(delivery_2, numOfCartItems, product_images);
document.querySelector("#container").append(box_1, box_2);

var prices = [];
cartItems.map(function (elem) {
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

var total_field = (document.getElementById(
    "#total_price"
).textContent = `₹ ${total}.00`);
console.log(total_field);

function paymentSuccess() {
    alert('Thanks for shopping with ZARA!')
    localStorage.removeItem('cartData');
    window.location.href = "../index.html";
}