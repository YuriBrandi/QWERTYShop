package Model;

public class Includere {
    private int idOrdine, idProdotto;
    private short quantita;

    public int getIdOrdine() {
        return idOrdine;
    }

    public void setIdOrdine(int idOrdine) {
        this.idOrdine = idOrdine;
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

    @Override
    public String toString() {
        return "Includere{" +
                "idOrdine=" + idOrdine +
                ", idProdotto=" + idProdotto +
                ", quantita=" + quantita +
                '}';
    }
}
