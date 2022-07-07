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
});