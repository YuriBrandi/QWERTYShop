package Controller;

import Model.Carrello;
import Model.CarrelloDAO;
import Model.Utente;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;


@WebServlet("/remove-from-cart")
public class RemoveFromCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        int idProdotto = Integer.parseInt(request.getParameter("id"));
        short quantita = Short.parseShort(request.getParameter("qnty"));

        HttpSession session = request.getSession();
        if(session.getAttribute("utente") != null){

            Carrello item = new Carrello();
            item.setEmail(((Utente) session.getAttribute("utente")).getEmail());
            item.setIdProdotto(idProdotto);
            item.setQuantita(quantita);

            CarrelloDAO cart_dao = new CarrelloDAO();

            if(idProdotto == -1){
                if(cart_dao.doDeleteAll(item.getEmail()) == -1)
                    writer.print("{\"status\": \"error\"}");
                else{
                    session.setAttribute("cart_count", (Integer) session.getAttribute("cart_count") + item.getQuantita());
                    writer.print("{\"status\": \"success\"}");
                }
            }
            else{
                if(quantita == -1)
                    if(cart_dao.doDeleteItem(item) == -1)
                        writer.print("{\"status\": \"not_in_cart\"}");
                    else
                        writer.print("{\"status\": \"success\"}");
                else{
                    Carrello temp_item = cart_dao.doRetrieveByIdEmail(item.getEmail(), idProdotto);
                    if(temp_item == null)
                        writer.print("{\"status\": \"not_in_cart\"}");
                    else{
                        short new_qnty = (short) (temp_item.getQuantita() - item.getQuantita());
                        if(new_qnty < 1)
                            cart_dao.doDeleteItem(item);
                        else
                            cart_dao.doUpdateQuantity(item, new_qnty);

                        writer.print("{\"status\": \"success\"}");
                    }
                }

            }

            writer.flush();
        }
        else if(session.getAttribute("carrello_guest") != null){

            if(idProdotto == -1){
                session.removeAttribute("carrello_guest");
                writer.print("{\"status\": \"success\"}");
            }
            else{
                boolean is_in_cart = false;
                ArrayList<Carrello> cart_list = (ArrayList<Carrello>) session.getAttribute("carrello_guest");
                for(Carrello item : cart_list){
                    if(item.getIdProdotto() == idProdotto){
                        if(quantita == -1)
                            cart_list.remove(item);
                        else{
                            item.setQuantita((short) (item.getQuantita() - quantita));
                            if(item.getQuantita() < 1)
                                cart_list.remove(item);
                        }
                        is_in_cart = true;

                        break;
                    }
                }

                session.setAttribute("carrello_guest", cart_list);

                if(!is_in_cart)
                    writer.print("{\"status\": \"not_in_cart\"}");
                else
                    writer.print("{\"status\": \"success\"}");
            }

            writer.flush();
        }

    }
}
