package Model;

import java.sql.*;
import java.util.ArrayList;

public class OrdineDAO {

    public ArrayList<Ordine> doRetrieveAllByEmail(String email) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Ordine WHERE email = ? ORDER BY dataOrdine ASC");
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            ArrayList<Ordine> list = new ArrayList<>();

            while (rs.next()) {
                Ordine o = new Ordine();
                o.setIdOrdine(rs.getInt(1));
                o.setEmail(rs.getString(2));
                o.setDataOrdine(rs.getString(3));
                o.setIndirizzoSpedizione(rs.getString(4));
                o.setPrezzoFinale(rs.getDouble(5));
                o.setTracking(rs.getString(6));
                list.add(o);
            }

            ps.close();
            return list;
        } catch (SQLException e) {
            return null;
        }

    }

    public void doInsertOrdine (Ordine o) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Ordine (email, dataOrdine, indirizzoSpedizione, prezzoFinale, Tracking) " +
                                                                     "VALUES(?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, o.getEmail());
            ps.setString(2, o.getDataOrdine());
            ps.setString(3, o.getIndirizzoSpedizione());
            ps.setDouble(4, o.getPrezzoFinale());
            ps.setString(5, o.getTracking());

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("INSERT error.");
            }
            ResultSet rs = ps.getGeneratedKeys();
            rs.next();
            o.setIdOrdine(rs.getInt(1));

            ps.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

}
