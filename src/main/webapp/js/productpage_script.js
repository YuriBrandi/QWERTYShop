$(document).ready(function () {

    var qnty_fld = $("input[name = qnty]");
    var pezzi_cart = Number($("input[name = cart_qnty]").val());
    var pezzi_disp = Number($("input[name = disp]").val());

    console.log(pezzi_cart);

    function checkAddButton(){
        if(Number(qnty_fld.val()) + pezzi_cart >= pezzi_disp)
            $(".add-btn").prop("disabled", true);
    }
    checkAddButton();

    $(".add-btn").click(function(){
        qnty_fld.val(Number(qnty_fld.val()) + 1);

        checkAddButton();
        $(".remove-btn").prop("disabled", false);
    });

    $(".remove-btn").click(function(){

       qnty_fld.val(Number(qnty_fld.val()) - 1);

        if(qnty_fld.val() == 1)
            $(".remove-btn").prop("disabled", true);

        $(".add-btn").prop("disabled", false);
    });
});