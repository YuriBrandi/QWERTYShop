<%@ page import="Model.Prodotto" %><%--
  Created by IntelliJ IDEA.
  User: yuri
  Date: 15/06/22
  Time: 19:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>
<html>
<head>
    <title>Carrello</title>
</head>
<body>

    <div class="container center margin-from-nav">

        <%
            ArrayList<ContenutoCarrello> cart_list = null;
            if(session.getAttribute("carrello_guest") != null)
                cart_list = (ArrayList<ContenutoCarrello>) session.getAttribute("carrello_guest");

            boolean isCartEmpty = false;
            if(cart_list == null || cart_list.size() == 0){
                isCartEmpty = true;
        %>
            <h2 id="empty_msg">Il Carrello è vuoto.</h2>
        <%
            }
            else{
        %>

        <table class="table">
            <tr>
                <th>Nome</th>
                <th>Quantità</th>
                <th>Prezzo</th>
                <th>Azione</th>
            </tr>
            <%

                    for(ContenutoCarrello cart_item : cart_list){
                        Prodotto prod = cart_item.getProdotto();
            %>
                <tr>
                    <td><%= prod.getNome() %></td>
                    <td>
                        <button class="remove-btn circle-btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <input type="text" class="input-txt_fld quantity_fld" value = "<%= cart_item.getQuantita() %>" readonly>
                        <button class="add-btn circle-btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </td>
                    <input type="hidden" name="prod_id" value = "<%= prod.getIdProdotto() %>">
                    <td class="item_price"><%= cart_item.getQuantita() * prod.getPrezzoScontato() %></td>
                    <td>
                        <button class="delete-btn circle-btn">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            <% }%>
        </table>
        <% }%>
    </div>

    <%
        if(!isCartEmpty){
    %>
    <div class="container">
        <div class="center">
            <h2 id="totale"></h2>
            <button class="form-submit"><i class="fa-solid fa-eraser"></i>&nbsp; Svuota Carrello</button> </br></br>
            <form method="get" action="create-order">
                <button class="form-submit" type="submit"><i class="fa-solid fa-box-open"></i>&nbsp; Crea Ordine</button>
            </form>

        </div>
    </div>
    <% }%>

    <footer>
      <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <script src="js/cart_script.js"></script>
</body>
</html>
