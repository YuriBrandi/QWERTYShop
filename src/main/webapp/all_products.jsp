<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="WEB-INF/header.jsp"%>
<html>
<head>
    <title>Tutti i prodotti</title>
</head>
<body>
    <%
        String search_q = "";
        if(request.getParameter("search_q") != null)
            search_q = request.getParameter("search_q");
    %>
    <div class="container margin-from-nav center">
        <h1 class="center"><b>Tutti i prodotti</b></h1>

        <div class="search-bar">
            <form>
                <div>
                    <input class="search-txt_box" type="text" placeholder="Cerca..." value="<%= search_q %>">
                    <button class="search-btn circle-btn" type="submit">
                        <i class="fa-solid fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
        <h3 class="info_msg"></h3>
    </div>

    <div class="products row center">    <!--Soluzione momentanea -->
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/allproducts_script.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
