<%--
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
        <h2>Benvenuto, ${utente.nome} ${utente.cognome}</h2>

        <h3>e-mail: ${utente.email}</h3>
        <br>

        <table class="table">
            <tr>
                <th>I miei indirizzi:</th>

                <th>
                    <button class="add-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </th>

            </tr>
            <tr>
                <td>
                    <input type="text" class="input-txt_fld add_fld" value = "Viale dei vecchi cazzi 16, Salerno 344534">
                </td>
                <td>
                    <button class="delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        </table>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <script src="js/address_page.js"></script>
</body>
</html>
