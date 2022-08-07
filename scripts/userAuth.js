var regUsers = JSON.parse(localStorage.getItem("userData")) || [];
var cartData = [];
localStorage.setItem("cartData", JSON.stringify(cartData));
localStorage.removeItem('kyc');

document.querySelector("form").addEventListener("submit", loginaccount);

function loginaccount(event) {
    event.preventDefault();

    var email = document.querySelector("#mail").value;
    var password = document.querySelector("#pwd").value;

    var count = 0;
    for (var i = 0; i < regUsers.length; i++) {
        if (regUsers[i].Email == email && regUsers[i].Password == password) {
            alert("Login Successful!");
            var customer = [];
            cobj = {
                Email: regUsers[i].Email,
                Password: regUsers[i].Password,
                username: regUsers[i].username,
                Pincode: regUsers[i].Pincode,
                Address: regUsers[i].Address,
                Addaddress: regUsers[i].Addaddress,
                Locality: regUsers[i].Locality,
                State: regUsers[i].State,
                Prefix: regUsers[i].Prefix,
                Mobile: regUsers[i].Mobile,
            };
            customer.push(cobj);
            localStorage.setItem("kyc", JSON.stringify(customer));
            window.location.href = "../index.html";
        } else {
            count++;
        }
    }

    if (count == regUsers.length) {
        alert("Invalid user credentials!");
    }
}

document.getElementById("create").addEventListener("click", regPage);

function regPage() {
    window.location.href = "userSignUp.html";
}