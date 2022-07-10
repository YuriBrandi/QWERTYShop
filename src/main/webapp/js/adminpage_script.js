$(document).ready(function (){

    function load_products(){
        $.ajax({
            type: "GET",
            url: "show-products",

            success: function (data) {
                var lenght = data.length;
                console.log(length);

                for(var i = 0; i < lenght; i++){
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
                        "       --- " +
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
                        $("#img-selector").append("<option>" + file_name + "</option>")
                }
            });
        }
    });

    $('.open-modal').click(function () {
        //$('.modal-overlay, .modal-content').addClass('active');
        var modal = $(this).attr('modal-target');
        console.log(modal);
        $('[modal-name="' + modal + '"]').addClass('active');
    });

    $('.close-modal').click(function () {
        $('.modal-overlay').removeClass('active');
    });
});