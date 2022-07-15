package Controller;

import Model.Indirizzo;
import Model.IndirizzoDAO;
import Model.Utente;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/update-address")
public class UpdateAddress extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        String email = ((Utente) request.getSession().getAttribute("utente")).getEmail();
        String newAdd = request.getParameter("newAddress");
        String oldAdd = request.getParameter("oldAddress");

        IndirizzoDAO dao = new IndirizzoDAO();

        dao.doUpdateAddress(email, oldAdd, newAdd);

        writer.print("{\"status\": \"edited\"}");
        writer.flush();

    }
}
