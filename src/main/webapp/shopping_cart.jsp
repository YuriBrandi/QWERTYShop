<%--
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

    <div class="container margin-from-nav">
        <table class="table">
            <tr>
                <th>Nome</th>
                <th>Quantità</th>
                <th>Prezzo</th>
                <th>Azione</th>
            </tr>
            <tr>
                <td>Nome 1</td>
                <td>
                    <button class="remove-btn">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" class="input-txt_fld quantity-field" value = "1" readonly>
                    <button class="add-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </td>
                <td>5€</td>
                <td>
                    <button class="delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>Nome 2</td>
                <td>
                    <button class="remove-btn">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" class="input-txt_fld quantity-field" value = "1" readonly>
                    <button class="add-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </td>
                <td>5€</td>
                <td>
                    <button class="delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        </table>
    </div>

    <div class="container">
        <div class="center">
            <h2>Totale: 1000€</h2>
            <button class="form-submit"><i class="fa-solid fa-eraser"></i>&nbsp; Svuota Carrello</button>
            <button class="form-submit"><i class="fa-solid fa-cart-arrow-down"></i>&nbsp; Crea Ordine</button>
        </div>
    </div>

    <footer>
      <p id="credits">&copy; Della Rocca & Brandi. Tutti i diritti riservati.</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/b2ea133689.js" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <script src="js/cart-script.js"></script>
</body>
</html>
