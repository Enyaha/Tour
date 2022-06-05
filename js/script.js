$(document).ready(function(){
    $('.main_btna, .main_btn, nav li:eq(1)').on('click', function(){
        $('.overlay').fadeIn('1000');
        $('.modal').slideDown('1000');
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
});