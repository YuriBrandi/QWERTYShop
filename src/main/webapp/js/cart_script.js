$(document).ready(function () {

    function load_cart(){
        $.ajax({
            type: "GET",
            data: {
              sendAsJson: true
            },
            url: "show-cart",
            success: function (data) {
                //console.log(data);
                if(data == undefined || !data.length || data.empty_cart){
                    $('.table').before('<h2>Il Carrello è vuoto.</h2>');
                    $('.form-submit').prop("disabled", true);
                    $('select[name = sel_addr]').prop("disabled", true);
                }
                else {
                    //console.log(data[0]);
                        for(var i = 0; i < data.length; i++){
                            $('.table').append(
                                "<tr>" +
                                "                    <td>" + data[i].nome_prod+ "</td>" +
                                "                    <td>" +
                                "                        <button class=\"remove-btn circle-btn\">" +
                                "                            <i class=\"fa-solid fa-minus\"></i>" +
                                "                        </button>" +
                                "                        <input type=\"text\" class=\"input-txt_fld quantity_fld\" value = \"" + data[i].qnty_prod + "\" readonly>" +
                                "                        <button class=\"add-btn circle-btn\"" + checkQuantity(data[i].qnty_prod, data[i].disp_prod) + ">" +
                                "                            <i class=\"fa-solid fa-plus\"></i>" +
                                "                        </button>" +
                                "                    </td>" +
                                "                    <input type=\"hidden\" name=\"prod_id\" value = \"" + data[i].id_prod + "\">" +
                                "                    <td class=\"item_price\">" + (data[i].qnty_prod * data[i].prezzo_prod).toFixed(2) + "&euro;</td>" +
                                "                    <td>" +
                                "                        <button class=\"delete-btn circle-btn\">" +
                                "                            <i class=\"fa-solid fa-trash\"></i>" +
                                "                        </button>" +
                                "                    </td>" +
                                "                </tr>"
                            );
                        }

                     }
                var prezzo_totale = 0;
                $('.item_price').each(function (){
                    prezzo_totale += parseFloat(this.innerHTML);
                });
                $('#totale').text("Totale: " + prezzo_totale.toFixed(2) + "€");
            }
        });
    }

    load_cart();

    function cleanup_table(){
        /*
            Elimina tutti i tr della tabella tranne
            la riga righe_tab[0] (ovvero l'intestazione)
         */
        var righe_tab = $('.table tr');
        console.log(righe_tab.length);
        for(var i = 1; i < righe_tab.length; i++)
            righe_tab[i].remove();
    }


    $('body').on('click', '.add-btn', function (){
        var prod_id = $(this).parent().siblings('input[name = prod_id]').val();
        console.log("Entry: id = " + prod_id);

        $.ajax({
            type: "GET",
            data: {
                id: prod_id,
                qnty: 1
            },
            url: "add-to-cart",
            success: function (data) {
                if(data.non_disp)
                    $('#err_msg').append('Pezzi disponibili esauriti');
                else{
                    cleanup_table();
                    load_cart();
                }
            }
        });
    });

    $('body').on('click', '.remove-btn', function (){
        var prod_id = $(this).parent().siblings('input[name = prod_id]').val();
        console.log("Entry: id = " + prod_id);

        $.ajax({
            type: "GET",
            data: {
                id: prod_id,
                qnty: 1
            },
            url: "remove-from-cart",
            success: function (data) {
                console.log(data);
                if(data.status == "not_in_cart")
                    console.error("Prodotto " + prod_id + " non presente!");
                else{
                    cleanup_table();
                    load_cart();
                }
            }
        });
    });

    $('body').on('click', '.delete-btn', function (){
       var prod_id = $(this).parent().siblings('input[name = prod_id]').val();
       console.log("Entry: id = " + prod_id);

        $.ajax({
            type: "GET",
            data: {
                id: prod_id,
                qnty: -1 //ALL
            },
            url: "remove-from-cart",
            success: function (data) {
                if(data.status == "not_in_cart")
                    console.error("Prodotto " + prod_id + " non presente!");
                else{
                    cleanup_table();
                    load_cart();
                }
            }
        });
    });

    $('#svuota_cart').click(function (){
        $.ajax({
            type: "GET",
            data: {
                id: -1, //ALL
                qnty: -1 //ALL
            },
            url: "remove-from-cart",
            success: function (data) {
                if(data.status == "not_in_cart")
                    console.error("Prodotto " + prod_id + " non presente!");
                else{
                    cleanup_table();
                    load_cart();
                }
            }
        });
    });
});

function checkQuantity(cart_q, avail_q){
    return cart_q >= avail_q ? 'disabled' : '';
}