window.onload = function(){

    // 메뉴 이동
    let gnb_a = $('.gnb > li > a');
    let menu = ['#portfolio', '#aboutme', '#experiences', '#contact'];
    let menu_position = [];

    for(let i = 0; i < menu.length; i++){
        let link = menu[i];
        // '#portfolio', '#aboutme', '#experiences', '#contact'
        menu_position[i] = $(link).offset().top;
        // menu_position[i] -= 40;
        // 641, 5532.234375, 7046.234375, 7936.234375
    }

    $.each(gnb_a, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            link = $(this).attr('href');
            let link_position = menu_position[index];
            // console.log(link_position)

            $('html').animate({
                scrollTop: link_position
            }, 1000)
        })
    });

    // 헤더
    let header = $('.header')
    let seemywork_position = $('.seemywork p').offset().top;

    $(window).scroll(function(){
        let window_h = $(window).scrollTop();

        if(window_h > seemywork_position){
            header.addClass('header-active')
        }else{
            header.removeClass('header-active')
        }
    })




    const text = "Hi, I'm Lee Minjae,  \n a front-end developer who loves learning & challenging myself.";
    const text_space = document.querySelector('.text-box > h1');

    let i = 0;
    let text_timer;
    let text_timer_delay;

    // return;
    let totalTxt = '';
    function typing(){
        let txt = text[i++];
        
        if(txt === '\n') {
            totalTxt += '<br>';
        }else{
            totalTxt += txt;
        }

        text_space.innerHTML = totalTxt + '<span class="blink"></span>';

        if(i > text.length - 1){            
            clearInterval(text_timer);
            text_timer_delay = setInterval(delayTyping, 2000);
        }
    }

    text_timer = setInterval(typing, 150);

    function delayTyping() {
        txt = '';
        totalTxt = '';
        text_space.innerHTML = '';
        i = 0;
        clearInterval(text_timer_delay);
        text_timer = setInterval(typing, 150);
    }



}
