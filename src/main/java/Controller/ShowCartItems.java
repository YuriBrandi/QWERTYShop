package Controller;

import Model.*;
import com.google.gson.JsonObject;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/show-cart")
public class ShowCartItems extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        /*
            Permette di utilizzare la servlet sia come include() per ottenere i prodotti in CreaOrdine (in tal caso non deve stampare json, altrimenti il forward non funziona)
            Oppure per la visualizzazione lato client del carrello (inviando i dati in formato json)
         */
        boolean sendAsJson = Boolean.parseBoolean(request.getParameter("sendAsJson"));
        HttpSession session = request.getSession();

        ArrayList<Carrello> cart_list;

        if(session.getAttribute("utente") != null){
            CarrelloDAO cart_dao = new CarrelloDAO();
            cart_list = cart_dao.doRetrieveAllByEmail(((Utente) session.getAttribute("utente")).getEmail());

        }
        else if (session.getAttribute("carrello_guest") != null)
            cart_list = (ArrayList<Carrello>) session.getAttribute("carrello_guest");
        else {
            if(sendAsJson){
                writer.print("{\"empty_cart\": " + true + "}");
                writer.flush();
            }
            return;
        }

        double prezzoTot = 0;
        ArrayList<JsonObject> json_ris = new ArrayList<>();
        ProdottoDAO prod_dao = new ProdottoDAO();

        for(Carrello item : cart_list){
            JsonObject json_item = new JsonObject();
            Prodotto prod = prod_dao.doRetrieveById(String.valueOf(item.getIdProdotto()));
            json_item.addProperty("nome_prod", prod.getNome());
            json_item.addProperty("prezzo_prod", prod.getPrezzoScontato());
            json_item.addProperty("disp_prod", prod.getPezziDisponibili());
            json_item.addProperty("id_prod", item.getIdProdotto());
            json_item.addProperty("qnty_prod", item.getQuantita());

            json_ris.add(json_item);
            prezzoTot += prod.getPrezzo();
        }

        System.out.println(json_ris);

        if(!sendAsJson){
            request.setAttribute("json_cart", json_ris);
            request.setAttribute("prezzo_tot", prezzoTot);
        }
        else{
            writer.print(json_ris);
            writer.flush();
        }

    }

}
