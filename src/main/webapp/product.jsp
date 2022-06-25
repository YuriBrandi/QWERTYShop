<%@ page import="Model.Prodotto" %>
<%@ page import="java.io.PrintWriter" %>
<%@ include file="WEB-INF/header.jsp"%>

<html>
<head>

    <%
        Prodotto p = (Prodotto) request.getAttribute("prodotto");
    %>
    <title><%= p.getNome()%></title>
</head>
<body>

    <div class="container margin-from-nav">

        <div class="row">
            <div class="col col-lg-4 col-xs-12">
                <img src="<%= p.getPathImg()%>" alt="" class = "img-product-page">
            </div>
            <div class="col col-lg-8 col-xs-12">
                <h2 class="center"><%= p.getNome()%></h2>
                <p><b>Marca</b>: <%= p.getMarca()%></p>
                <p><b>Descrizione</b>: <%= p.getDescrizione()%></p>
                <%if (p.getCategoria().equals("Tastiera")) { %>
                    <p><b>Layout</b>: <%= p.getKeyboardLayout()%></p>
                    <p><b>Dimensione</b>: <%= p.getKeyboardSize()%>%</p>
                <%} %>
                <%if (p.isRGB()) {%>
                    <p><b>RGB</b>: <%= "Si" %></p>
                <%} else { %>
                    <p><b>RGB</b>: <%= "No" %></p>
                <%} %>
            </div>
        </div>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>
</html>
