<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>

<html>
<head>
    <title>Homepage</title>
</head>
<body>

    <div class="search-bar">
        <form action="all_products.jsp" method="get">
            <div>
                <input class="search-txt_box" type="text" placeholder="Cerca..." name="search_q">
                <button class="search-btn circle-btn" type="submit">
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

    <div class="container latest-products">
        <h1 class="center"><b>GLI ULTIMI ARRIVI</b></h1>
        <div class="products row center">    <!--Soluzione momentanea -->
        </div>
        <h2 class="center"><a href="all_products.jsp"><i class="fa-solid fa-arrow-down"></i> Mostra tutti</a></h2>
    </div>



    <!-- ~~~~~~~~~~~ -->

    <br>
    <footer>
        <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <!-- SCRIPT -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/homepage_script.js"></script>
    <script src="js/script.js"></script>
</body>
</html>