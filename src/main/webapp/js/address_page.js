$(document).ready(function(){

    var emailString  = $('.email').text();
    console.log(emailString);

    $.ajax({
        type: "GET",
        data: {
          email: emailString
        },
        url: "show-address",
        success: function (data) {
            //window.alert(data[0].indirizzo);
            console.log(data.length);
            if(data == undefined || !data.length) //non so se funziona questo check
                $('.table').append("<tr><td>Non hai indirizzi registrati</td><td></td></tr>");
            else { // il codice all'interno dell'else funziona
                var lenght = Object.keys(data[0]).length;
                for (var i = 0; i < lenght; i++) {
                    $('.table').append(
                        "<tr><td><input type=\"text\" class=\"input-txt_fld add_fld\" value='" + data[i].indirizzo + "'></td>" +
                        "<td><button class=\"delete-btn\"><i class=\"fa-solid fa-trash\"></i></button></td></tr>");
                }
            }

        }
    });

    $('.add-btn').click(function(){
        $('.table').append(
            "<tr><td><input type=\"text\" class=\"input-txt_fld add_fld\" value=''></td>" +
            "<td><button class=\"delete-btn\"><i class=\"fa-solid fa-trash\"></i></button></td></tr>");

    });

    /*
        Il metodo on (https://www.w3schools.com/jquery/event_on.asp)
        rispetto a click, funziona anche su elementi CREATI DINAMICAMENTE
        grazie all'attributo childSelector che lega l'handler dell'evento
        a degli elementi scelti e non al selettore stesso
     */


    $('.table').on('click', $('delete-btn'), function(){
        console.log("deleting" + $(this).parents());
        //$(this).parents('tr').remove();

    });


});