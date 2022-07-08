<%@ page import="java.io.File" %><%--
  Created by IntelliJ IDEA.
  User: yuri
  Date: 27/06/22
  Time: 13:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>

<%
    if(u == null)
        response.sendRedirect("account.jsp");
    else if(!u.isAdmin())
        response.sendRedirect("user_page.jsp");
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

    <form  id="upload-img" enctype='multipart/form-data'>
        <div>
            <h3>Carica immagine:</h3>
            <input class="form-submit" type="file" id="img-upl" name="image" accept="image/*">&nbsp;
            <button class="add-btn circle-btn" id="upload-image-button"><i class="fa-solid fa-upload"></i></button>
            <p id="err_msg"></p>
        </div>
    </form>

    <br><br>
    <h2>Interfaccia amministratore:</h2>
    <h4>(*)Applicabili solo da alcune categorie</h4>
    <table class="table admin-mode">
        <tr>
            <th>ID Prodotto</th>
            <th>Pezzi Disponibili</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Prezzo (&euro;)</th>
            <th>Sconto (%)</th>
            <th>Immagine</th>
            <th>Descrizione</th>
            <th>Categoria</th>
            <th>RGB</th>
            <th>Layout Tastiera*</th>
            <th>Dim. Tastiera*</th>
            <th>Hotswappable*</th>
            <th>Tipo Switch*</th>
            <th>Materiale Keycap*</th>
            <th>Profilo Keycap*</th>
        </tr>
        <tr>
            <td>
                2
            </td>
            <td>
                <input type="text" class="input-txt_fld quantity_fld" name="qnty" value = "1">
            </td>
            <td>
                <input type="text" class="input-txt_fld table-input" value="Keychron Q1">
            </td>
            <td>
                <input type="text" class="input-txt_fld table-input" value="Keychron">
            </td>
            <td>
                    <input type="text" class="input-txt_fld quantity_fld" value="150">
            </td>
            <td>
                <input type="text" class="input-txt_fld quantity_fld" value="5">
            </td>
            <td>

                <select class="input-txt_fld table-input" name="img">
                    <%

                        File fold = new File(request.getServletContext().getRealPath("/img/products"));
                        File[] lista = fold.listFiles();
                        if(lista != null)
                         for(File f : lista)
                            out.write("<option>" + f.getName() + "</option>");
                    %>
                </select>
            </td>
            <td>
                <input type="text" class="input-txt_fld table-input" value="Tastiera molto bella bellissima">
            </td>
            <td>
                <select class="input-txt_fld table-input" name="categoria">
                    <option>Tastiera</option>
                    <option>Switch</option>
                    <option>Keycap</option>
                </select>
            </td>
            <td>
                <select class="input-txt_fld table-input" name="rgb">
                    <option>Sì</option>
                    <option>No</option>
                </select>
            </td>
        </tr>
    </table>
    <%-- request.getServletContext().getRealPath("/img/products") + "<br>" --%>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
<script src="js/adminpage_script.js"></script>
</body>
</html>
