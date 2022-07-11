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

    <!--<form action="#" id="upload-img" enctype='multipart/form-data'>-->
        <div>
            <h3>Carica immagine:</h3>
            <input class="form-submit" type="file" id="img-upl" name="image" accept="image/*">&nbsp;
            <button class="add-btn circle-btn" id="upload-image-button"><i class="fa-solid fa-upload"></i></button>
        </div>
    <!--</form>-->

    <p id="err_msg"></p>

    <br><br>
    <h2>Interfaccia amministratore:</h2>
    <h4>(*)Applicabili solo da alcune categorie</h4>

    <div class="modal-overlay" modal-name="modal-add-keyboard">
        <div class="modal-content">
            <div class="close-mod">
                <a href="#" class="close-modal"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <h3>Aggiungi Tastiera</h3>
            <form action="add-keyboard" method="post" id="#add-keyboard">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <input type="text" class="input-txt_fld table-input" placeholder="Nome" name="nome">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input type="text" class="input-txt_fld table-input" placeholder="Marca" name="marca">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input type="number" class="input-txt_fld table-input" placeholder="Pezzi" name="numPezzi">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input type="number" class="input-txt_fld table-input" placeholder="Prezzo" name="prezzo">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input type="number" class="input-txt_fld table-input" placeholder="Sconto" name="sconto">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select class="img-selector input-txt_fld table-input" name="img">
                                <option value="" disabled selected>URL Immagine</option>
                                <%

                                    File fold = new File(request.getServletContext().getRealPath("/img/products"));
                                    File[] lista = fold.listFiles();
                                    if(lista != null)
                                        for(File f : lista)
                                            out.write("<option value=\""+ f.getName() +"\">" + f.getName() + "</option>");
                                %>

                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select class="input-txt_fld table-input" name="rgb">
                                <option value="" disabled selected>RGB</option>
                                <option value="1">Sì</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select class="input-txt_fld table-input" name="hotswappable">
                                <option value="" disabled selected>HotSwappable</option>
                                <option value="1">Sì</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select class="input-txt_fld table-input" name="layout">
                                <option value="" disabled selected>Layout</option>
                                <option value="ISO">ISO</option>
                                <option value="ANSI">ANSI</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select class="input-txt_fld table-input" name="switch">
                                <option value="" disabled selected>Tipo Switch</option>
                                <option value="Tactile">Tattile</option>
                                <option value="Linear">Lineare</option>
                                <option value="Clicky">Clicky</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select class="input-txt_fld table-input" name="dimensione">
                                <option value="" disabled selected>Dimensione</option>
                                <option value="40">20%</option>
                                <option value="60">60%</option>
                                <option value="65">65%</option>
                                <option value="75">75%</option>
                                <option value="80">80%</option>
                                <option value="95">95%</option>
                                <option value="100">100%</option>
                            </select>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <input type="text" class="input-txt_fld table-input" placeholder="Descrizione" name="descrizione">
                        </div>
                        <div class="center">
                            <button class="form-submit" type="submit">Invio </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <button modal-target="modal-add-keyboard" class="open-modal form-submit">Aggiungi Tastiera <i class="fa-solid fa-keyboard"></i></button>

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
    </table>
    <%-- request.getServletContext().getRealPath("/img/products") + "<br>" --%>
    <%--
        if(lista != null)
            for(File f : lista)
                out.write("<img src=\"img/products/" + f.getName() + "\" width='100px'>");
    --%>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
<script src="js/adminpage_script.js"></script>
</body>
</html>
