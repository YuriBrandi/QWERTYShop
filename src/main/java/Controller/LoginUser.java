package Controller;

import Model.Carrello;
import Model.CarrelloDAO;
import Model.Utente;
import Model.UtenteDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.ArrayList;

@WebServlet("/login-user")
public class LoginUser extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String addr;
        UtenteDAO u_DAO = new UtenteDAO();
        Utente u = u_DAO.doRetrieveByEmailPassword(request.getParameter("email"), request.getParameter("password"));

        if(u == null){
            addr = "account.jsp?login=1";
            request.setAttribute("isAccessDenied", new Boolean(true));
        }
        else{
            request.getSession().setAttribute("utente", u);
            mergeCart(request.getSession(), new CarrelloDAO());
            addr = "index.jsp";
        }

        request.getRequestDispatcher(addr).forward(request, response);
    }

    public static void mergeCart(HttpSession session, CarrelloDAO cart_dao){

        if(session.getAttribute("carrello_guest") != null && session.getAttribute("utente") != null) {
            ArrayList<Carrello> guest_cart = (ArrayList<Carrello>) session.getAttribute("carrello_guest");

            String email = ((Utente) session.getAttribute("utente")).getEmail();

            for (Carrello item : guest_cart) {
                item.setEmail(email);

                Carrello temp_item = cart_dao.doRetrieveByIdEmail(item.getEmail(), item.getIdProdotto());
                if(temp_item != null)
                    cart_dao.doUpdateQuantity(item, (short) (item.getQuantita() + temp_item.getQuantita()));
                else
                    cart_dao.doInsertItem(item);

            }

            session.removeAttribute("carrello_guest");
        }
    }
}
