<%--
  Created by IntelliJ IDEA.
  User: yuri
  Date: 28/05/22
  Time: 22:00
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE html>
<html lang="it">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/x-icon" href="img/website_icon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<nav>
    <div class="toggle">
        <a><i class="fa-solid fa-bars-staggered"></i></a>
    </div>
    <div class="menu">
        <!-- Sotto certe dimensioni, il carrello e l'account si spostano qui dentro -->
        <ul class = "nav-menu">
            <li class="small-screen-option"><a href="account.jsp"><b>Login</b></a></li>
            <li class="small-screen-option"><a href="#"><b>Carrello (0)</b></a></li>
            <li><a href="#"><b>Tastiere</b></a></li>
            <li><a href="#"><b>Switch</b></a></li>
            <li><a href="#"><b>Keycaps</b></a></li>
            <li><a href="#"><b>About us</b></a></li>
            <li><a href="#"><b>Contattaci</b></a></li>
        </ul>
    </div>
    <div class="container-logo">
        <a href="./">
            <img id="imgLogo" src="img/shop_icon.svg" alt="shop logo">
            <h3 id="shop_title">Qwerty Shop</h3>
        </a>
    </div>
    <div class="shop-button">
        <img src="img/keycap_icon.svg" alt="account">
        <img src="img/keycap_icon.svg" alt="carrello">
    </div>
    <div class="shop-button">
        <a href="account.jsp"><i class="fa-solid fa-user"></i></a>
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    <div class="shop-button-overlay">
        <span id="cart-count">0</span>
    </div>

</nav>
</body>
</html>
