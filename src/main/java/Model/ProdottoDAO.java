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

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public ArrayList<Prodotto> doRetrieveByKeyboard() {
        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT idProdotto, nome, marca, prezzo, percSconto, descrizione, pezziDisponibili, pathImg, isRGB, categoria, keyboardSize, keyboardLayout, isHotSwappable, tipoSwitch FROM Prodotto WHERE categoria = 'Tastiera'");
            ResultSet rs = ps.executeQuery();
            ArrayList<Prodotto> list = new ArrayList<>();

            while(rs.next()) {
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
                list.add(p);
            }

            ps.close();

            return list;


        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }

    public void doUpdateKeyboard(Prodotto p) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("UPDATE Prodotto SET nome = ?, marca = ?, prezzo = ?, percSconto = ?, descrizione = ?, pezziDisponibili = ?, pathImg = ?, isRGB = ?, keyboardSize = ?, keyboardLayout = ?, isHotSwappable = ?, tipoSwitch= ? WHERE idProdotto = ?");
            ps.setString(1, p.getNome());
            ps.setString(2, p.getMarca());
            ps.setDouble(3, p.getPrezzo());
            ps.setByte(4, p.getPercSconto());
            ps.setString(5, p.getDescrizione());
            ps.setInt(6, p.getPezziDisponibili());
            ps.setString(7, p.getPathImg());
            ps.setBoolean(8, p.isRGB());
            ps.setByte(9, p.getKeyboardSize());
            ps.setString(10, p.getKeyboardLayout());
            ps.setBoolean(11, p.isHotSwappable());
            ps.setString(12, p.getTipoSwitch());
            ps.setInt(13, p.getIdProdotto());

            int rs = ps.executeUpdate();

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public void doDeleteProduct(int id) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("DELETE FROM Prodotto WHERE idProdotto = ?");
            ps.setInt(1, id);

            int rs = ps.executeUpdate();

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public void doSaveSwitch(Prodotto p) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Prodotto(nome, marca, prezzo, percSconto, descrizione, pezziDisponibili, pathImg, isRGB, categoria, tipoSwitch) VALUES (?,?,?,?,?,?,?,?,?,?)");
            ps.setString(1, p.getNome());
            ps.setString(2, p.getMarca());
            ps.setDouble(3, p.getPrezzo());
            ps.setByte(4, p.getPercSconto());
            ps.setString(5, p.getDescrizione());
            ps.setInt(6, p.getPezziDisponibili());
            ps.setString(7, p.getPathImg());
            ps.setBoolean(8, p.isRGB());
            ps.setString(9, p.getCategoria());
            ps.setString(10, p.getTipoSwitch());

            int rs = ps.executeUpdate();

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public ArrayList<Prodotto> doRetrieveBySwitch() {
        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT idProdotto, nome, marca, prezzo, percSconto, descrizione, pezziDisponibili, pathImg, isRGB, categoria, tipoSwitch FROM Prodotto WHERE categoria = 'Switch'");
            ResultSet rs = ps.executeQuery();
            ArrayList<Prodotto> list = new ArrayList<>();

            while(rs.next()) {
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
                p.setTipoSwitch(rs.getString(11));
                list.add(p);
            }

            ps.close();

            return list;


        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }

    public void doUpdateSwitch(Prodotto p) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("UPDATE Prodotto SET nome = ?, marca = ?, prezzo = ?, percSconto = ?, descrizione = ?, pezziDisponibili = ?, pathImg = ?, isRGB = ?, tipoSwitch= ? WHERE idProdotto = ?");
            ps.setString(1, p.getNome());
            ps.setString(2, p.getMarca());
            ps.setDouble(3, p.getPrezzo());
            ps.setByte(4, p.getPercSconto());
            ps.setString(5, p.getDescrizione());
            ps.setInt(6, p.getPezziDisponibili());
            ps.setString(7, p.getPathImg());
            ps.setBoolean(8, p.isRGB());
            ps.setString(9, p.getTipoSwitch());
            ps.setInt(10, p.getIdProdotto());

            int rs = ps.executeUpdate();

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public void doSaveKeycap(Prodotto p) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("INSERT INTO Prodotto(nome, marca, prezzo, percSconto, descrizione, pezziDisponibili, pathImg, isRGB, categoria, keycapMaterial, keycapProfile) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
            ps.setString(1, p.getNome());
            ps.setString(2, p.getMarca());
            ps.setDouble(3, p.getPrezzo());
            ps.setByte(4, p.getPercSconto());
            ps.setString(5, p.getDescrizione());
            ps.setInt(6, p.getPezziDisponibili());
            ps.setString(7, p.getPathImg());
            ps.setBoolean(8, p.isRGB());
            ps.setString(9, p.getCategoria());
            ps.setString(10, p.getKeycapMaterial());
            ps.setString(11, p.getKeycapProfile());

            int rs = ps.executeUpdate();

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public ArrayList<Prodotto> doRetrieveByKeycap() {
        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("SELECT idProdotto, nome, marca, prezzo, percSconto, descrizione, pezziDisponibili, pathImg, isRGB, categoria, keycapMaterial, keycapProfile FROM Prodotto WHERE categoria = 'Keycap'");
            ResultSet rs = ps.executeQuery();
            ArrayList<Prodotto> list = new ArrayList<>();

            while(rs.next()) {
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
                p.setKeycapMaterial(rs.getString(11));
                p.setKeycapProfile(rs.getString(12));
                list.add(p);
            }

            ps.close();

            return list;


        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }

    public void doUpdateKeycap(Prodotto p) {

        try (Connection connection = ConPool.getConnection()) {

            PreparedStatement ps = connection.prepareStatement("UPDATE Prodotto SET nome = ?, marca = ?, prezzo = ?, percSconto = ?, descrizione = ?, pezziDisponibili = ?, pathImg = ?, isRGB = ?, keycapMaterial = ?, keycapProfile = ? WHERE idProdotto = ?");
            ps.setString(1, p.getNome());
            ps.setString(2, p.getMarca());
            ps.setDouble(3, p.getPrezzo());
            ps.setByte(4, p.getPercSconto());
            ps.setString(5, p.getDescrizione());
            ps.setInt(6, p.getPezziDisponibili());
            ps.setString(7, p.getPathImg());
            ps.setBoolean(8, p.isRGB());
            ps.setString(9, p.getKeycapMaterial());
            ps.setString(10, p.getKeycapProfile());
            ps.setInt(11, p.getIdProdotto());

            int rs = ps.executeUpdate();

            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }


}
