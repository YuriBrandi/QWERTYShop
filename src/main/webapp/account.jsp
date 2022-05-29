<%--
  Created by IntelliJ IDEA.
  User: yuri
  Date: 28/05/22
  Time: 18:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="./WEB-INF/header.jsp"%>

<html>
<head>
    <title>Registrati</title>
</head>
<body>

    <div class="form-container">
        <div class="center">
            <div id="reg_form">
                <h3>Registrazione</h3>
                <form action="#" method="post">
                    <input class="input-txt_fld" type="text" placeholder="Nome" name="nome">
                    <br><br>
                    <input class="input-txt_fld" type="text" placeholder="Cognome" name="cognome">
                    <br><br>
                    <input class="input-txt_fld" type="text" placeholder="E-mail" name="email">
                    <br><br>
                    <input class="input-txt_fld" type="password" placeholder="Password" name="password">

                    <a class="show_hide_psw">
                        <i class="fa-solid fa-eye-slash"></i>
                    </a>

                    <br><br>
                    <button class="form-submit" type="submit">Registrati</button>
                </form>
            </div>

            <div id="log_form" hidden>
                <h3>Accesso</h3>
                <form action="#" method="post">

                    <input class="input-txt_fld" type="text" placeholder="E-mail" name="email">
                    <br><br>
                    <input class="input-txt_fld" type="password" placeholder="Password" name="password">

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
        <p id="credits">© Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/account_script.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
