$(document).ready(function () {
    //Анимации изображения в начале страницы
    //Анимация ввода текста
    let textArr = ['отбеливание зубов', 'лечение зуба'];
    let textArrIndex = 0;
    inputEffect();

    function inputEffect() {
        if (textArrIndex >= textArr.length) {
            textArrIndex = 0;
        }
        const textValue = textArr[textArrIndex];
        let textСharacterIndex = 0;
        let insertText = '';

        printСharacter();

        function printСharacter() {
            if (textValue.length > 0 && textСharacterIndex < textValue.length) {
                setTimeout(() => {
                    insertText += textValue[textСharacterIndex];
                    insertTextInBlock(insertText);
                    textСharacterIndex = textСharacterIndex + 1;
                    if (textСharacterIndex >= textValue.length) {
                        $('.decor-img .input-efect-wrap .input-line').css({ 'margin-left': '3px' });
                        setTimeout(() => {
                            removeСharacter()
                        }, 500);
                        return false;
                    } else {
                        printСharacter();
                    }
                }, generateRandom(170, 320))
            }
        }

        function removeСharacter() {
            $('.decor-img .input-efect-wrap .input-line').css({ 'margin-left': '0px' });
            if (textValue.length > 0 && textСharacterIndex >= 0) {
                setTimeout(() => {
                    insertText = insertText.substring(0, insertText.length - 1)
                    insertTextInBlock(insertText);
                    textСharacterIndex = textСharacterIndex - 1;
                    if (textСharacterIndex < 0) {
                        ++textArrIndex;
                        setTimeout(() => {
                            inputEffect();
                        }, 300);
                        return false;
                    } else {
                        removeСharacter();
                    }
                }, generateRandom(50, 150))
            }
        }
    }

    function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function insertTextInBlock(value) {
        $('.decor-img .input-efect-wrap .input-efect-text').html(value);
    }

    //Фиксированный header
    let scrollAmount = $(window).width() < 768 ? 0 : 100;
    $(window).resize(e => {
        scrollAmount = e.currentTarget.width() < 768 ? 0 : 100;
    })
    $(window).scroll(e => $('.header').toggleClass('scroll', e.currentTarget.scrollY >= scrollAmount));
    $(window).scroll();

    //Инициализация слайдера
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: "auto",
        // spaceBetween: 40,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    //Выпадающие блоки
    //Показываем первый блок
    const firstDropdownListItem = $('.deployable-item')[0];
    $(firstDropdownListItem).addClass('open');
    $(firstDropdownListItem).children('.deployable-content-wrapper').css({ 'max-height': `${$(firstDropdownListItem).find('.deployable-content-wrapper .deployable-content').height() + 30}px` });

    //Обработка разворота блока 
    $('.deployable-item').each(function () {
        $(this).click(() => {
            if (!$(this).hasClass('open')) {
                if ($('.deployable-item.open')) {
                    $('.deployable-item.open').each(function () {
                        $(this).removeClass('open');
                        $(this).find('.deployable-content-wrapper').animate({
                            'max-height': '0px'
                        }, 500)
                    })
                }
                $(this).addClass('open');
                $(this).find('.deployable-content-wrapper').animate({
                    'max-height': `${$(this).find('.deployable-content-wrapper .deployable-content').height() + 30}px`
                }, 500)

            }
        })
    });
})