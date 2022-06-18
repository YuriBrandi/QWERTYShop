package Controller;

import Model.Utente;
import Model.UtenteDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/create-user")

public class CreateUser extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Utente u = new Utente();
        u.setEmail(request.getParameter("email"));
        u.setNome(request.getParameter("nome"));
        u.setCognome(request.getParameter("cognome"));
        u.set_and_HashPassword("password");

        String addr;
        UtenteDAO u_DAO = new UtenteDAO();
        if(u_DAO.isUtenteDuplicated(u)){
            addr = "account.jsp";
            request.setAttribute("isRedirected", new Boolean(true));
        }
        else{
            u_DAO.doSave(u);
            request.getSession().setAttribute("utente", u);
            addr = "index.jsp";
        }

        request.getRequestDispatcher(addr).forward(request, response);
    }
}
