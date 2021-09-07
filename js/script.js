$(window).ready(function(){
    let width = window.innerWidth;
    if (width <= 991) {
        $('.nav-link').click(function(){
            $('.navbar-toggler').trigger('click');
        });
    }

    $(".loading-page").fadeOut("slow");
});