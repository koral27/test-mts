$( document ).ready(function() {

    // слайдер
    $('.connecting__slider').slick({
        prevArrow: '<img src="img/arrow-left.png" class="arrow-left" alt="left">',
        nextArrow: '<img src="img/arrow-right.png" class="arrow-right" alt="right">'
    });

    // аккордеон
    $('.faq__question').click(function(){
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
        $('.faq__question').not(this).parent().removeClass('active');
        $('.faq__question').not(this).next().slideUp();
    });
    
    $('.connecting__item').click(toggleActiveClass);
    $('.connecting__item').click(changeSlide);
    
    // переключение слайдера по клику на пункты списка
    function toggleActiveClass(){
        if( !$(this).hasClass('active') ){
            $(this).addClass('active');
            $('.connecting__item').not(this).removeClass('active');
        }
        
    }

    // пролистывание слайдера до слайда с индексом активной лишки
    function changeSlide(){
        let activeLi = $('.connecting__item.active');
        $('.connecting__slider').slick('slickGoTo', activeLi.index(), false);
    }

    // переключение активных лишек по клику на стрелки слайдера

    function changeActiveListItem(){
        let listItems = $('.connecting__item');
        let activeSlideId = $('.connecting__slide.slick-current.slick-active ').attr('data-slide-id');

        for(let i=0; i < listItems.length; i++){
            if( $(listItems[i]).attr('data-id') == activeSlideId ){
                $(listItems[i]).addClass('active');
            } else {
                $(listItems[i]).removeClass('active');
            }
        }
    }

    $('.slick-arrow').click(changeActiveListItem);
    
});