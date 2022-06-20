$(document).ready(function () {

    $(".add-btn").click(function(){
        var value = $(this).siblings(".input-txt_fld.quantity_fld").val();
        $(this).siblings(".input-txt_fld.quantity_fld").val(Number(value) + 1);
    });

    $(".remove-btn").click(function(){
        var value = $(this).siblings(".input-txt_fld.quantity_fld").val();
        if (value > 1)
            $(this).siblings(".input-txt_fld.quantity_fld").val(Number(value) - 1);
    });

});