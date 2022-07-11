package Controller;

import Model.Prodotto;
import Model.ProdottoDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/add-keyboard")
public class AddKeyboard extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String nome = request.getParameter("nome");
        String marca = request.getParameter("marca");
        int numPezzi = Integer.parseInt(request.getParameter("numPezzi"));
        double prezzo = Double.parseDouble(request.getParameter("prezzo"));
        int sconto = Integer.parseInt(request.getParameter("sconto"));
        String img = "img/products/" + request.getParameter("img");
        int rgb =  Integer.parseInt(request.getParameter("rgb"));
        int hotswappable =  Integer.parseInt(request.getParameter("hotswappable"));
        String layout = request.getParameter("layout");
        String switchKeyboard = request.getParameter("switch");
        int dimensione = Integer.parseInt(request.getParameter("dimensione"));
        String descrizione = request.getParameter("descrizione");

        Prodotto p = new Prodotto();
        p.setCategoria("Tastiera");
        p.setDescrizione(descrizione);
        p.setNome(nome);
        p.setMarca(marca);
        p.setPezziDisponibili(numPezzi);
        p.setPrezzo(prezzo);
        p.setPercSconto((byte) sconto);
        p.setKeyboardLayout(layout);
        p.setKeyboardSize((byte) dimensione);
        p.setTipoSwitch(switchKeyboard);
        p.setPathImg(img);
        if (rgb == 1)
            p.setRGB(true);
        else
            p.setRGB(false);
        if (hotswappable == 1)
            p.setHotSwappable(true);
        else
            p.setHotSwappable(false);

        ProdottoDAO dao = new ProdottoDAO();
        dao.doSaveKeyboard(p);

    }
}
