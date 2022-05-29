$(document).ready(function(){
    //navbar
    $('nav .toggle').click(function(){
        $('nav .menu').toggleClass('active');
        // document.body.classList.toggle("no-scroll")
        $('body').toggleClass('no-scroll');
        $('nav .toggle a i').toggleClass('fa-bars-staggered fa-xmark');

        console.log("triggered toggle");
    });

});
