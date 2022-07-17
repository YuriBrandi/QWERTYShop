$(document).ready(function (){

    var lista_prodotti = [];
    var lista_prodotti_filtrati = [];


    $.ajax({
        type: "GET",
        url: "show-products",
        success: function (data) {
            console.log(data.length);
            lista_prodotti = data;

            applica_filtri($('.search-txt_box').val());
            show_prod(lista_prodotti_filtrati);
        }
    });

    function applica_filtri(search_query, categ){
        lista_prodotti_filtrati = [];
        for(var i = 0; i < lista_prodotti.length; i++) {
            if (lista_prodotti[i].nome.toLowerCase().includes(search_query) ||
                lista_prodotti[i].marca.toLowerCase().includes(search_query))
                        lista_prodotti_filtrati.push(lista_prodotti[i]);
        }
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

        applica_filtri($(this).val());
        console.log(lista_prodotti_filtrati.length);
        show_prod(lista_prodotti_filtrati);
    });
});