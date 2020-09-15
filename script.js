const side = document.getElementById('side_off01');


side.addEventListener('click', () => {

});


$(function() {
    $('input[type=text],textarea').focus(function(){
        $(this).addClass('focus');
    }) .blur(function(){
        $(this).removeClass('focus');
    });

    $('.images').slick( {
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
    });
});
