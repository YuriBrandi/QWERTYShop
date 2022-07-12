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

@WebServlet("/add-switchs")
public class AddSwitch extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        String nome = request.getParameter("nome");
        String marca = request.getParameter("marca");
        int numPezzi = Integer.parseInt(request.getParameter("numPezzi"));
        double prezzo = Double.parseDouble(request.getParameter("prezzo"));
        int sconto = Integer.parseInt(request.getParameter("sconto"));
        String img = "img/products/" + request.getParameter("img");
        int rgb =  Integer.parseInt(request.getParameter("rgb"));
        String switchKeyboard = request.getParameter("switch");
        String descrizione = request.getParameter("descrizione");

        Prodotto p = new Prodotto();
        p.setCategoria("Switch");
        p.setDescrizione(descrizione);
        p.setNome(nome);
        p.setMarca(marca);
        p.setPezziDisponibili(numPezzi);
        p.setPrezzo(prezzo);
        p.setPercSconto((byte) sconto);
        p.setTipoSwitch(switchKeyboard);
        p.setPathImg(img);
        if (rgb == 1)
            p.setRGB(true);
        else
            p.setRGB(false);

        ProdottoDAO dao = new ProdottoDAO();
        dao.doSaveSwitch(p);

        writer.print("{\"status\": \"added\"}");
        writer.flush();

    }

}
