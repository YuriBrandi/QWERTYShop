$(document).ready(function(){
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