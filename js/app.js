$(document).ready(function() {
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
})