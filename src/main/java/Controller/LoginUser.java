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
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String addr;
        UtenteDAO u_DAO = new UtenteDAO();
        Utente u = u_DAO.doRetrieveByEmailPassword(request.getParameter("email"), request.getParameter("password"));

        if(u == null){
            addr = "account.jsp?login=1";
            request.setAttribute("isAccessDenied", new Boolean(true));
        }
        else{
            request.getSession().setAttribute("utente", u);
            addr = "index.jsp";
        }

        request.getRequestDispatcher(addr).forward(request, response);
    }
}
