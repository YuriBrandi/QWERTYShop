<%@ page import="Model.*" %><%--
  Created by IntelliJ IDEA.
  User: yuri
  Date: 19/06/22
  Time: 12:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>

<%
    if(u == null)
        response.sendRedirect("account.jsp");
%>
<html>
<head>
    <title>Ciao ${utente.nome}</title>
</head>
<body>

    <div class="container margin-from-nav center">
        <h2>
            <form action="logout-user">
                Benvenuto, ${utente.nome} ${utente.cognome}
                <button class="circle-btn" type="submit"><i class="fa-solid fa-sign-out"></i></button>
            </form>
        </h2>

        <h3>e-mail: <span class="email">${utente.email}</span></h3>
        <br>

        <div>
            <input type="text" class="input-txt_fld add_fld" placeholder="Aggiugi indirizzo">&nbsp;&nbsp;
            <button class="add-btn circle-btn"><i class="fa-solid fa-plus"></i></button>
            <p id="err_msg"></p>
            <p id="succ_msg">${succ_msg}</p>
        </div>
        <br><br>
        <table class="table">
            <tr>
                <th>I miei indirizzi:</th>
                <th>Azioni</th>
            </tr>
        </table>

        </br></br></br>
        <h2 class="center">Ordini:</h2>
        <table class="table admin-mode">
            <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Indirizzo</th>
                <th>Importo</th>
                <th>#Tracking</th>
                <th>Azioni</th>
            </tr>
            <%
                if(u != null){
                    ArrayList<Ordine> ordini = new OrdineDAO().doRetrieveAllByEmail(u.getEmail());
                    for(Ordine o : ordini){
            %>
                    <tr>
                        <td class="id_ord"><%= o.getIdOrdine()%></td>
                        <td><%= o.getDataOrdine()%></td>
                        <td><%= o.getIndirizzoSpedizione()%></td>
                        <td class="tot_ord"><%= String.format("%.2f", o.getPrezzoFinale())%>€</td>
                        <td><%= o.getTracking()%></td>
                        <td>
                            <button class="circle-btn mostra_dett"><i class="fa-solid fa-eye"></i></button>
                        </td>
                    </tr>
            <%}}%>
        </table>
    </div>

    <div class="modal-overlay center">
        <div class="modal-content">
            <div class="close-mod">
                <a href="#" class="close-modal"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <h2>Titolo</h2>
            <table class="table">
                <tr>
                    <th>Prodotto</th>
                    <th>Quantità</th>
                </tr>
            </table>
            <h3>Totale</h3>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <script src="js/userpage_script.js"></script>
</body>
</html>
