$(document).ready(function (){

    let images = [];

    function list_images_products() {

        $.ajax({
            type: "GET",
            url: "show-images-folder",
            dataType : "json",
            success: function (data) {
               for (var i = 0; i < data.length; i++)
                   images.push(data[i]);
            }
        });

    }

    console.log(images);

    function load_keyboards() {

        list_images_products();

        $.ajax({
            url: "show-keyboards",
            type: "GET",
            success: function (data) {
                var optionImages = "";
                for (var i = 0; i < data.length; i++) {

                    for (var j = 0; j < images.length; j++) {
                        if (data[i].pathImg.includes(images[j]))
                            optionImages += "<option value=\"" + images[j] + "\" selected >" + images[j] + "</option>";
                        else
                            optionImages += "<option value=\"" + images[j] + "\" >" + images[j] + "</option>";
                    }

                    $('.table.keyboard').append("" +
                        "<tr>" +
                        "   <td>" + data[i].idProdotto + "</td>" +
                        "   <td>" + data[i].pezziDisponibili + "</td>" +
                        "   <td>" + data[i].nome + "</td>" +
                        "   <td>" + data[i].marca + "</td>" +
                        "   <td>" + data[i].prezzo + "</td>" +
                        "   <td>" + data[i].percSconto+ "%</td>" +
                        "   <td>" +
                        "       <button class=\"delete-btn circle-btn\"><i class=\"fa-solid fa-trash\"></i></button>" +
                        "       <button class=\"circle-btn open-modal\" modal-target=\"keyboard-"+data[i].idProdotto+"\"><i class=\"fa-solid fa-pencil\"></i></button>" +
                        "   </td>" +
                        "</tr>");

                    $("body").append(" <div class=\"modal-overlay center\" modal-name=\"keyboard-"+data[i].idProdotto+"\">\n" +
                        "        <div class=\"modal-content\">\n" +
                        "            <div class=\"close-mod\">\n" +
                        "                <a href=\"#\" class=\"close-modal\"><i class=\"fa-solid fa-xmark\"></i></a>\n" +
                        "            </div>\n" +
                        "            <h3>Modifica Tastiera</h3>\n" +
                        "            <form action=\"update-keyboard\" method=\"post\" id=\"#add-keyboard\">\n" +
                        "                <input type=\"hidden\" name=\"idProdotto\" value=\" "+ data[i].idProdotto + "\" >"+
                        "                <div class=\"container\">\n" +
                        "                    <div class=\"row\">\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Nome\" name=\"nome\" value=\" "+ data[i].nome + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Marca\" name=\"marca\" value=\" "+ data[i].marca + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Pezzi\" name=\"numPezzi\" value=\" "+ data[i].pezziDisponibili + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Prezzo\" name=\"prezzo\" value=\" "+ data[i].prezzo + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Sconto\" name=\"sconto\" value=\" "+ data[i].percSconto + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"img-selector input-txt_fld table-input\" name=\"img\">\n" + optionImages +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"rgb\">\n" +
                        "                                <option value=\"\" disabled selected>RGB</option>\n" +
                        "                                <option value=\"1\">Sì</option>\n" +
                        "                                <option value=\"0\">No</option>\n" +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"hotswappable\">\n" +
                        "                                <option value=\"\" disabled selected>HotSwappable</option>\n" +
                        "                                <option value=\"1\">Sì</option>\n" +
                        "                                <option value=\"0\">No</option>\n" +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"layout\">\n" +
                        "                                <option value=\"\" disabled selected>Layout</option>\n" +
                        "                                <option value=\"ISO\">ISO</option>\n" +
                        "                                <option value=\"ANSI\">ANSI</option>\n" +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"switch\">\n" +
                        "                                <option value=\"\" disabled selected>Tipo Switch</option>\n" +
                        "                                <option value=\"Tactile\">Tattile</option>\n" +
                        "                                <option value=\"Linear\">Lineare</option>\n" +
                        "                                <option value=\"Clicky\">Clicky</option>\n" +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"dimensione\">\n" +
                        "                                <option value=\"\" disabled selected>Dimensione</option>\n" +
                        "                                <option value=\"40\">20%</option>\n" +
                        "                                <option value=\"60\">60%</option>\n" +
                        "                                <option value=\"65\">65%</option>\n" +
                        "                                <option value=\"75\">75%</option>\n" +
                        "                                <option value=\"80\">80%</option>\n" +
                        "                                <option value=\"95\">95%</option>\n" +
                        "                                <option value=\"100\">100%</option>\n" +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-12 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Descrizione\" name=\"descrizione\" value=\" "+ data[i].descrizione + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"center\">\n" +
                        "                            <button class=\"form-submit\" type=\"submit\">Invio </button>\n" +
                        "                        </div>\n" +
                        "                    </div>\n" +
                        "                </div>\n" +
                        "            </form>\n" +
                        "        </div>\n" +
                        "    </div>");

                }

            }
        });

    }

    load_keyboards();

    /*
    function load_products(){

        list_images_products();

        $.ajax({
            type: "GET",
            url: "show-products",

            success: function (data) {
                var lenght = data.length;
                console.log(length);

                for(var i = 0; i < lenght; i++){

                    var optionImages = "";

                    for (var j = 0; j < images.length; j++) {
                        if (data[i].pathImg.includes(images[j]))
                            optionImages += "<option value=\"" + images[j] + "\" selected >" + images[j] + "</option>";
                        else
                            optionImages += "<option value=\"" + images[j] + "\" >" + images[j] + "</option>";
                    }

                    $('.table').append(
                        "<tr>" +
                        "   <td>" +
                                data[i].idProdotto +
                        "   <td>" +
                        "       <input type=\"text\" class=\"input-txt_fld quantity_fld\" name=\"qnty\" value =" + data[i].pezziDisponibili + ">" +
                        "   </td>" +
                        "   <td>" +
                        "       <input type=\"text\" class=\"input-txt_fld table-input\" name=\"qnty\" value =" + data[i].nome + ">" +
                        "   </td>" +
                        "   <td>" +
                        "       <input type=\"text\" class=\"input-txt_fld table-input\" name=\"qnty\" value =" + data[i].marca + ">" +
                        "   </td>" +
                        "   <td>" +
                        "       <input type=\"text\" class=\"input-txt_fld quantity_fld\" name=\"qnty\" value =" + data[i].prezzo + ">" +
                        "   </td>" +
                        "   <td>" +
                        "       <input type=\"text\" class=\"input-txt_fld quantity_fld\" name=\"qnty\" value =" + data[i].percSconto + ">" +
                        "   </td>" +
                        "   <td>" +
                        "       <select  class=\"img-selector input-txt_fld table-input\" name=\"image\">" +
                                    optionImages +
                        "       </select>" +
                        "   </td>" +
                        "   <td>" +
                        "       <input type=\"text\" class=\"input-txt_fld table-input\" name=\"qnty\" value =" + data[i].descrizione + ">" +
                        "   </td>" +
                        "   <td>"  +
                        "       <select class=\"input-txt_fld table-input\" name=\"categoria\">" +
                        "                    <option>Tastiera</option>" +
                        "                    <option>Switch</option>" +
                        "                    <option>Keycap</option>" +
                        "       </select>" +
                        "   </td>" +
                        "   <td>"  +
                        "       <select class=\"input-txt_fld table-input\" name=\"rgb\">" +
                        "                    <option>Sì</option>" +
                        "                    <option>No</option>" +
                        "       </select>" +
                        "   </td>" +
                        "</tr>");
                }

            }
        });
    }

    load_products();

    */

    $('#upload-image-button').click(function (){

        $("#err_msg").text("");

        var file = $('#img-upl')[0].files[0];
        var formData = new FormData();
        formData.append( "image", file);

        $('#img-upl').val("");

        // Check file
        if(file === undefined) {
            $("#err_msg").text("Non hai inserito nessun'immagine");
        }
        else{
            $.ajax({
                type: "POST",
                url: "image-upload",
                data: formData,
                processData: false,
                contentType: false,

                success: function(data) {
                    console.log(data);
                    var file_name = data.fileName;

                    if( file_name == "error" )
                        $("#err_msg").text("Caricamento immagine non riuscito");
                    else
                        $(".img-selector").append("<option>" + file_name + "</option>")
                }
            });
        }
    });

    $("body").on('click', '.open-modal', function () {
        var modal = $(this).attr('modal-target');
        $('[modal-name="' + modal + '"]').addClass('active');
        $('body').addClass('no-scroll');
    });

    $("body").on('click', '.close-modal', function () {
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');
    });

});