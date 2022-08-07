//Navbar Component
function navbar() {
  return `<div id="nav-bar-left">
    <div id="hamburger">
      <a href="../pages/navMenu.html"><img src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg" alt="hamburger" id="hamburger_icon"></a>
    </div>
    <div id="logo">
      <a href="../index.html">
        <img src="https://www.freepnglogos.com/uploads/zara-logo-png/zara-avrupa-logos-2020-desing--11.png" alt="favicon" id="favicon">
      </a>   
    </div>
    </div>
  </div>
  <div id="nav-bar-right">
    <div id="search_bar">
        <label class="navLabel" for="search">SEARCH</label>
        <p id="search"></p>
    </div>
    <div id="nav-items">
      <ul>
        <li class="nav_item"><a class="navLinks" href=""></a> </li>
        <li class="nav_item" id="help"><a class="navLinks" href="">HELP</a> </li>
        <li class="nav_item" id="last-nav"><a class="navLinks" href="../pages/userCart.html">CART</a> </li>
      </ul>
    </div>
  </div>`
}

export default navbar;