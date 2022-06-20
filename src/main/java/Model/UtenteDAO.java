package Model;

import java.sql.*;

public class UtenteDAO {
    public Utente doRetrieveByEmailPassword(String email, String password) {
        try (Connection con = ConPool.getConnection()) {
            PreparedStatement ps =
                    con.prepareStatement("SELECT email, nome, cognome, passwd, isAdmin FROM Utente WHERE email = ? AND passwd = SHA1(?)");
            ps.setString(1, email);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                Utente u = new Utente();
                u.setEmail(rs.getString(1));
                u.setNome(rs.getString(2));
                u.setCognome(rs.getString(3));
                u.setHashed_password(rs.getString(4));
                u.setAdmin(rs.getBoolean(5));
                return u;
            }
            ps.close();
            return null;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean isUtenteDuplicated(Utente u) {
        try (Connection con = ConPool.getConnection()) {
            PreparedStatement ps =
                    con.prepareStatement("SELECT email FROM Utente WHERE email = ?");
            ps.setString(1, u.getEmail());

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return true;
            }
            ps.close();
            return false;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void doSave(Utente u) {
        try (Connection con = ConPool.getConnection()) {
            PreparedStatement ps =
                    con.prepareStatement("INSERT INTO Utente (email, nome, cognome, passwd) VALUES(?, ?, ?, ?)",
                            Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, u.getEmail());
            ps.setString(2, u.getNome());
            ps.setString(3, u.getCognome());
            ps.setString(4, u.getHashed_password());

            if (ps.executeUpdate() != 1) {
                throw new RuntimeException("INSERT error.");
            }
            u.setAdmin(false);
            ps.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
