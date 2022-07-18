package Controller;

import Model.*;
import com.mysql.cj.Session;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.ArrayList;

@WebServlet("/info-product")
public class InfoProduct extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String id = request.getParameter("id");
        HttpSession session = request.getSession();

        String email = null;
        if(session.getAttribute("utente") != null)
            email = ((Utente)session.getAttribute("utente")).getEmail();

        ProdottoDAO p_dao = new ProdottoDAO();
        CarrelloDAO c_dao = new CarrelloDAO();

        Prodotto p = p_dao.doRetrieveById(id);
        Carrello item = null;
        if(email != null)
             item = c_dao.doRetrieveByIdEmail(email, p.getIdProdotto());
        else if(session.getAttribute("carrello_guest") != null){
            ArrayList<Carrello> cart_list = (ArrayList<Carrello>) session.getAttribute("carrello_guest");
            for(Carrello c_item : cart_list)
                if(c_item.getIdProdotto() == p.getIdProdotto())
                    item = c_item;

        }

        System.out.println(p.toString());

        request.setAttribute("prodotto", p);
        request.setAttribute("cart_item", item);

        request.getRequestDispatcher("WEB-INF/product.jsp").forward(request, response);

    }

}
