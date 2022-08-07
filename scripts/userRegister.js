document.querySelector("form").addEventListener("submit", createaccount);
var userdata = JSON.parse(localStorage.getItem("userData")) || [];
function createaccount() {
    event.preventDefault();

    var email = document.querySelector("#eemail").value;
    var pw = document.querySelector("#Password").value;
    var rpw = document.querySelector("#RPassword").value;
    if ((pw != rpw) & (pw != "")) {
        alert("Password match error");
        return;
    }
    var name = document.querySelector("#user_name").value;
    var pincode = document.querySelector("#pincode").value;
    var address = document.querySelector("#address").value;
    var addadress = document.querySelector("#add_address").value;
    var locality = document.querySelector("#locality").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("select").value;
    var prefix = document.querySelector("#prefix").value;
    var mobile = document.querySelector("#mobile").value;
    var promoemail = document.querySelector("#promoemail").value;
    var tcbox = document.querySelector("#tc").value;
    var obj = {
        Email: email,
        Password: pw,
        username: name,
        Pincode: pincode,
        Address: address,
        Addaddress: addadress,
        Locality: locality,
        State: state,
        Prefix: prefix,
        Mobile: mobile,
        Promoemail: promoemail,
        tcbox: tcbox,
    };
    console.log(obj);
    userdata.push(obj);
    localStorage.setItem("userData", JSON.stringify(userdata));

    alert("User registered successfully!");
    window.location.href = "userLogin.html";
}