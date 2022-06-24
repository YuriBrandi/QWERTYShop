$(document).ready(function(){
    //carousel
    var interval = window.setInterval(rotateSlides, 4000); // Duration until slide changes (3sec)

    function rotateSlides(){
        // Get the first slide and store it
        var $firstSlide = $('#carousel').find('div:first');

        // Get the width of the slide so we know how much to slide by
        var width = $firstSlide.width();

        // Animate the first slide to move to the left the length of the
        // width. Set 1000 (1sec) to be the length of the slide transition.
        $firstSlide.animate({marginLeft: -width}, 1000, function(){
            // Reorder slides - move the $firstSlide after the last slide
            var $lastSlide = $('#carousel').find('div:last');
            $lastSlide.after($firstSlide);

            // Reset slide position to the end of the queue
            $firstSlide.css({marginLeft: 0});
        });
    }

    $.ajax({
        type: "GET",
        url: "show-products",
        success: function (data) {
            //window.alert(data[0].indirizzo);
            var lenght = data.length;
            console.log(length);

            for (var i = 0; i < lenght; i++) {
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
                            "                          " + finPrice + "&euro; (-" + data[i].percSconto + "%)</p>" +
                            "                       </div>" +
                            "                   </div>" +
                        "                   </form>" +
                        "                </div>");
                }
            }
        }
    });

    $('.latest-products').on('click', '.card', function () {
        $(this).closest('form').submit()
    });
});