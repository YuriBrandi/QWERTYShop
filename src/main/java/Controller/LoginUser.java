package Controller;

import Model.Utente;
import Model.UtenteDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/login-user")

public class LoginUser extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String email = request.getParameter("email");
        String passwd = request.getParameter("password");
        System.out.println(email);
        System.out.println(passwd);
        String addr;
        Utente user = new Utente();
        UtenteDAO u = new UtenteDAO();

        user = u.doRetrieveByEmailPassword(email, passwd);

        if (user == null) {
            addr = "account.jsp";
            System.out.println("errore");
            // errore, utente non trovato
        }
        else {
            System.out.println("successo");
            addr = "user-page.jsp";
            request.getSession().setAttribute("utente", user);
        }

        request.getRequestDispatcher(addr).forward(request, response);

    }
}
