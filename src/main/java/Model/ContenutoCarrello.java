package Model;

public class ContenutoCarrello {
    private String email;
    private int idProdotto;
    private short quantita;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getIdProdotto() {
        return idProdotto;
    }

    public void setIdProdotto(int idProdotto) {
        this.idProdotto = idProdotto;
    }

    public short getQuantita() {
        return quantita;
    }

    public void setQuantita(short quantita) {
        this.quantita = quantita;
    }

    //Per debug
    @Override
    public String toString() {
        return "ContenutoCarrello{" +
                "email='" + email + '\'' +
                ", idProdotto=" + idProdotto +
                ", quantita=" + quantita +
                '}';
    }
}
