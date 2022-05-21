package com.rocca_brandi.progettotsw;

import java.io.*;
import java.sql.*;

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
        Connection conn = null;
        try {
            conn = ConPool.getConnection();
            out.println("Connessione riuscita");
        } catch (SQLException e) {
            e.printStackTrace();
            out.println("Eccezione in connessione: " + e.getMessage());
        }

        if(conn != null){
            int val = getValore();
            val++;
            out.println("<br>Numero accessi: " + val);
            doUpdate(val);
        }

        out.println("</body></html>");
    }

    public void destroy() {
    }

    public int getValore() {
        try (Connection con = ConPool.getConnection()) {
            PreparedStatement ps =
                    con.prepareStatement("SELECT prova FROM test");
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return rs.getInt(1);
            }
            return -1;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void doUpdate(int value) {
        try (Connection con = ConPool.getConnection()) {
            PreparedStatement ps = con.prepareStatement(
                    "UPDATE test SET prova = ?",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, value);

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("UPDATE error.");
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}