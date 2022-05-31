$(document).ready(function(){

    $('.show_hide_psw').click(function(){

        //Tutti i figli di this con filtro "i"
        $(this).children("i").toggleClass('fa-eye-slash fa-eye');

        if($(this).children("i").hasClass("fa-eye-slash"))
            $('.input-txt_fld[name="password"]').prop('type', 'password');
        else
            $('.input-txt_fld[name="password"]').prop('type', 'text');
    });

    $('#form_toggle').click(function(){

        if($(this).html() == "Accedi"){
            $(this).html("Registrati");
            $(this).siblings("p").html("Non hai ancora un account? "); /*Tutti i fratelli con tag "p"*/
            $("#reg_form").hide();
            $("#log_form").show();

        }
        else{
            $(this).html("Accedi");
            $(this).siblings("p").html("Hai già un account? ");
            $("#reg_form").show();
            $("#log_form").hide();
        }

    });
});

//IMPLEMENTARE CONTROLLO LATO SERVER !

function validate(){
    var password = document.getElementById('pass').value;
    var mail = document.getElementById('email').value;


    if(validate_pass(password))
        alert("Password ok");


    var mailRGEX = /^[A-Z0-9-.]+@[a-z][A-Z0-9.]*[.][A-Z]+$/i;
    //punto senza graffe = qualsiasi carattere
    //accetta domini come ciao.dom.it

    if(mailRGEX.test(mail))
        alert("Mail ok");
    else
        document.getElementById("errore").innerHTML += "<br>Formato mail invalido.";

}

function validate_pass(password){

    const err_msg = document.getElementById("errore");

    err_msg.innerHTML = "";
    var flag = true;

    var passRGEXMaiusc = /[A-Z]/;
    var passRGEXMinusc = /[a-z]/;
    var passRGEXNumb = /[0-9]/;
    var passRGEXSpecial = /[!@#$%^&*?€]/;

    if(password.length < 8){
        err_msg.innerHTML = "Password di lunghezza < 8.";
        flag = false;
    }

    if(!passRGEXMaiusc.test(password)){
        err_msg.innerHTML += "<br>Password deve contenere almeno una maiuscola.";
        flag = false;
    }

    if(!passRGEXMinusc.test(password)){
        err_msg.innerHTML += "<br>Password deve contenere delle minuscole.";
        flag = false;
    }

    if(!passRGEXNumb.test(password)){
        err_msg.innerHTML += "<br>Password deve contenere almeno un numero.";
        flag = false;
    }

    if(!passRGEXSpecial.test(password)){
        err_msg.innerHTML += "<br>Password deve contenere almeno un carattere speciale.";
        flag = false;
    }

    return flag;

}