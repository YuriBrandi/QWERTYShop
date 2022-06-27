package Controller;

import Model.Prodotto;
import Model.ProdottoDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/info-product")
public class InfoProduct extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String id = request.getParameter("id");

        ProdottoDAO dao = new ProdottoDAO();

        Prodotto p = dao.doRetrieveById(id);

        System.out.println(p.toString());

        request.setAttribute("prodotto", p);

        request.getRequestDispatcher("product.jsp").forward(request, response);

    }

}
