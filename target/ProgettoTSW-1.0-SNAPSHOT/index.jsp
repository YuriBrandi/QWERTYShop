<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSP - Hello World</title>
</head>
<body>
    <header>
        <nav>
            <input type="checkbox" id="nav" class="hidden">
            <label for="nav" class="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div class="logo">
                <a href="#">BRAND</a>
            </div>
            <div class="nav-wrapper">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">Purchase</a></li>
                </ul>
            </div>
        </nav>
    </header>
<h1><%= "Hello World!" %>
</h1>
<br/>
<h1>Bella zio</h1>
<a href="hello-servlet">Hello Servlet</a>
</body>
</html>