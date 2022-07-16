package Controller;

import Model.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/add-to-cart")
public class AddToCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");

        int idProdotto = Integer.parseInt(request.getParameter("id"));
        short quantita = Short.parseShort(request.getParameter("qnty"));

        HttpSession session = request.getSession();

        Carrello cart_item = new Carrello();
        cart_item.setIdProdotto(idProdotto);
        cart_item.setQuantita(quantita);

        //Verifica sessione utente
        if(session.getAttribute("utente") != null){
            cart_item.setEmail(((Utente) session.getAttribute("utente")).getEmail());

            CarrelloDAO cart_dao = new CarrelloDAO();
            Carrello temp_item = cart_dao.doRetrieveByIdEmail(cart_item.getEmail(), idProdotto);

            if(temp_item != null)
                cart_dao.doUpdateQuantity(cart_item, (short) (cart_item.getQuantita() + temp_item.getQuantita()));
            else
                cart_dao.doInsertItem(cart_item);

        }
        else { //(carrello modalità guest) Questo è il momento di creazione del carrello guest


            ArrayList<Carrello> cart_list;
            if(session.getAttribute("carrello_guest") != null) {
                boolean is_in_cart = false;
                cart_list = (ArrayList<Carrello>) session.getAttribute("carrello_guest");
                for(Carrello item : cart_list){
                    if(item.getIdProdotto() == cart_item.getIdProdotto()){
                        is_in_cart = true;
                        item.setQuantita((short) (item.getQuantita() + cart_item.getQuantita()));

                        break;
                    }
                }
                if(!is_in_cart)
                   cart_list.add(cart_item);

            }
            else {
                cart_list = new ArrayList<>();
                cart_list.add(cart_item);
            }

            session.setAttribute("carrello_guest", cart_list);

        }

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}
