package Model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProdottoDAO {

    public ArrayList<Prodotto> doRetrieveAll() {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Prodotto");
            ResultSet rs = ps.executeQuery();
            ArrayList<Prodotto> list = new ArrayList<>();

            while (rs.next()) {
                Prodotto p = new Prodotto();
                p.setIdProdotto(rs.getInt(1));
                p.setNome(rs.getString(2));
                p.setMarca(rs.getString(3));
                p.setPrezzo(rs.getDouble(4));
                p.setPercSconto(rs.getByte(5));
                p.setDescrizione(rs.getString(6));
                p.setPezziDisponibili(rs.getInt(7));
                p.setPathImg(rs.getString(8));
                p.setRGB(rs.getBoolean(9));
                p.setCategoria(rs.getString(10));
                p.setKeyboardSize(rs.getByte(11));
                p.setKeyboardLayout(rs.getString(12));
                p.setHotSwappable(rs.getBoolean(13));
                p.setTipoSwitch(rs.getString(14));
                p.setKeycapMaterial(rs.getString(15));
                p.setKeycapProfile(rs.getString(16));
                list.add(p);
                System.out.println(p);
            }

            ps.close();
            return list;
        } catch (SQLException e) {
            return null;
        }

    }

    public Prodotto doRetrieveById (String id) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT * FROM Prodotto WHERE idProdotto = ?");
            Prodotto p = new Prodotto();

            ps.setString(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                p.setIdProdotto(rs.getInt(1));
                p.setNome(rs.getString(2));
                p.setMarca(rs.getString(3));
                p.setPrezzo(rs.getDouble(4));
                p.setPercSconto(rs.getByte(5));
                p.setDescrizione(rs.getString(6));
                p.setPezziDisponibili(rs.getInt(7));
                p.setPathImg(rs.getString(8));
                p.setRGB(rs.getBoolean(9));
                p.setCategoria(rs.getString(10));
                p.setKeyboardSize(rs.getByte(11));
                p.setKeyboardLayout(rs.getString(12));
                p.setHotSwappable(rs.getBoolean(13));
                p.setTipoSwitch(rs.getString(14));
                p.setKeycapMaterial(rs.getString(15));
                p.setKeycapProfile(rs.getString(16));
            }

            ps.close();

            return p;

        } catch (SQLException e) {
            return null;
        }
    }

    public void doSaveKeyboard(Prodotto p) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Prodotto(nome, marca, prezzo, percSconto, descrizione, pezziDisponibili, pathImg, isRGB, categoria, keyboardSize, keyboardLayout, isHotSwappable, tipoSwitch) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
            ps.setString(1, p.getNome());
            ps.setString(2, p.getMarca());
            ps.setDouble(3, p.getPrezzo());
            ps.setByte(4, p.getPercSconto());
            ps.setString(5, p.getDescrizione());
            ps.setInt(6, p.getPezziDisponibili());
            ps.setString(7, p.getPathImg());
            ps.setBoolean(8, p.isRGB());
            ps.setString(9, p.getCategoria());
            ps.setByte(10, p.getKeyboardSize());
            ps.setString(11, p.getKeyboardLayout());
            ps.setBoolean(12, p.isHotSwappable());
            ps.setString(13, p.getTipoSwitch());

            int rs = ps.executeUpdate();


        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
