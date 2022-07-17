$(document).ready(function (){

    var images = [];

    function list_images_products() {

        $.ajax({
            type: "GET",
            url: "show-images-folder",
            dataType : "json",
            success: function (data) {
                while(images.length > 0)
                    images.pop();
                for (var i = 0; i < data.length; i++)
                    images.push(data[i]);
            }
        });

    }

    console.log(images);

    function load_keyboards() {

        images = [];

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
                                        "<option value=\"Barebone\">Barebone</option>" +
                                        "<option value=\"Tactile\">Tattile</option>" +
                                        "<option value=\"Linear\">Lineare</option>" +
                                        " <option value=\"Clicky\">Clicky</option>";
                    else if (data[i].tipoSwitch.includes("Tactile"))
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Barebone\">Barebone</option>" +
                            "<option value=\"Tactile\" selected>Tattile</option>" +
                            "<option value=\"Linear\">Lineare</option>" +
                            " <option value=\"Clicky\">Clicky</option>";
                    else if (data[i].tipoSwitch.includes("Linear"))
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Barebone\">Barebone</option>" +
                            "<option value=\"Tactile\">Tattile</option>" +
                            "<option value=\"Linear\" selected>Lineare</option>" +
                            " <option value=\"Clicky\">Clicky</option>";
                    else if (data[i].tipoSwitch.includes("Clicky"))
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Barebone\">Barebone</option>" +
                            "<option value=\"Tactile\">Tattile</option>" +
                            "<option value=\"Linear\">Lineare</option>" +
                            " <option value=\"Clicky\" selected>Clicky</option>";
                    else
                        optionSwitch += "<option value=\"\" disabled>Tipo Switch</option>" +
                            "<option value=\"Barebone\" selected>Barebone</option>" +
                            "<option value=\"Tactile\">Tattile</option>" +
                            "<option value=\"Linear\">Lineare</option>" +
                            " <option value=\"Clicky\">Clicky</option>";

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
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Pezzi\" name=\"numPezzi\" value=\""+ data[i].pezziDisponibili + "\" min=\"0\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Prezzo\" name=\"prezzo\" value=\""+ data[i].prezzo + "\" min=\"0.01\" step=\"0.01\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Sconto\" name=\"sconto\" value=\""+ data[i].percSconto + "\" min = \"0\" max = \"100\">\n" +
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
                        "                            <textarea class=\"input-txt_fld table-input\" placeholder=\"Descrizione\" name=\"descrizione\">" + data[i].descrizione + "</textarea>\n" +
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

    function load_switchs() {

        images = [];

        list_images_products();

        $.ajax({
            url: "show-switchs",
            type: "GET",
            success: function (data) {

                for (var i = 0; i < data.length; i++) {

                    var optionRGB = "";
                    var optionSwitch = "";
                    var optionImages = "";

                    if (data[i].RGB == true)
                        optionRGB += "<option value=\"1\">Sì</option selected><option value=\"0\">No</option>";
                    else
                        optionRGB += "<option value=\"1\">Sì</option><option value=\"0\" selected>No</option>";

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

                    for (var j = 0; j < images.length; j++) {
                        if (data[i].pathImg.includes(images[j]))
                            optionImages += "<option value=\"" + images[j] + "\" selected >" + images[j] + "</option>";
                        else
                            optionImages += "<option value=\"" + images[j] + "\" >" + images[j] + "</option>";
                    }

                    $('.table.switch').append("" +
                        "<tr>" +
                        "   <td>" + data[i].idProdotto + "</td>" +
                        "   <td>" + data[i].pezziDisponibili + "</td>" +
                        "   <td>" + data[i].nome + "</td>" +
                        "   <td>" + data[i].marca + "</td>" +
                        "   <td>" + data[i].prezzo + "</td>" +
                        "   <td>" + data[i].percSconto+ "%</td>" +
                        "   <td>" +
                        "       <button class=\"delete-btn circle-btn\"><i class=\"fa-solid fa-trash\"></i></button>" +
                        "       <button class=\"circle-btn open-modal\" modal-target=\"switch-"+data[i].idProdotto+"\"><i class=\"fa-solid fa-pencil\"></i></button>" +
                        "   </td>" +
                        "</tr>");

                    $("body").append(" <div class=\"modal-overlay center\" modal-name=\"switch-"+data[i].idProdotto+"\">\n" +
                        "        <div class=\"modal-content\">\n" +
                        "            <div class=\"close-mod\">\n" +
                        "                <a href=\"#\" class=\"close-modal\"><i class=\"fa-solid fa-xmark\"></i></a>\n" +
                        "            </div>\n" +
                        "            <h3>Modifica Switch</h3>\n" +
                        "            <form class=\"update-switch\">\n" +
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
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Pezzi\" name=\"numPezzi\" value=\""+ data[i].pezziDisponibili + "\" min=\"0\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Prezzo\" name=\"prezzo\" value=\""+ data[i].prezzo + "\" min=\"0.01\" step=\"0.01\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Sconto\" name=\"sconto\" value=\""+ data[i].percSconto + "\" min = \"0\" max = \"100\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"img-selector input-txt_fld table-input\" name=\"img\">\n" + optionImages +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-6 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"rgb\">\n" +
                        "                                <option value=\"\" disabled>RGB</option>\n" + optionRGB +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-6 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"switch\">\n" + optionSwitch +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-12 col-sm-12\">\n" +
                        "                            <textarea class=\"input-txt_fld table-input\" placeholder=\"Descrizione\" name=\"descrizione\">" + data[i].descrizione + "</textarea>\n" +
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

    load_switchs();

    function load_keycaps() {

        images = [];

        list_images_products();

        $.ajax({
            url: "show-keycaps",
            type: "GET",
            success: function (data) {
                for (var i = 0; i < data.length; i++) {

                    var optionImages = "";
                    var optionRGB = "";
                    var optionProfile = "";

                    if (data[i].RGB == true)
                        optionRGB += "<option value=\"1\">Sì</option selected><option value=\"0\">No</option>";
                    else
                        optionRGB += "<option value=\"1\">Sì</option><option value=\"0\" selected>No</option>";

                    if (data[i].keycapProfile.includes("Cherry"))
                        optionProfile += " <option value=\"Cherry\" selected>Cherry</option>\n" +
                        "                  <option value=\"OEM\">OEM</option>\n" +
                        "                  <option value=\"XDA\">XDA</option>\n" +
                        "                  <option value=\"DSA\">DSA</option>\n" +
                        "                  <option value=\"SA\">SA</option>\n" +
                        "                  <option value=\"KAT\">KAT</option>\n" +
                        "                  <option value=\"KAM\">KAM</option>\n" +
                        "                   <option value=\"MT3\">MT3</option>";
                    else if (data[i].keycapProfile.includes("OEM"))
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\" selected>OEM</option>\n" +
                            "                  <option value=\"XDA\">XDA</option>\n" +
                            "                  <option value=\"DSA\">DSA</option>\n" +
                            "                  <option value=\"SA\">SA</option>\n" +
                            "                  <option value=\"KAT\">KAT</option>\n" +
                            "                  <option value=\"KAM\">KAM</option>\n" +
                            "                   <option value=\"MT3\">MT3</option>";
                    else if (data[i].keycapProfile.includes("XDA"))
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\">OEM</option>\n" +
                            "                  <option value=\"XDA\" selected>XDA</option>\n" +
                            "                  <option value=\"DSA\">DSA</option>\n" +
                            "                  <option value=\"SA\">SA</option>\n" +
                            "                  <option value=\"KAT\">KAT</option>\n" +
                            "                  <option value=\"KAM\">KAM</option>\n" +
                            "                   <option value=\"MT3\">MT3</option>";
                    else if (data[i].keycapProfile.includes("DSA"))
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\">OEM</option>\n" +
                            "                  <option value=\"XDA\">XDA</option>\n" +
                            "                  <option value=\"DSA\" selected>DSA</option>\n" +
                            "                  <option value=\"SA\">SA</option>\n" +
                            "                  <option value=\"KAT\">KAT</option>\n" +
                            "                  <option value=\"KAM\">KAM</option>\n" +
                            "                   <option value=\"MT3\">MT3</option>";
                    else if (data[i].keycapProfile.includes("SA"))
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\">OEM</option>\n" +
                            "                  <option value=\"XDA\">XDA</option>\n" +
                            "                  <option value=\"DSA\">DSA</option>\n" +
                            "                  <option value=\"SA\" selected>SA</option>\n" +
                            "                  <option value=\"KAT\">KAT</option>\n" +
                            "                  <option value=\"KAM\">KAM</option>\n" +
                            "                   <option value=\"MT3\">MT3</option>";
                    else if (data[i].keycapProfile.includes("KAT"))
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\">OEM</option>\n" +
                            "                  <option value=\"XDA\">XDA</option>\n" +
                            "                  <option value=\"DSA\">DSA</option>\n" +
                            "                  <option value=\"SA\">SA</option>\n" +
                            "                  <option value=\"KAT\" selected>KAT</option>\n" +
                            "                  <option value=\"KAM\">KAM</option>\n" +
                            "                   <option value=\"MT3\">MT3</option>";
                    else if (data[i].keycapProfile.includes("KAM"))
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\">OEM</option>\n" +
                            "                  <option value=\"XDA\">XDA</option>\n" +
                            "                  <option value=\"DSA\">DSA</option>\n" +
                            "                  <option value=\"SA\">SA</option>\n" +
                            "                  <option value=\"KAT\">KAT</option>\n" +
                            "                  <option value=\"KAM\" selected>KAM</option>\n" +
                            "                   <option value=\"MT3\">MT3</option>";
                    else
                        optionProfile += " <option value=\"Cherry\">Cherry</option>\n" +
                            "                  <option value=\"OEM\">OEM</option>\n" +
                            "                  <option value=\"XDA\">XDA</option>\n" +
                            "                  <option value=\"DSA\">DSA</option>\n" +
                            "                  <option value=\"SA\">SA</option>\n" +
                            "                  <option value=\"KAT\">KAT</option>\n" +
                            "                  <option value=\"KAM\">KAM</option>\n" +
                            "                   <option value=\"MT3\" selected>MT3</option>";

                    for (var j = 0; j < images.length; j++) {
                        if (data[i].pathImg.includes(images[j]))
                            optionImages += "<option value=\"" + images[j] + "\" selected >" + images[j] + "</option>";
                        else
                            optionImages += "<option value=\"" + images[j] + "\" >" + images[j] + "</option>";
                    }

                    $('.table.keycaps').append("" +
                        "<tr>" +
                        "   <td>" + data[i].idProdotto + "</td>" +
                        "   <td>" + data[i].pezziDisponibili + "</td>" +
                        "   <td>" + data[i].nome + "</td>" +
                        "   <td>" + data[i].marca + "</td>" +
                        "   <td>" + data[i].prezzo + "</td>" +
                        "   <td>" + data[i].percSconto+ "%</td>" +
                        "   <td>" +
                        "       <button class=\"delete-btn circle-btn\"><i class=\"fa-solid fa-trash\"></i></button>" +
                        "       <button class=\"circle-btn open-modal\" modal-target=\"keycap-"+data[i].idProdotto+"\"><i class=\"fa-solid fa-pencil\"></i></button>" +
                        "   </td>" +
                        "</tr>");

                    $("body").append(" <div class=\"modal-overlay center\" modal-name=\"keycap-"+data[i].idProdotto+"\">\n" +
                        "        <div class=\"modal-content\">\n" +
                        "            <div class=\"close-mod\">\n" +
                        "                <a href=\"#\" class=\"close-modal\"><i class=\"fa-solid fa-xmark\"></i></a>\n" +
                        "            </div>\n" +
                        "            <h3>Modifica Keycap</h3>\n" +
                        "            <form class=\"update-keycap\">\n" +
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
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Pezzi\" name=\"numPezzi\" value=\""+ data[i].pezziDisponibili + "\" min=\"0\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Prezzo\" name=\"prezzo\" value=\""+ data[i].prezzo + "\" min=\"0.01\" step=\"0.01\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"number\" class=\"input-txt_fld table-input\" placeholder=\"Sconto\" name=\"sconto\" value=\""+ data[i].percSconto + "\" min = \"0\" max = \"100\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <input type=\"text\" class=\"input-txt_fld table-input\" placeholder=\"Materiale\" name=\"materiale\" value=\""+ data[i].keycapMaterial + "\">\n" +
                        "                        </div>" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"img-selector input-txt_fld table-input\" name=\"img\">\n" + optionImages +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"rgb\">\n" +
                        "                                <option value=\"\" disabled>RGB</option>\n" + optionRGB +
                        "                            </select>\n" +
                        "                        </div>" +
                        "                        <div class=\"col-lg-4 col-sm-12\">\n" +
                        "                            <select class=\"input-txt_fld table-input\" name=\"profilo\">\n" +
                        "                                <option value=\"\" disabled>Profilo Keycap</option>\n" + optionProfile +
                        "                            </select>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"col-lg-12 col-sm-12\">\n" +
                        "                            <textarea class=\"input-txt_fld table-input\" placeholder=\"Descrizione\" name=\"descrizione\">" + data[i].descrizione + "</textarea>\n" +
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

    load_keycaps();

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

    function cleanup_table_switch(){
        /*
            Elimina tutti i tr della tabella tranne
            la riga righe_tab[0] (ovvero l'intestazione)
         */
        var righe_tab = $('.table.switch tr');
        console.log(righe_tab.length);
        for(var i = 1; i < righe_tab.length; i++)
            righe_tab[i].remove();
    }

    function cleanup_table_keycaps(){
        /*
            Elimina tutti i tr della tabella tranne
            la riga righe_tab[0] (ovvero l'intestazione)
         */
        var righe_tab = $('.table.keycaps tr');
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
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');

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
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');

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
                cleanup_table_switch();
                load_switchs();
                cleanup_table_keycaps();
                load_keycaps();

                $(this).parents('.modal-overlay').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        });

    });

    $("body").on('submit', '.add-switch', function (e) {

        e.preventDefault();
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');

        var form = $(this);

        $.ajax({
            url: "add-switchs",
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                form.trigger('reset');
                cleanup_table_switch();
                load_switchs();
            }
        });

    });

    $("body").on('submit', '.update-switch', function (e) {

        e.preventDefault();
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');

        console.log($(this).serialize().text());

        $.ajax({
            url: "update-switch",
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                cleanup_table_switch();
                load_switchs();

                $(this).parents('.modal-overlay').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        });

    });

    $("body").on('submit', '.add-keycaps', function (e) {
        e.preventDefault();
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');

        var form = $(this);

        $.ajax({
            url: "add-keycap",
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                form.trigger('reset');
                cleanup_table_keycaps();
                load_keycaps();

                $(this).parents('.modal-overlay').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        });

    });

    $("body").on('submit', '.update-keycap', function (e) {

        e.preventDefault();
        $('.modal-overlay, .modal-content').removeClass('active');
        $('body').removeClass('no-scroll');

        $.ajax({
            url: "update-keycap",
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                cleanup_table_keycaps();
                load_keycaps();

                console.log($(this).parents());
                $(this).parents('.modal-overlay').removeClass('active');
                $('body').removeClass('no-scroll');
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