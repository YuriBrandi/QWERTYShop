<%@ page import="Model.*" %><%--
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

        <table class="table admin-mode">
            <tr>
                <th>Nome</th>
                <th>Quantità</th>
                <th>Prezzo</th>
                <th>Azione</th>
            </tr>
        </table>
    </div>



    <div class="container">
        <div class="center">
            <h2 id="totale"></h2>
            <button id="svuota_cart" class="form-submit"><i class="fa-solid fa-eraser"></i>&nbsp; Svuota Carrello</button> </br></br>
            <form method="get" action="create-order">
                <%
                  if(session.getAttribute("utente") != null){
                      Utente usr = (Utente) session.getAttribute("utente");
                      ArrayList<Indirizzo> add_list = new IndirizzoDAO().doRetrieveAllByEmail(usr.getEmail());
                %>
                    <select name="sel_addr" class="input-txt_fld" required>
                        <option value="inv" disabled selected>Seleziona un indirizzo di spedizione</option>
                        <%
                            for(Indirizzo ind : add_list)
                                out.write("<option value=\"" + ind.indirizzo + "\">" + ind.indirizzo + "</option>");
                        %>
                    </select>
                    </br></br>
                <%}%>
                <button class="form-submit" type="submit"><i class="fa-solid fa-box-open"></i>&nbsp; Crea Ordine</button>
            </form>
            <p id="err_msg">
                ${error_message}
            </p>
        </div>
    </div>

    <footer>
      <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <script src="js/cart_script.js"></script>
</body>
</html>
