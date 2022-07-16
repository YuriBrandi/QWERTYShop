package Model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CarrelloDAO {

    public ArrayList<Carrello> doRetrieveAllByEmail(String email) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Carrello WHERE email = ? ORDER BY idProdotto ASC");
            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();
            ArrayList<Carrello> list = new ArrayList<>();

            while (rs.next()) {
                Carrello item = new Carrello();
                item.setEmail(rs.getString(1));
                item.setIdProdotto(rs.getInt(2));
                item.setQuantita(rs.getShort(3));
                list.add(item);
            }

            ps.close();
            return list;
        } catch (SQLException e) {
            return null;
        }

    }

    public Carrello doRetrieveByIdEmail(String email, int idProdotto) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Carrello WHERE email = ? AND idProdotto = ?");
            ps.setString(1, email);
            ps.setInt(2, idProdotto);

            ResultSet rs = ps.executeQuery();
            Carrello item = null;

            if (rs.next()) {
                item = new Carrello();
                item.setEmail(rs.getString(1));
                item.setIdProdotto(rs.getInt(2));
                item.setQuantita(rs.getShort(3));
            }

            ps.close();
            return item;
        } catch (SQLException e) {
            return null;
        }

    }

    public void doInsertItem(Carrello item) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Carrello VALUES(?, ?, ?)");
            ps.setString(1, item.getEmail());
            ps.setInt(2, item.getIdProdotto());
            ps.setShort(3, item.getQuantita());

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("INSERT error.");
            }
            ps.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    public void doUpdateQuantity(Carrello item, short qnty) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("UPDATE Carrello SET quantita = ? WHERE email = ? AND idProdotto = ?");
            ps.setShort(1, qnty);
            ps.setString(2, item.getEmail());
            ps.setInt(3, item.getIdProdotto());

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("UPDATE error.");
            }
            ps.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    public int doDeleteItem(Carrello item) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("DELETE FROM Carrello WHERE email = ? AND idProdotto = ?");
            ps.setString(1, item.getEmail());
            ps.setInt(2, item.getIdProdotto());


            int result = ps.executeUpdate();

            ps.close();

            return result;

        } catch (SQLException e) {
            return -1;
        }
    }

    public int doDeleteAll(String email) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("DELETE FROM Carrello WHERE email = ?");
            ps.setString(1, email);

            int result = ps.executeUpdate();

            ps.close();

            return result;

        } catch (SQLException e) {
            return -1;
        }
    }

}
