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
            console.log(Object.keys(data).length);
            if(data == undefined || !data.length)
                $('.table').append("<tr><td>Non hai indirizzi registrati</td><td></td></tr>");
            else {
                var lenght = Object.keys(data).length;
                for (var i = 0; i < lenght; i++) {
                    $('.table').append(
                        "<tr><td><input type=\"text\" class=\"input-txt_fld add_fld\" value='" + data[i].indirizzo + "'></td>" +
                        "<td><button class=\"delete-btn\"><i class=\"fa-solid fa-trash\"></i></button></td></tr>");
                }
            }

        }
    });

  $('.table').on('click', '.delete-btn', function(){

      var address = $(this).closest('tr').find('.input-txt_fld').val();
      var row = $(this).closest('tr');

      $.ajax({
          type: "GET",
          data: {
              email: emailString,
              indirizzo: address
          },
          url: "remove-address",
          success: function (data) {
              //$(this).closest("tr").remove();
              //al momento la servlet restituisce il JSON con tutti gli indirizzi rimanenti
              //si puo' modificare visto che non serve
              row.remove();
          }
      });

  });


});