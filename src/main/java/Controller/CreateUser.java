package Controller;

import Model.CarrelloDAO;
import Model.Utente;
import Model.UtenteDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.regex.Pattern;

@WebServlet("/create-user")

public class CreateUser extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        Utente u = new Utente();
        u.setEmail(request.getParameter("email"));
        u.setNome(request.getParameter("nome"));
        u.setCognome(request.getParameter("cognome"));
        u.set_and_HashPassword(request.getParameter("password"));

        String addr;
        UtenteDAO u_DAO = new UtenteDAO();
        String err_msg = isDataValid(u.getEmail(), u.getNome(), u.getCognome(), request.getParameter("password"));

        if(!err_msg.isEmpty()){
            addr = "account.jsp";
            request.setAttribute("error_message", err_msg);
            System.out.println(err_msg);
        }
        else
            if(u_DAO.isUtenteDuplicated(u)){
                addr = "account.jsp";
                request.setAttribute("info_message", "Questa mail è già registrata!");
            }
            else{
                u_DAO.doSave(u);
                request.getSession().setAttribute("utente", u);
                LoginUser.mergeCart(request.getSession(), new CarrelloDAO());
                addr = "index.jsp";
            }

        request.getRequestDispatcher(addr).forward(request, response);
    }

    /*
        Vengono validati i dati ANCHE lato server poiché i controlli in JS lato client
        sono facilmente aggirabili
     */
    public String isDataValid(String email, String nome, String cognome, String password){

        String errors = "";

        if(email.isEmpty() || nome.isEmpty() || cognome.isEmpty() || password.isEmpty()){
            errors += "Mancano alcuni dati.<br>";
            //flag = false;
        }

        if(!Pattern.compile("^[a-z0-9!#$%&'*+=?^_`{|}~/-]+([.][a-z0-9!#$%&'*+=?^_`{|}~/-]+)*@([a-z0-9-]+[.])+[a-z]+$", Pattern.CASE_INSENSITIVE)
                .matcher(email).find()) {
            errors += "Formato e-mail invalido.<br>";
            //flag = false;
        }

        if(password.length() < 8){
            errors += "La password deve contenere almeno 8 caratteri.<br>";
           //flag = false;
        }

        if(!Pattern.compile("[A-Z]").matcher(password).find()){
            errors += "La password deve contenere almeno una maiuscola.<br>";
            //flag = false;
        }

        if(!Pattern.compile("[a-z]").matcher(password).find()){
            errors += "La password deve contenere almeno una minuscola.<br>";
            //flag = false;
        }

        if(!Pattern.compile("[0-9]").matcher(password).find()){
            errors += "La password deve contenere almeno un numero.<br>";
            //flag = false;
        }

        if(!Pattern.compile("[!#$%&'*/=?^_+`{|}~€-]").matcher(password).find()){
            errors += "La password deve contenere almeno un carattere speciale (Es: !, #, €, ? ...).<br>";
            //flag = false;
        }

        //return flag;
        return errors;
    }
}
