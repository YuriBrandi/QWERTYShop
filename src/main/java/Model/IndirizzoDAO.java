package Model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class IndirizzoDAO {

    public ArrayList<Indirizzo> doRetrieveAllByEmail(String email) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Indirizzo WHERE email = ? ORDER BY Indirizzo ASC");
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            ArrayList<Indirizzo> list = new ArrayList<>();

            while (rs.next()) {
                Indirizzo indirizzo = new Indirizzo();
                indirizzo.setEmail(rs.getString(1));
                indirizzo.setIndirizzo(rs.getString(2));
                list.add(indirizzo);
            }

            ps.close();
            return list;
        } catch (SQLException e) {
            return null;
        }

    }

    public int doDeleteAddressByEmail(String email, String address) {
        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("DELETE FROM Indirizzo WHERE email = ? AND indirizzo = ?");
            ps.setString(1, email);
            ps.setString(2, address);


            int result = ps.executeUpdate();

            ps.close();

            return result;

        } catch (SQLException e) {
            return -1;
        }
    }

    public void doSaveAddress(String email, String address) {
        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Indirizzo VALUES(?, ?)");
            ps.setString(1, email);
            ps.setString(2, address);

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("INSERT error.");
            }
            ps.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void doUpdateAddress(String email, String oldAddress, String newAddress) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("UPDATE Indirizzo SET indirizzo = ? WHERE email = ? AND indirizzo = ?");
            ps.setString(1, newAddress);
            ps.setString(2, email);
            ps.setString(3, oldAddress);

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("INSERT error.");
            }
            ps.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

}
