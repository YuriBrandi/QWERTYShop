<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="Model.Prodotto" %>
<%@ page import="java.text.DecimalFormat" %>
<%@ include file="header.jsp"%>

<html>
<head>

    <%
        DecimalFormat df = new DecimalFormat("0.00");
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
                        <h3><b>HotSwappable</b>: <i class="fa-solid fa-xmark"></i></h3>
                    <%} %>
                <%
                        } //Rimosso break per stamapre la tipologia switch anche per tastiera
                    case "Switch": {
                %>
                    <h3><b>Tipologia Switch</b>: <%= p.getTipoSwitch()%></h3>
                <%
                        }break;
                    case "Keycap": {
                %>
                    <h3><b>Materiale</b>: <%= p.getKeycapMaterial()%></h3>
                    <h3><b>Profilo</b>: <%= p.getKeycapProfile()%></h3>
                <%
                        }break;
                    }%>

                <%if (p.isRGB()) {%>
                    <h3><b>RGB</b>: <i class="fa-solid fa-check"></i></h3>
                <%} else { %>
                    <h3><b>RGB</b>: <i class="fa-solid fa-xmark"></i></h3>
                <%} %>
                <p><b>Descrizione:</b> <%= p.getDescrizione()%></p>
                <%if (p.getPercSconto() == 0) {%>
                    <h3><b>Prezzo</b>: <%= p.getPrezzo()%>&euro;</h3>
                <%} else {%>
                    <h3>
                        <b>Prezzo:</b> <del><%= p.getPrezzo()%>&euro;</del>  (-<%= p.getPercSconto() %>%)
                        <i class="fa-solid fa-arrow-right"></i>  <%= df.format(p.getPrezzoScontato())%>&euro;
                    </h3>
                <%}%>
                <form method="get" action="add-to-cart">
                    <input type="hidden" name="id" value="<%= p.getIdProdotto()%>">

                    <button type="button" class="remove-btn circle-btn" disabled>
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" class="input-txt_fld quantity_fld" name="qnty" value = "1" readonly>
                    <input type="hidden" name="disp" value = "<%= p.getPezziDisponibili()%>">
                    <button type="button" class="add-btn circle-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    &nbsp;&nbsp;

                    <%
                        boolean posso_aggiungere = true;
                        int inCart_qnty = 0;


                        if(cart_list != null)
                            for(Carrello item: cart_list)
                                if (item.getIdProdotto() == p.getIdProdotto()) {
                                    if(item.getQuantita() >= p.getPezziDisponibili())
                                        posso_aggiungere = false;

                                    inCart_qnty = item.getQuantita();
                                    break;
                                }
                    %>
                    <input type="hidden" name="cart_qnty" value = "<%= inCart_qnty %>">
                    <%
                        if(p.getPezziDisponibili() > 0 && posso_aggiungere){
                    %>

                        <button class="form-submit" type="submit"><i class="fa-solid fa-cart-arrow-down"></i>  Aggiungi al carrello</button>
                        <% if(p.getPezziDisponibili() < 10)
                            if(p.getPezziDisponibili() == 1)
                                out.write("</br></br>Affrettati! Ultimo disponibile!");
                            else
                                out.write("</br></br>Affrettati! Solo " + p.getPezziDisponibili() + " pezzi disponibili.");
                    } else
                        out.write("Non disponibile");%>
                </form>
            </div>
        </div>

    </div>
    <footer>
        <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/productpage_script.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
