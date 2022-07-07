<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="Model.Prodotto" %>
<%@ include file="WEB-INF/header.jsp"%>

<html>
<head>

    <%
        Prodotto p = (Prodotto) request.getAttribute("prodotto");
    %>
    <title><%=p.getNome()%></title>
</head>
<body>

    <div class="container margin-from-nav">

        <div class="row">
            <div class="col col-lg-4 col-xs-12">
                <img src="<%= p.getPathImg()%>" alt="" class = "img-product-page">
            </div>
            <div class="col col-lg-8 col-xs-12">
                <h2 class="center"><%= p.getNome()%></h2>
                <h3><b>Marca</b>: <%= p.getMarca()%></h3>
                <%
                    switch(p.getCategoria()) {
                        case "Tastiera" : {
                %>
                    <h3><b>Layout</b>: <%= p.getKeyboardLayout()%></h3>
                    <h3><b>Dimensione</b>: <%= p.getKeyboardSize()%>%</h3>
                    <%if (p.isHotSwappable()) {%>
                        <h3><b>HotSwappable</b>: <i class="fa-solid fa-check"></i></h3>
                    <%} else { %>
                        <h3><b>HotSwappable</b>: <i class="fa-solid fa-xcross"></i></h3>
                    <%} %>
                <%
                        }break;
                    case "Switch": {
                %>
                    <h3><b>Tipologia Switch</b>: <%= p.getTipoSwitch()%></h3>
                <%
                        }break;
                    case "Keycap": {
                %>
                    <h3><b>Materiale</b>: <%= p.getKeycapMaterial()%></h3>
                    <h3><b>Profilo</b>: <%= p.getKeycapProfile()%>%</h3>
                <%
                        }break;
                    }%>

                <%if (p.isRGB()) {%>
                    <h3><b>RGB</b>: <i class="fa-solid fa-check"></i></h3>
                <%} else { %>
                    <h3><b>RGB</b>: <i class="fa-solid fa-xcross"></i></h3>
                <%} %>
                <p><b>Descrizione:</b> <%= p.getDescrizione()%></p>
                <%if (p.getPercSconto() == 0) {%>
                    <h3><b>Prezzo</b>: <%= p.getPrezzo()%>&euro;</h3>
                <%} else {%>
                    <h3>
                        <b>Prezzo:</b> <del><%= p.getPrezzo()%>&euro;</del>  (-<%= p.getPercSconto() %>%)
                        <i class="fa-solid fa-arrow-right"></i>  <%= p.getPrezzoScontato()%>&euro;
                    </h3>
                <%}%>
                <form method="get" action="add-to-cart">
                    <input type="hidden" name="id" value="<%= p.getIdProdotto()%>">

                    <button type="button" class="remove-btn circle-btn">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" class="input-txt_fld quantity_fld" name="qnty" value = "1" readonly>
                    <button type="button" class="add-btn circle-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    &nbsp;&nbsp;

                    <% if(p.getPezziDisponibili() > 0){ %>
                        <button class="form-submit" type="submit"><i class="fa-solid fa-cart-arrow-down"></i>  Aggiungi al carrello</button>
                        <% if(p.getPezziDisponibili() < 10)
                            out.write("</br></br>Affrettati! Solo " + p.getPezziDisponibili() + " pezzi disponibili.");
                    } else
                        out.write("Non disponibile");%>
                </form>
            </div>
        </div>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/cart-script.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
