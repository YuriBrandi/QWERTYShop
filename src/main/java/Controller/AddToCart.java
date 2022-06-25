package Controller;

import Model.ContenutoCarrello;
import Model.IndirizzoDAO;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/add-to-cart")
public class AddToCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        int idProdotto = Integer.parseInt(request.getParameter("id"));
        short quantita = Short.parseShort(request.getParameter("qnty"));

        HttpSession session = request.getSession();
        //Verifica sessione utente
        if(session.getAttribute("utente") == null) { //(carrello modalità guest)

            ContenutoCarrello cart_item = new ContenutoCarrello();
            cart_item.setIdProdotto(idProdotto);
            cart_item.setQuantita(quantita);

            ArrayList<ContenutoCarrello> cart_list = null;
            //Gson gson = new Gson();
            boolean is_in_cart = false;
            if(session.getAttribute("carrello") != null) {
                //cart_list = gson.fromJson(session.getAttribute("carrello").toString(), ArrayList.class);
                cart_list = (ArrayList<ContenutoCarrello>) session.getAttribute("carrello");
                for(ContenutoCarrello item : cart_list){
                    if(item.getIdProdotto() == cart_item.getIdProdotto()){
                        item.setQuantita((short) (item.getQuantita() + cart_item.getQuantita()));
                        is_in_cart = true;
                    }
                }
                if(!is_in_cart)
                    cart_list.add(cart_item);
            }
            else {
                cart_list = new ArrayList<>();
                cart_list.add(cart_item);
            }

            //String json = gson.toJson(cart_item);
            session.setAttribute("carrello", cart_list);

        }

    }
}
