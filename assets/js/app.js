$(function() {
    $('#nav5 li')
    .each(function(){
        $(this).append('<span>'+$(this).html()+'</span>')
    })
     .hover(
        function(){
            $('a', this).stop().animate({
                marginTop:'-1.5em'
            },200);
        },
        function () {
            $('a', this).stop().animate({
                marginTop:'0em'
            },300);
        }
    );
});