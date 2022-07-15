<%--
  Created by IntelliJ IDEA.
  User: yuri
  Date: 28/05/22
  Time: 18:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>

    <%
        //Viene prelevato in header.jsp
        if(u != null)
            if(u.isAdmin())
               response.sendRedirect("admin_page.jsp");
            else
                response.sendRedirect("user_page.jsp");
    %>
<html>
<head>
    <title>Registrati</title>
</head>
<body>
    <div class="form-container">
        <div class="center">
                <%
                    if(request.getParameter("login") != null){
                %>

            <div id="reg_form" hidden>
                    <%}
                    else{%>
            <div id="reg_form">
                    <%}%>

                <h3 class="info_msg">
                    ${info_message}
                </h3>

                    <h3>Registrazione</h3>

                <!-- //if validate_form() = false -> action non chiamato -->
                <form name="registrazione"  action="create-user" method="post"><!--onsubmit="return validate_form()"-->
                    <input class="input-txt_fld" type="text" placeholder="Nome" name="nome" required>
                    <br><br>
                    <input class="input-txt_fld" type="text" placeholder="Cognome" name="cognome" required>
                    <br><br>
                    <input class="input-txt_fld" type="text" placeholder="E-mail" name="email" required>
                    <br><br>
                    <input class="input-txt_fld" type="password" placeholder="Password" name="password" required>

                    <a class="show_hide_psw">
                        <i class="fa-solid fa-eye-slash"></i>
                    </a>

                    <br><br>
                    <button class="form-submit" type="submit">Registrati</button>
                </form>

                <p id="err_msg">
                        ${error_message}
                </p>

            </div>


                <%
                    if(request.getParameter("login") != null){
                %>

                <div id="log_form">
                <%}
                    else{%>
                <div id="log_form" hidden>
                <%}%>

                    <%
                        if(request.getAttribute("isAccessDenied") != null){
                            if((Boolean) request.getAttribute("isAccessDenied")){%>
                    <h3 id="err_msg">I dati inseriti non corrispondono. Riprova.</h3>
                    <%}
                    }%>

                <h3>Accesso</h3>
                <form action="login-user" method="post">

                    <input class="input-txt_fld" type="text" placeholder="E-mail" name="email" required>
                    <br><br>
                    <input class="input-txt_fld" type="password" placeholder="Password" name="password" required>

                    <a class="show_hide_psw">
                        <i class="fa-solid fa-eye-slash"></i>
                    </a>

                    <br><br>
                    <button class="form-submit" type="submit">Accedi</button>

                </form>
            </div>

            <div>
                <p>Hai già un account?</p>
                <a id="form_toggle">Accedi</a>
            </div>
        </div>
    </div>

    <br>
    <footer>
        <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/account_script.js"></script>
    <script src="js/script.js"></script>

</body>
</html>
