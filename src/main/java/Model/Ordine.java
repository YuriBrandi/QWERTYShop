package Model;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Ordine {
    private int idOrdine;
    private String email, indirizzoSpedizione, tracking, dataOrdine;
    private double prezzoFinale;

    public int getIdOrdine() {
        return idOrdine;
    }

    public void setIdOrdine(int idOrdine) {
        this.idOrdine = idOrdine;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIndirizzoSpedizione() {
        return indirizzoSpedizione;
    }

    public void setIndirizzoSpedizione(String indirizzoSpedizione) {
        this.indirizzoSpedizione = indirizzoSpedizione;
    }

    public String getTracking() {
        return tracking;
    }

    public void setTracking(String tracking) {
        this.tracking = tracking;
    }

    public String getDataOrdine() {
        return dataOrdine;
    }

    public void setDataOrdine(String dataOrdine) {
        this.dataOrdine = dataOrdine;
    }

    public void setDataOrdine(GregorianCalendar cal)  {
        dataOrdine = String.valueOf(cal.get(Calendar.YEAR)) + '-' +
                            (cal.get(Calendar.MONTH) + 1) + '-' +
                            cal.get(Calendar.DAY_OF_MONTH);
    }

    public double getPrezzoFinale() {
        return prezzoFinale;
    }

    public void setPrezzoFinale(double prezzoFinale) {
        this.prezzoFinale = prezzoFinale;
    }

    @Override
    public String toString() {
        return "Ordine{" +
                "idOrdine=" + idOrdine +
                ", email='" + email + '\'' +
                ", indirizzoSpedizione='" + indirizzoSpedizione + '\'' +
                ", tracking='" + tracking + '\'' +
                ", dataOrdine='" + dataOrdine + '\'' +
                ", prezzoFinale=" + prezzoFinale +
                '}';
    }
}
