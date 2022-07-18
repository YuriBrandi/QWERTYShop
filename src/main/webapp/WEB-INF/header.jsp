<%@ page import="Model.Utente" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="Model.Carrello" %>
<%@ page import="Model.CarrelloDAO" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

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
            <li><a href="./"><b>Home</b></a></li>

            <li class="small-screen-option"><a href="account.jsp"><b>
                <%
                    Utente u = null;
                    if(session.getAttribute("utente") != null){
                        u = (Utente) session.getAttribute("utente");
                %>
                    <%= u.getNome() %>
                <%}
                    else {%>
                        Login
                    <%}%>
            </b></a></li>
            <%
                int cont = 0;
                if(session.getAttribute("cart_count") != null)
                    cont = (Integer) session.getAttribute("cart_count");
                else if(session.getAttribute("carrello_guest") != null){
                    ArrayList<Carrello> cart_list = (ArrayList<Carrello>) session.getAttribute("carrello_guest");
                    for(Carrello c_item : cart_list)
                        cont += c_item.getQuantita();
                }

            %>
            <li class="small-screen-option"><a href="shopping_cart.jsp"><b>Carrello (<%= cont %>)</b></a></li>
            <li><a href="all_products.jsp"><b>Tutti i prodotti</b></a></li>
            <li><a href="all_products.jsp?categ=Tastiera"><b>Tastiere</b></a></li>
            <li><a href="all_products.jsp?categ=Switch"><b>Switch</b></a></li>
            <li><a href="all_products.jsp?categ=Keycap"><b>Keycaps</b></a></li>
            <li><a href="about_us.jsp"><b>About us & Contatti</b></a></li>
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
        <a href="account.jsp">
            <%
                if(u != null){
            %>
                <b><%=u.getNome().charAt(0)%></b>
                <%}
                else {%>
                <i class="fa-solid fa-user"></i>
                <%}%>
        </a>
        <a href="shopping_cart.jsp"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    <div class="shop-button-overlay">
        <span id="cart-count">
            <%= cont %>
        </span>
    </div>

</nav>

</body>
</html>
