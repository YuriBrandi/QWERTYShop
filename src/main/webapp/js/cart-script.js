$(document).ready(function () {

    $(".add-btn").click(function(){
        var value = $(this).siblings(".input-txt_fld.quantity-field").val();
        $(this).siblings(".input-txt_fld.quantity-field").val(Number(value) + 1);
    });

    $(".remove-btn").click(function(){
        var value = $(this).siblings(".input-txt_fld.quantity-field").val();
        if (value > 1)
            $(this).siblings(".input-txt_fld.quantity-field").val(Number(value) - 1);
    });

});