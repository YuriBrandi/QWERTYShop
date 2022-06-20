package Model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class IndirizzoDAO {

    public ArrayList<Indirizzo> doRetrieveAllByEmail(String email) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement statement = connection.prepareStatement("SELECT * FROM Indirizzo WHERE email = ?");
            statement.setString(1, email);
            ResultSet result = statement.executeQuery();
            ArrayList<Indirizzo> list = new ArrayList<>();

            while (result.next()) {
                Indirizzo indirizzo = new Indirizzo();
                indirizzo.setEmail(result.getString(1));
                indirizzo.setIndirizzo(result.getString(2));
                list.add(indirizzo);
            }

            return list;

        } catch (SQLException e) {
            return null;
        }

    }

}
