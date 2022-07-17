$(document).ready(function (){

    var lista_prodotti = [];
    var lista_prodotti_filtrati = [];

    var search_query = "";
    var categ;
    var isRgb, isHowSwap, dim_tast, layout_tast, tipo_switch, keycap_prof;

    $.ajax({
        type: "GET",
        url: "show-products",
        success: function (data) {
            console.log("Length iniziale: " + data.length);
            lista_prodotti = data;

            search_query = $('.search-txt_box').val();
            categ = $('select[name = categ]').val();

            if(categ != null)
                enableFilters();

            applica_filtri();
            show_prod(lista_prodotti_filtrati);
        }
    });

    function applica_filtri(){
        lista_prodotti_filtrati = [];

        for(var i = 0; i < lista_prodotti.length; i++) {
            if (lista_prodotti[i].nome.toLowerCase().includes(search_query) ||
                lista_prodotti[i].marca.toLowerCase().includes(search_query))
                        lista_prodotti_filtrati.push(lista_prodotti[i]);
        }

        if(isRgb != undefined && isRgb.length != 0)
            lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                console.log("filtro rgb");
                return prod.RGB == isRgb;
            });

        if(categ != undefined && categ.length != 0){

            lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                console.log("filtro categ");
                return prod.categoria == categ;
            });

            switch(categ){
                case "Tastiera":{

                    if(isHowSwap != undefined && isHowSwap.length != 0)
                        lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                            console.log("filtro isHowSwap");
                            return prod.hotSwappable == isHowSwap;
                        });

                    if(dim_tast != undefined && dim_tast.length != 0)
                    lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                        console.log("filtro dim");
                        return prod.keyboardSize == dim_tast;
                    });

                    if(layout_tast != undefined && layout_tast.length != 0)
                        lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                            console.log("filtro layout_tast");
                            return prod.keyboardLayout == layout_tast;
                        });

                }  //no break per attributi in comune
                case "Switch":{
                    if(tipo_switch != undefined && tipo_switch.length != 0)
                        lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                            console.log("filtro tipo_switch");
                            return prod.tipoSwitch == tipo_switch;
                        });
                }break;
                case "Keycap":{

                    if(keycap_prof != undefined && keycap_prof.length != 0)
                        lista_prodotti_filtrati = lista_prodotti_filtrati.filter(function (prod){
                            console.log("filtro keyap_pfo");
                            return prod.keycapProfile == keycap_prof;
                        });
                }break;
            }

        }

        console.log("Length finale: " + lista_prodotti_filtrati.length);
    }

    function show_prod(prods){

        $('.info_msg').html("");
        $('.products').html("");

        if(prods.length == 0)
            $('.info_msg').html("La ricerca non ha prodotto risultati");
        else
            for (var i = 0; i < prods.length; i++) {
                if(prods[i].percSconto == 0)
                    $('.products').append("" +
                        "              <div class=\"col-lg-3 col-sm-6 col-xs-12 center-div\">" +
                        "             <form action=\"info-product\" method=\"get\">" +
                        "              <input type=\"hidden\" name=\"id\" value=\"" + prods[i].idProdotto + "\">"+
                        "                <div class=\"card\">" +
                        "                    <img src=\"" + prods[i].pathImg + "\"> " +
                        "                    <div class=\"card-body\">" +
                        "                        <h3>" + prods[i].nome + "</h3>" +
                        "                        <p>" + prods[i].prezzo + "&euro;</p>" +
                        "                    </div>" +
                        "                </div>" +
                        "              </form>" +
                        "               </div>");
                else {
                    var finPrice = (prods[i].prezzo / 100) * (100 - prods[i].percSconto);
                    $('.products').append("" +
                        "               <div class=\"col-lg-3 col-sm-6 col-xs-12 center-div\"> " +
                        "                   <form action=\"info-product\" method=\"get\">" +
                        "                   <input type=\"hidden\" name=\"id\" value=\"" + prods[i].idProdotto + "\">"+
                        "                   <div class=\"card\">" +
                        "                       <img src=\"" + prods[i].pathImg + "\"> " +
                        "                       <div class=\"card-body\">" +
                        "                           <h3>" + prods[i].nome + "</h3>" +
                        "                           <p><del>" + prods[i].prezzo + "&euro;" +
                        "                           </del> <i class=\"fa-solid fa-arrow-right\"></i>" +
                        "                          " + finPrice.toFixed(2) + "&euro; (-" + prods[i].percSconto + "%)</p>" +
                        "                       </div>" +
                        "                   </div>" +
                        "                   </form>" +
                        "                </div>");
                }
            }
    }


    $('.products').on('click', '.card', function () {
        $(this).parents('form').submit();
    });

    $('.search-txt_box').on('input', function() {
        search_query = $(this).val();
        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = categ]').change(function (){
        categ = $(this).val();

        //cleanup
        var sel = $('select');
        for(var i = 3; i < sel.length; i++)
            $(sel[i]).prop("disabled", true);
            //Serve per convertire l'elemento DOM in oggetto jQuery.

        switch(categ){
            case "Tastiera":{
                $('select[name = hotswappable]').prop("disabled", false);
                $('select[name = dimensione]').prop("disabled", false);
                $('select[name = layout]').prop("disabled", false);
            }  //no break per attributi in comune
            case "Switch":{
                $('select[name = switch]').prop("disabled", false);
            }break;
            case "Keycap":{
                $('select[name = profilo]').prop("disabled", false);
            }break;
        }

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    function enableFilters(){

        //cleanup
        var sel = $('select');
        for(var i = 3; i < sel.length; i++)
            $(sel[i]).prop("disabled", true);
        //Serve per convertire l'elemento DOM in oggetto jQuery.

        switch(categ){
            case "Tastiera":{
                $('select[name = hotswappable]').prop("disabled", false);
                $('select[name = dimensione]').prop("disabled", false);
                $('select[name = layout]').prop("disabled", false);
            }  //no break per attributi in comune
            case "Switch":{
                $('select[name = switch]').prop("disabled", false);
            }break;
            case "Keycap":{
                $('select[name = profilo]').prop("disabled", false);
            }break;
        }

    }

    $('select[name = categ]').change(function (){
        categ = $(this).val();
        enableFilters();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = rgb]').change(function (){
        isRgb = $(this).val();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = hotswappable]').change(function (){
        isho = $(this).val();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = dimensione]').change(function (){
        dim_tast = $(this).val();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = layout]').change(function (){
        layout_tast = $(this).val();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = switch]').change(function (){
        tipo_switch = $(this).val();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

    $('select[name = profilo]').change(function (){
        keycap_prof = $(this).val();

        applica_filtri();
        show_prod(lista_prodotti_filtrati);
    });

});