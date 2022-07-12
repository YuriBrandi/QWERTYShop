package Controller;

import Model.Prodotto;
import Model.ProdottoDAO;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/show-switchs")
public class ShowSwitch extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        ProdottoDAO dao = new ProdottoDAO();
        ArrayList<Prodotto> list = dao.doRetrieveBySwitch();
        String json = new Gson().toJson(list);
        System.out.println(json);

        writer.print(json);
        writer.flush();
    }
}
