package Model;

public class Prodotto {
    private int idProdotto, pezziDisponibili;
    private String nome, marca, descrizione, pathImg, categoria, keyboardLayout, tipoSwitch, keycapMaterial, keycapProfile;
    private double prezzo;
    private byte percSconto, keyboardSize;
    private boolean RGB, hotSwappable;

    public int getIdProdotto() {
        return idProdotto;
    }

    public void setIdProdotto(int idProdotto) {
        this.idProdotto = idProdotto;
    }

    public int getPezziDisponibili() {
        return pezziDisponibili;
    }

    public void setPezziDisponibili(int pezziDisponibili) {
        this.pezziDisponibili = pezziDisponibili;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getPathImg() {
        return pathImg;
    }

    public void setPathImg(String pathImg) {
        this.pathImg = pathImg;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getKeyboardLayout() {
        return keyboardLayout;
    }

    public void setKeyboardLayout(String keyboardLayout) {
        this.keyboardLayout = keyboardLayout;
    }

    public String getTipoSwitch() {
        return tipoSwitch;
    }

    public void setTipoSwitch(String tipoSwitch) {
        this.tipoSwitch = tipoSwitch;
    }

    public String getKeycapMaterial() {
        return keycapMaterial;
    }

    public void setKeycapMaterial(String keycapMaterial) {
        this.keycapMaterial = keycapMaterial;
    }

    public String getKeycapProfile() {
        return keycapProfile;
    }

    public void setKeycapProfile(String keycapProfile) {
        this.keycapProfile = keycapProfile;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public byte getPercSconto() {
        return percSconto;
    }

    public void setPercSconto(byte percSconto) {
        this.percSconto = percSconto;
    }

    public boolean isRGB() {
        return RGB;
    }

    public void setRGB(boolean RGB) {
        this.RGB = RGB;
    }

    public boolean isHotSwappable() {
        return hotSwappable;
    }

    public void setHotSwappable(boolean hotSwappable) {
        this.hotSwappable = hotSwappable;
    }

    public byte getKeyboardSize() {
        return keyboardSize;
    }

    public void setKeyboardSize(byte keyboardSize) {
        this.keyboardSize = keyboardSize;
    }
}
