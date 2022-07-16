package Controller;

import Model.*;
import com.google.gson.JsonObject;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


import java.io.IOException;
import java.util.ArrayList;
import java.util.GregorianCalendar;

@WebServlet("/create-order")
public class CreateOrdine extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session = request.getSession();
        String addr;

        if(session.getAttribute("utente") == null){
            request.setAttribute("info_message", "Devi accedere o creare un account per poter effettuare un ordine!");
            addr = "account.jsp";
        }
        else{
            String indirizzo = request.getParameter("sel_addr");
            if(indirizzo.equals("inv") || indirizzo == null || indirizzo.isEmpty()){
                request.setAttribute("error_message", "Devi inserire un indirizzo!");
                addr = "shopping_cart.jsp";
            }
            else{
                Ordine ordine = new Ordine();

                String email = ((Utente) session.getAttribute("utente")).getEmail();
                request.getRequestDispatcher("show-cart?sendAsJson=false").include(request, response);

                ArrayList<JsonObject> json_cart = (ArrayList<JsonObject>) request.getAttribute("json_cart");
                String err_mess = verificaDisp(json_cart);

                if(!err_mess.isEmpty()){
                    addr = "shopping_cart.jsp";
                    request.setAttribute("error_message", "I seguenti prodotti sono in quantità eccessiva:" + err_mess);
                }else{
                    ordine.setEmail(email);
                    ordine.setDataOrdine(new GregorianCalendar());
                    ordine.setIndirizzoSpedizione(indirizzo);
                    ordine.setPrezzoFinale((Double) request.getAttribute("prezzo_tot"));

                    OrdineDAO ordineDAO = new OrdineDAO();
                    ordineDAO.doInsertOrdine(ordine);
                    System.out.println(ordine);
                    IncludereDAO inDAO = new IncludereDAO();
                    ProdottoDAO prodDAO = new ProdottoDAO();

                    for(JsonObject json_item : json_cart){
                        Includere prod_ord = new Includere();

                        prod_ord.setIdOrdine(ordine.getIdOrdine());
                        prod_ord.setIdProdotto(json_item.get("id_prod").getAsInt());
                        prod_ord.setQuantita(json_item.get("qnty_prod").getAsShort());

                        inDAO.doInsertIncludere(prod_ord);
                        System.out.println(prod_ord);
                        prodDAO.doUpddateDisponibilita(prod_ord.getIdProdotto(), prod_ord.getQuantita());
                    }

                    request.setAttribute("succ_msg", "Grazie! Ordine #" + ordine.getIdOrdine() + " effettuto!");
                    new CarrelloDAO().doDeleteAll(email);
                    addr = "user_page.jsp";

                }
            }
        }

        request.getRequestDispatcher(addr).forward(request, response);
    }

    public String verificaDisp(ArrayList<JsonObject> json_cart){
        String error_mess = "";

        for(JsonObject json_item : json_cart){
            if(json_item.get("qnty_prod").getAsShort() > json_item.get("disp_prod").getAsShort())
                error_mess += "</br>" + json_item.get("nome_prod").getAsString() + " (Disponibilità: " + json_item.get("disp_prod").getAsShort() + ")"  ;
        }

        return error_mess;
    }
}
