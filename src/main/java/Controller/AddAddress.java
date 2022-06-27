package Controller;

import Model.Indirizzo;
import Model.IndirizzoDAO;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/add-address")
public class AddAddress extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("text/txt");
        PrintWriter writer = response.getWriter();

        String email = request.getParameter("email");
        String indirizzo = request.getParameter("indirizzo");

        IndirizzoDAO dao = new IndirizzoDAO();

        dao.doSaveAddress(email, indirizzo);
        //writer.print("{\"status\": \"added\"}");
       // writer.flush();

    }
}
