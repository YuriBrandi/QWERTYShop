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

@WebServlet("/remove-address")
public class RemoveAddress extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        String email = ((Utente) request.getSession().getAttribute("utente")).getEmail();
        String indirizzo = request.getParameter("indirizzo");

        IndirizzoDAO dao = new IndirizzoDAO();

        dao.doDeleteAddressByEmail(email, indirizzo);

        writer.print("{\"status\": \"removed\"}");
        writer.flush();
    }
}
