$(document).ready(function(){
    //carousel
   window.setInterval(rotateSlides, 4000); // Durata di una slide (4sec)

    function rotateSlides(){
        // Get the first slide and store it
        var $firstSlide = $('#carousel').find('div:first');

        // Larghezza della prima slide.
        var width = $firstSlide.width();

        // Sposta con animazione la prima slide della quantità della sua larghezza (facendola scorrere completamente)
        // Durata della transizione: 1 sec.
        $firstSlide.animate({marginLeft: -width}, 1000, function(){
            // Poni la prima slide del ciclo come ultimo div
            var $lastSlide = $('#carousel').find('div:last');
            $lastSlide.after($firstSlide);

            // Reset del margin left.
            $firstSlide.css({marginLeft: 0});
        });
    }

    $.ajax({
        type: "GET",
        url: "show-products",
        success: function (data) {
            //window.alert(data[0].indirizzo);
            var len = data.length;
            console.log(len);

            for (var i = len - 1; i > len - 9; i--) {
                if(data[i].percSconto == 0)
                    $('.products').append("" +
                        "              <div class=\"col-lg-3 col-sm-6 col-xs-12 center-div\">" +
                        "             <form action=\"info-product\" method=\"get\">" +
                        "              <input type=\"hidden\" name=\"id\" value=\"" + data[i].idProdotto + "\">"+
                        "                <div class=\"card\">" +
                        "                    <img src=\"" + data[i].pathImg + "\"> " +
                        "                    <div class=\"card-body\">" +
                        "                        <h3>" + data[i].nome + "</h3>" +
                        "                        <p>" + data[i].prezzo + "&euro;</p>" +
                        "                    </div>" +
                        "                </div>" +
                        "              </form>" +
                        "               </div>");
                else {
                    var finPrice = (data[i].prezzo / 100) * (100 - data[i].percSconto);
                    $('.products').append("" +
                        "               <div class=\"col-lg-3 col-sm-6 col-xs-12 center-div\"> " +
                        "                   <form action=\"info-product\" method=\"get\">" +
                            "                   <input type=\"hidden\" name=\"id\" value=\"" + data[i].idProdotto + "\">"+
                            "                   <div class=\"card\">" +
                            "                       <img src=\"" + data[i].pathImg + "\"> " +
                            "                       <div class=\"card-body\">" +
                            "                           <h3>" + data[i].nome + "</h3>" +
                            "                           <p><del>" + data[i].prezzo + "&euro;" +
                            "                           </del> <i class=\"fa-solid fa-arrow-right\"></i>" +
                            "                          " + finPrice.toFixed(2) + "&euro; (-" + data[i].percSconto + "%)</p>" +
                            "                       </div>" +
                            "                   </div>" +
                        "                   </form>" +
                        "                </div>");
                }
            }
        }
    });

    $('.latest-products').on('click', '.card', function () {
        $(this).parents('form').submit()
    });
});