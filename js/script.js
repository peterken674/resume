$(window).ready(function(){
    let width = window.innerWidth;
    if (width <= 991) {
        $('.nav-link').click(function(){
            $('.navbar-toggler').trigger('click');
        });
    }

    $("img").ready(function(){
        $(".loading-page").fadeOut("slow");
    });
});