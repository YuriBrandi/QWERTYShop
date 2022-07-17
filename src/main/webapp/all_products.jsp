<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>
<html>
<head>
    <title>Tutti i prodotti</title>
</head>
<body>
    <%
        String search_q = "";
        String categ = "";

        if(request.getParameter("search_q") != null)
            search_q = request.getParameter("search_q");

        if(request.getParameter("categ") != null)
            categ = request.getParameter("categ");
    %>
    <div class="container margin-from-nav center">
        <h1 class="center"><b>Tutti i prodotti</b></h1>

        <div class="search-bar">
            <form>
                <div>
                    <input class="search-txt_box" type="text" placeholder="Cerca..." value="<%= search_q %>">
                    <button class="search-btn circle-btn" type="submit">
                        <i class="fa-solid fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
        <div class="filter row center-div">
            <div class="col-lg-3 col-sm-12">
                <select class="input-txt_fld table-input" name="order">
                    <option value="idDesc" selected>Più Recente</option>
                    <option value="idAsc">Meno Recente</option>
                    <option value="nomeAsc">Nome Ascendete</option>
                    <option value="nomeDesc">Nome Discendente</option>
                    <option value="prezzoAsc">Prezzo Ascendete</option>
                    <option value="prezzoDesc">Prezzo Discendente</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select class="input-txt_fld table-input" name="categ">
                    <%
                        switch (categ){
                            case "Tastiera": {%>
                                <option value="" disabled>Categoria</option>
                                <option value="Tastiera" selected>Tastiere</option>
                                <option value="Switch">Switch</option>
                                <option value="Keycap">Keycap</option>
                            <%}break;
                            case "Switch": {%>
                                <option value="" disabled>Categoria</option>
                                <option value="Tastiera">Tastiere</option>
                                <option value="Switch" selected>Switch</option>
                                <option value="Keycap">Keycap</option>
                            <%}break;
                            case "Keycap": {%>
                                <option value="" disabled>Categoria</option>
                                <option value="Tastiera">Tastiere</option>
                                <option value="Switch">Switch</option>
                                <option value="Keycap" selected>Keycap</option>
                            <%}break;
                            default: {%>
                                <option value="" disabled selected>Categoria</option>
                                <option value="Tastiera">Tastiere</option>
                                <option value="Switch">Switch</option>
                                <option value="Keycap">Keycap</option>
                            <%}
                        }%>
                    <option value="">Tutte</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select class="input-txt_fld table-input" name="rgb">
                    <option value="" disabled selected>RGB</option>
                    <option value="1">Sì</option>
                    <option value="0">No</option>
                    <option value="">Tutti</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select disabled class="input-txt_fld table-input" name="hotswappable">
                    <option value="" disabled selected>Tastiera HotSwappable</option>
                    <option value="1">Sì</option>
                    <option value="0">No</option>
                    <option value="">Tutti</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select disabled class="input-txt_fld table-input" name="dimensione">
                    <option value="" disabled selected>Dimensione Tastiera</option>
                    <option value="20">20%</option>
                    <option value="60">60%</option>
                    <option value="65">65%</option>
                    <option value="75">75%</option>
                    <option value="80">80%</option>
                    <option value="95">95%</option>
                    <option value="100">100%</option>
                    <option value="">Tutti</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select disabled class="input-txt_fld table-input" name="layout">
                    <option value="" disabled selected>Layout</option>
                    <option value="ISO">ISO</option>
                    <option value="ANSI">ANSI</option>
                    <option value="">Tutti</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select disabled class="input-txt_fld table-input" name="switch">
                    <option value="" disabled selected>Tipo Switch</option>
                    <option value="Barebone">Barebone</option>
                    <option value="Tactile">Tattile</option>
                    <option value="Linear">Lineare</option>
                    <option value="Clicky">Clicky</option>
                    <option value="">Tutti</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-12">
                <select disabled class="input-txt_fld table-input" name="profilo">
                    <option value="" disabled selected>Profilo Keycap</option>
                    <option value="Cherry">Cherry</option>
                    <option value="OEM">OEM</option>
                    <option value="XDA">XDA</option>
                    <option value="DSA">DSA</option>
                    <option value="SA">SA</option>
                    <option value="KAT">KAT</option>
                    <option value="KAM">KAT</option>
                    <option value="MT3">MT3</option>
                    <option value="">Tutti</option>
                </select>
            </div>



        </div>
        <h3 class="info_msg"></h3>
    </div>

    <div class="products row center">    <!--Soluzione momentanea -->
    </div>

    <footer>
        <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/allproducts_script.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
