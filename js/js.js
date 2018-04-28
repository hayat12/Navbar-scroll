$(function () {
    $('body').scrollspy({ target: '#navbar-example' });

    var menuoffset = $('.navbar').offset();
    $(document).on('scroll', function () {

        var scrollTop = $(document).scrollTop();
        if (scrollTop > menuoffset.top) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
    var section1 = $('.section1').offset().top;
    var section2 = $('.section2').offset().top;
    var section3 = $('.section3').offset().top;
    var section4 = $('.section4').offset().top;
    var section5 = $('.section5').offset().top;
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop;
        var activeP;
        if (scrollTop < section1) {
        $('.nav>li').not(activeP).removeClass('active');
            activeP = $('.nav>li:nth-child(1)');
        }
        else if(scrollTop < section2){
            $('.nav>li').not(activeP).removeClass('active');
            activeP = $('.nav>li:nth-child(2)');
        }
        else if(scrollTop < section2){
            $('.nav>li').not(activeP).removeClass('active');
            activeP = $('.nav>li:nth-child(3)');
        }
        else if(scrollTop < section2){
            $('.nav>li').not(activeP).removeClass('active');
            activeP = $('.nav>li:nth-child(4)');
        }
        else{
            $('.nav>li').not(activeP).removeClass('active');
            activeP = $('.nav>li:nth-child(5)');
        }
        activeP.addClass('active');
        $('.nav>li').not(activeP).removeClass('active');
    })
});