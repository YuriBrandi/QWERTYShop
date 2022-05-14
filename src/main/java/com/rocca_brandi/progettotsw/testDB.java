package com.rocca_brandi.progettotsw;

import java.io.*;
import java.sql.SQLException;

import Model.ConPool;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/testDB")
public class testDB extends HttpServlet {
    private String message;

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        try {
            ConPool.getConnection();
            out.println("Connessione riuscita");
        } catch (SQLException e) {
            e.printStackTrace();
            out.println("Eccezione in connessione: " + e.getMessage());
        }



        out.println("</body></html>");
    }

    public void destroy() {
    }
}