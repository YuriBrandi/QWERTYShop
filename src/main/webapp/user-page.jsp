<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>

<html>
<head>
    <title>User page</title>
</head>
<body>

    <div class="container margin-from-nav">
        <%
            if (session.getAttribute("utente") == null) {
                response.sendRedirect("account.jsp");
            }
        %>

        <h2 class="center">Bentornato <%= u.getNome()%></h2>
    </div>


    <footer>
        <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <!-- SCRIPT -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>
</html>
