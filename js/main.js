$(document).ready(function(){
    var i = 5;
    var num = 0;
    
    $('.section_1').click(function(){

        i--;
        console.log(i);

        if(i == 0){
            $('.slide_con>li').fadeIn();
            i = 5;
        }else{
            $('.slide_con>li').eq(i).fadeOut();
        }

        num++;

        if(num > 4){
            num = 0;
        }
        console.log(num);

        $('.slide_wrap').animate({
            left: (-100 * num) + "%" 
        });
    });

    setInterval(function(){
        $('.section_1').trigger('click');
    }, 5000)

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

});