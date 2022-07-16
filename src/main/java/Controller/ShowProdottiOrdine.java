package Controller;

import Model.Includere;
import Model.IncludereDAO;
import Model.Prodotto;
import Model.ProdottoDAO;
import com.google.gson.JsonObject;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/show-prod-ordine")
public class ShowProdottiOrdine extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        int idOrdine = Integer.parseInt(request.getParameter("idOrdine"));

        IncludereDAO dao = new IncludereDAO();
        ArrayList<Includere> list = dao.doRetrieveAllByIdOrdine(idOrdine);
        ArrayList<JsonObject> json_ris = new ArrayList<>();
        ProdottoDAO prod_dao = new ProdottoDAO();

        for(Includere i : list){
            JsonObject json_item = new JsonObject();
            Prodotto prod = prod_dao.doRetrieveById(String.valueOf(i.getIdProdotto()));
            json_item.addProperty("nome_prod", prod.getNome());
            json_item.addProperty("qnty_prod", i.getQuantita());

            json_ris.add(json_item);
        }

        System.out.println(json_ris);

        writer.print(json_ris);
        writer.flush();
    }
}
