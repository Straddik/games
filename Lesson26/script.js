'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //Создание элеметов
    const form = document.createElement('form'),
        text = document.createElement('textarea'),
        translation = document.createElement('textarea'),
        btnTranslate = document.createElement('button');
    let fontSize = '15px';
    //Стилизация элементов
    document.body.style.cssText = `
    background-color: #EEEEEE; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSize};
    `;
    form.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    min-width: 500px;
    `;
    text.style.cssText = `
    width: 300px;
    height: 120px;
    name: 'text';
    resize: none;
    `;

    translation.style.cssText = `
    width: 300px;
    height: 120px;
    name: 'translation';
    resize: none;
    `;

    btnTranslate.style.cssText = `
    width: 100px;
    height: 50px;
    `;

    btnTranslate.innerHTML = "Перевести";
    text.setAttribute('placeholder', "Введите текст для перевода");
    translation.setAttribute('readonly', "true");
    translation.setAttribute('maxLength', '10000');

    // Добавление на страницу
    form.appendChild(text);
    form.appendChild(btnTranslate);
    form.appendChild(translation);
    document.body.appendChild(form);

    // Запрос на яндекс получение перевода
    const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate',
        key = 'trnsl.1.1.20200303T055229Z.8aae2bb08b34cfe0.f7b2fc01d24e52a6b8588788c87f32260cc1c711';
    const sendingRequist = (text) => {
        return fetch(url, {
            method: 'POST',
            body: `key=${key}&lang=en-ru&text=${text}`,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });

    };

    // Обработчик событий на input, запрет ввода русских букв
    text.addEventListener('input', () => {
        text.value = text.value.replace(/[а-яА-я]/, '');
        translation.value = '';
    });
    //Обработчик событий на кнопку "перевести"
    btnTranslate.addEventListener('click', (e) => {
        e.preventDefault();
        if (text.value !== '' && text.value) {
            sendingRequist(text.value)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    return response.json();
                })
                .then((data) => {
                    translation.value = data.text;
                })
                .catch((error) => {
                    console.warn(error);
                })
        };
    })
});