package Model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class IncludereDAO {

    public ArrayList<Includere> doRetrieveAllByIdOrdine(int idOrdine) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Includere WHERE idOrdine = ?");
            ps.setInt(1, idOrdine);
            ResultSet rs = ps.executeQuery();
            ArrayList<Includere> list = new ArrayList<>();

            while (rs.next()) {
                Includere in = new Includere();
                in.setIdOrdine(rs.getInt(1));
                in.setIdProdotto(rs.getInt(2));
                in.setQuantita(rs.getShort(3));

                list.add(in);
            }

            ps.close();
            return list;
        } catch (SQLException e) {
            return null;
        }

    }

    public void doInsertIncludere (Includere in) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Includere VALUES(?, ?, ?)");
            ps.setInt(1, in.getIdOrdine());
            ps.setInt(2, in.getIdProdotto());
            ps.setShort(3, in.getQuantita());

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("INSERT error.");
            }
            ps.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
}
