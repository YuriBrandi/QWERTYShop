package Controller;

import Model.Prodotto;
import Model.ProdottoDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/delete-product")
public class RemoveProduct extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        int id = Integer.parseInt(request.getParameter("idProdotto"));

        ProdottoDAO dao = new ProdottoDAO();

        dao.doDeleteProduct(id);

        writer.print("{\"status\": \"removed\"}");
        writer.flush();
    }
}
