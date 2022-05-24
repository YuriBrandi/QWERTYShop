<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Homepage</title>
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
                <li class="small-screen-option"><a href="#"><b>Login</b></a></li>
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
            <a href="#"><i class="fa-solid fa-user"></i></a>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
        <div class="shop-button-overlay">
            <span id="cart-count">0</span>
        </div>

    </nav>

    <div class="search-bar">
        <form>
            <div>
                <input class="search-txt_box" type="text" placeholder="Cerca...">
                <button class="search-btn" type="submit">
                    <i class="fa-solid fa-search"></i>
                </button>
            </div>

        </form>
    </div>


    <!-- CAROUSEL -->

    <div class="container">
        <div id="carousel">
            <div class="slide-image" id="slide1">
                <h1><b>QWERTY Shop</b></h1>
                <p>Il negozio di tastiere meccaniche a dettaglio NUMERO UNO!</p>
            </div>
            <div class="slide-image" id="slide2">
                <h1>SWITCH</h1>
                <p>Switch di tutti i tipi li trovi qui!</p>
            </div>
            <div class="slide-image" id="slide3">
                <h1>KEYCAPS</h1>
                <p>Ampia scelta di set ISO e ANSI</p>
            </div>
        </div>
    </div>

    <!-- ~~~~~~~~~~~ -->

    <!-- CONTENUTI GENERALI -->

    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-12 center">
                <h3><b><i class="fa-solid fa-earth-europe big-icon black"></i></b></h3>
                <br>
                <h2>Spedizioni in tutto il mondo</h2>
                <p>Spediamo in tutto il mondo, alcuni paesi dell'UE hanno la spedizione gratuita. I pacchi vengono inviati tramite DPD, DHL o Deutsche Post con tracciabilità.</p>
            </div>
            <div class="col-lg-4 col-sm-12 center">
                <h3><b><i class="fa-solid fa-shield-halved big-icon black"></i></b></h3>
                <br>
                <h2>Garanzia</h2>
                <p>Offriamo 2 anni di garanzia su tutti i prodotti. Se la vostra tastiera ha un problema, ve lo risolveremo in pochissimo tempo! Se la riparazione richiede molto tempo, vi forniremo anche una scheda sostitutiva gratuita.</p>
            </div>
            <div class="col-lg-4 col-sm-12 center">
                <h3><b><i class="fa-solid fa-headset big-icon black"></i></b></h3>
                <br>
                <h2>Supporto 24h 7/7</h2>
                <p>Non mordiamo! Avete bisogno di aiuto per scegliere la tastiera ideale? Avete problemi? Rispondiamo immediatamente o entro 12 ore.</p>
            </div>
        </div>
    </div>


    <!-- ~~~~~~~~~~~ -->

    <br>
    <footer>
        <p id="credits">© Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <!-- SCRIPT -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>
</html>