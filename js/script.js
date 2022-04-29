window.onload = function(){

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
