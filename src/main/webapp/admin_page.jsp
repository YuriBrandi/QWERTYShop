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
    <h2>Interfaccia amministratore</h2>

    <button modal-target="modal-add-keyboard" class="open-modal form-submit">Aggiungi Tastiera <i class="fa-solid fa-plus"></i></button>
    <button modal-target="modal-add-switch" class="open-modal form-submit">Aggiungi Switch <i class="fa-solid fa-plus"></i></button>
    <button modal-target="modal-add-keycaps" class="open-modal form-submit">Aggiungi Keycaps <i class="fa-solid fa-plus"></i></button>


    <h2>TASTIERE</h2>

    <table class="table keyboard admin-mode">
        <tr>
            <th>ID Prodotto</th>
            <th>Pezzi Disponibili</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Prezzo (&euro;)</th>
            <th>Sconto</th>
            <th>Azioni</th>
        </tr>
    </table>

    <h2>SWITCH</h2>

    <table class="table switch admin-mode">
        <tr>
            <th>ID Prodotto</th>
            <th>Pezzi Disponibili</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Prezzo (&euro;)</th>
            <th>Sconto</th>
            <th>Azioni</th>
        </tr>
    </table>

    <h2>KEYCAPS</h2>

    <table class="table keycaps admin-mode">
        <tr>
            <th>ID Prodotto</th>
            <th>Pezzi Disponibili</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Prezzo (&euro;)</th>
            <th>Sconto</th>
            <th>Azioni</th>
        </tr>
    </table>
    <%-- request.getServletContext().getRealPath("/img/products") + "<br>" --%>
    <%--
        if(lista != null)
            for(File f : lista)
                out.write("<img src=\"img/products/" + f.getName() + "\" width='100px'>");
    --%>

    <div class="modal-overlay" modal-name="modal-add-keyboard">
        <div class="modal-content">
            <div class="close-mod">
                <a href="#" class="close-modal"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <h3>Aggiungi Tastiera</h3>
            <form class="add-keyboard">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Nome" name="nome">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Marca" name="marca">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Pezzi" name="numPezzi" min="0">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Prezzo" name="prezzo" min="0.01" step="0.01">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Sconto" name="sconto" min = "0" max = "100">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select class="img-selector input-txt_fld table-input" name="img" required>
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
                            <select required class="input-txt_fld table-input" name="rgb">
                                <option value="" disabled selected>RGB</option>
                                <option value="1">Sì</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select required class="input-txt_fld table-input" name="hotswappable">
                                <option value="" disabled selected>HotSwappable</option>
                                <option value="1">Sì</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select required class="input-txt_fld table-input" name="layout">
                                <option value="" disabled selected>Layout</option>
                                <option value="ISO">ISO</option>
                                <option value="ANSI">ANSI</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-12">
                            <select required class="input-txt_fld table-input" name="switch">
                                <option value="" disabled selected>Tipo Switch</option>
                                <option value="Tactile">Tattile</option>
                                <option value="Linear">Lineare</option>
                                <option value="Clicky">Clicky</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select required class="input-txt_fld table-input" name="dimensione">
                                <option value="" disabled selected>Dimensione</option>
                                <option value="20">20%</option>
                                <option value="60">60%</option>
                                <option value="65">65%</option>
                                <option value="75">75%</option>
                                <option value="80">80%</option>
                                <option value="95">95%</option>
                                <option value="100">100%</option>
                            </select>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <textarea required class="input-txt_fld table-input" placeholder="Descrizione" name="descrizione"></textarea>
                        </div>
                        <div class="center">
                            <button class="form-submit" type="submit">Invio </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="modal-overlay" modal-name="modal-add-switch">
        <div class="modal-content">
            <div class="close-mod">
                <a href="#" class="close-modal"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <h3>Aggiungi Switch</h3>
            <form class="add-switch">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Nome" name="nome">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Marca" name="marca">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Pezzi" name="numPezzi" min="0">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Prezzo" name="prezzo" min="0.01" step="0.01">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Sconto" name="sconto" min = "0" max = "100">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select class="img-selector input-txt_fld table-input" name="img" required>
                                <option value="" disabled selected>URL Immagine</option>
                                <%
                                    if(lista != null)
                                        for(File f : lista)
                                            out.write("<option value=\""+ f.getName() +"\">" + f.getName() + "</option>");
                                %>

                            </select>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <select required class="input-txt_fld table-input" name="rgb">
                                <option value="" disabled selected>RGB</option>
                                <option value="1">Sì</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <select required class="input-txt_fld table-input" name="switch">
                                <option value="" disabled selected>Tipo Switch</option>
                                <option value="Tactile">Tattile</option>
                                <option value="Linear">Lineare</option>
                                <option value="Clicky">Clicky</option>
                            </select>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <textarea required class="input-txt_fld table-input" placeholder="Descrizione" name="descrizione"></textarea>
                        </div>
                        <div class="center">
                            <button class="form-submit" type="submit">Invio </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="modal-overlay" modal-name="modal-add-keycaps">
        <div class="modal-content">
            <div class="close-mod">
                <a href="#" class="close-modal"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <h3>Aggiungi Keycap</h3>
            <form class="add-keycaps">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Nome" name="nome">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Marca" name="marca">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Pezzi" name="numPezzi" min="0">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Prezzo" name="prezzo" min="0.01" step="0.01">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="number" class="input-txt_fld table-input" placeholder="Sconto" name="sconto" min = "0" max = "100">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <input required type="text" class="input-txt_fld table-input" placeholder="Materiale" name="materiale">
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select required class="img-selector input-txt_fld table-input" name="img">
                                <option value="" disabled selected>URL Immagine</option>
                                <%
                                    if(lista != null)
                                        for(File f : lista)
                                            out.write("<option value=\""+ f.getName() +"\">" + f.getName() + "</option>");
                                %>

                            </select>
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select required class="input-txt_fld table-input" name="rgb">
                                <option value="" disabled selected>RGB</option>
                                <option value="1">Sì</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <select required class="input-txt_fld table-input" name="profilo">
                                <option value="" disabled selected>Profilo Keycap</option>
                                <option value="Cherry">Cherry</option>
                                <option value="OEM">OEM</option>
                                <option value="XDA">XDA</option>
                                <option value="DSA">DSA</option>
                                <option value="SA">SA</option>
                                <option value="KAT">KAT</option>
                                <option value="KAM">KAT</option>
                                <option value="MT3">MT3</option>
                            </select>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <textarea required class="input-txt_fld table-input" placeholder="Descrizione" name="descrizione"></textarea>
                        </div>
                        <div class="center">
                            <button class="form-submit" type="submit">Invio </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>

<footer>
    <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
<script src="js/adminpage_script.js"></script>
</body>
</html>
