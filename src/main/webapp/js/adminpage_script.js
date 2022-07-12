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

                for (var i = 0; i < data.length; i++) {

                    var optionImages = "";
                    var optionRGB = "";
                    var optionHotSwappable = "";
                    var optionLayout = "";
                    var optionSwitch = "";
                    var optionDimensione = "";

                    if (data[i].RGB == true)
                        optionRGB += "<option value=\"1\">Sì</option selected><option value=\"0\">No</option>";
                    else
                        optionRGB += "<option value=\"1\">Sì</option><option value=\"0\" selected>No</option>";

                    if (data[i].hotSwappable == true)
                        optionHotSwappable += "<option value=\"1\">Sì</option selected><option value=\"0\">No</option>";
                    else
                        optionHotSwappable += "<option value=\"1\">Sì</option><option value=\"0\" selected>No</option>";

                    if (data[i].keyboardLayout.includes("ISO"))
                        optionLayout += "<option value=\"ISO\" selected>ISO</option><option value=\"ANSI\">ANSI</option>";
                    else
                        optionLayout += "<option value=\"ISO\">ISO</option><option value=\"ANSI\" selected>ANSI</option>";

                    if (data[i].tipoSwitch == null)
                        optionSwitch += "<option value=\"\" disabled selected>Tipo Switch</option>" +
                                        "<option value=\"Tactile\">Tattile</option>" +
                                        "<option value=\"Linear\">Lineare</option>" +
                                        " <option value=\"Clicky\">Clicky</option>";
                    else if (data[i].tipoSwitch.includes("Tactile"))
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Tactile\" selected>Tattile</option>" +
                            "<option value=\"Linear\">Lineare</option>" +
                            " <option value=\"Clicky\">Clicky</option>";
                    else if (data[i].tipoSwitch.includes("Linear"))
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Tactile\">Tattile</option>" +
                            "<option value=\"Linear\" selected>Lineare</option>" +
                            " <option value=\"Clicky\">Clicky</option>";
                    else
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Tactile\">Tattile</option>" +
                            "<option value=\"Linear\">Lineare</option>" +
                            " <option value=\"Clicky\" selected>Clicky</option>";

                    if (data[i].keyboardSize == 20)
                        optionDimensione = "<option value=\"20\" selected>20%</option>" +
                                           "<option value=\"60\">60%</option>" +
                                           "<option value=\"65\">65%</option>" +
                                           "<option value=\"75\">75%</option>" +
                                           "<option value=\"80\">80%</option>" +
                                           "<option value=\"95\">95%</option>" +
                                           "<option value=\"100\">100%</option>";
                    else if (data[i].keyboardSize == 60)
                        optionDimensione = "<option value=\"20\">20%</option>" +
                            "<option value=\"60\" selected>60%</option>" +
                            "<option value=\"65\">65%</option>" +
                            "<option value=\"75\">75%</option>" +
                            "<option value=\"80\">80%</option>" +
                            "<option value=\"95\">95%</option>" +
                            "<option value=\"100\">100%</option>";
                    else if (data[i].keyboardSize == 65)
                        optionDimensione = "<option value=\"20\">20%</option>" +
                            "<option value=\"60\">60%</option>" +
                            "<option value=\"65\" selected>65%</option>" +
                            "<option value=\"75\">75%</option>" +
                            "<option value=\"80\">80%</option>" +
                            "<option value=\"95\">95%</option>" +
                            "<option value=\"100\">100%</option>";
                    else if (data[i].keyboardSize == 75)
                        optionDimensione = "<option value=\"20\">20%</option>" +
                            "<option value=\"60\">60%</option>" +
                            "<option value=\"65\">65%</option>" +
                            "<option value=\"75\" selected>75%</option>" +
                            "<option value=\"80\">80%</option>" +
                            "<option value=\"95\">95%</option>" +
                            "<option value=\"100\">100%</option>";
                    else if (data[i].keyboardSize == 80)
                        optionDimensione = "<option value=\"20\">20%</option>" +
                            "<option value=\"60\">60%</option>" +
                            "<option value=\"65\">65%</option>" +
                            "<option value=\"75\">75%</option>" +
                            "<option value=\"80\" selected>80%</option>" +
                            "<option value=\"95\">95%</option>" +
                            "<option value=\"100\">100%</option>";
                    else if (data[i].keyboardSize == 95)
                        optionDimensione = "<option value=\"20\">20%</option>" +
                            "<option value=\"60\">60%</option>" +
                            "<option value=\"65\">65%</option>" +
                            "<option value=\"75\">75%</option>" +
                            "<option value=\"80\">80%</option>" +
                            "<option value=\"95\" selected>95%</option>" +
                            "<option value=\"100\">100%</option>";
                    else if (data[i].keyboardSize == 100)
                        optionDimensione = "<option value=\"20\">20%</option>" +
                            "<option value=\"60\">60%</option>" +
                            "<option value=\"65\">65%</option>" +
                            "<option value=\"75\">75%</option>" +
                            "<option value=\"80\">80%</option>" +
                            "<option value=\"95\">95%</option>" +
                            "<option value=\"100\" selected>100%</option>";


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
                        "            <form class=\"update-keyboard\">\n" +
                        "                <input type=\"hidden\" name=\"idProdotto\" value=\""+ data[i].idProdotto + "\" >"+
                        "                <div class=\"container\">\n" +
                        "                    <div class=\"row\">\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Nome\" name=\"nome\" value=\""+ data[i].nome + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Marca\" name=\"marca\" value=\""+ data[i].marca + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Pezzi\" name=\"numPezzi\" value=\""+ data[i].pezziDisponibili + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Prezzo\" name=\"prezzo\" value=\""+ data[i].prezzo + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Sconto\" name=\"sconto\" value=\""+ data[i].percSconto + "\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"img-selector input-txt_fld table-input\" name=\"img\">\n" + optionImages +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"rgb\">\n" +
                        "                                <option value=\"\" disabled>RGB</option>\n" + optionRGB +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"hotswappable\">\n" +
                        "                                <option value=\"\" disabled>HotSwappable</option>\n" + optionHotSwappable +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"layout\">\n" +
                        "                                <option value=\"\" disabled>Layout</option>\n" + optionLayout +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-2 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"switch\">\n" + optionSwitch +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"dimensione\">\n" +
                        "                                <option value=\"\" disabled>Dimensione</option>\n" + optionDimensione +
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

    function cleanup_table_keyboard(){
        /*
            Elimina tutti i tr della tabella tranne
            la riga righe_tab[0] (ovvero l'intestazione)
         */
        var righe_tab = $('.table.keyboard tr');
        console.log(righe_tab.length);
        for(var i = 1; i < righe_tab.length; i++)
            righe_tab[i].remove();
    }


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

    $("body").on('submit', '.update-keyboard', function (e) {

        e.preventDefault();

        $.ajax({
            url: "update-keyboard",
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                cleanup_table_keyboard();
                load_keyboards();
            }
        });

    });

    $("body").on('submit', '.add-keyboard', function (e) {
        e.preventDefault();

        var form = $(this);

        $.ajax({
            url: "add-keyboard",
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                form.trigger('reset');
                cleanup_table_keyboard();
                load_keyboards();
            }
        });

    });

    $("body").on('click', '.delete-btn', function () {

        var id = $(this).closest('tr').children('td:first').text();

        $.ajax({
            url: "delete-product",
            type: "GET",
            data: {
                idProdotto: id
            },
            success: function () {
                cleanup_table_keyboard();
                load_keyboards();
            }
        });

    });

    $("body").on('click', '.open-modal', function (e) {
        e.preventDefault();
        var modal = $(this).attr('modal-target');
        $('[modal-name="' + modal + '"]').addClass('active');
        $('body').addClass('no-scroll');
    });

    $("body").on('click', '.close-modal', function (e) {
        e.preventDefault();
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');


    });

});