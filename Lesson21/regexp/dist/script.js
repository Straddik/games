window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const div1 = body.childNodes[3];
    const div2 = body.childNodes[5];
    // Поиск однокоренных слов "функция"
    div1.innerHTML = div1.innerHTML.replace(/[а-я]*функц[а-я]*/g, (text) => `<strong>${text}</strong>`);
    // Поиск времени
    div2.innerHTML = div2.innerHTML.replace(/\d{2}:\d{2}/g, (text) => `<b>${text}</b>`);
    //Поиск текста в кавычках
    div1.innerHTML = div1.innerHTML.replace(/["|«].*?["|»]/g, (text) => `<mark>${text}</mark>`);
    div2.innerHTML = div2.innerHTML.replace(/["|«].*?["|»]/g, (text) => `<mark>${text}</mark>`);
    // 4) Замена домена;
    div2.innerHTML = div2.innerHTML.replace(/http:\/\/(\w+\.\w{2,3}\b)/g, (text, val1) => `<a href="${text}">${val1}</a>`);
    //Не обязательное усложнённое
    div2.innerHTML = div2.innerHTML.replace(/http:\/\/w{3}?\.?(\w+\.\w{2,3})(?:\/(?:\w*-?)*)*\/?/g, (text, val1) => `<a href="${text}">${val1}</a>`);
    // 5) Для поиска цвета
    let color = body.innerHTML.match(/#[\dA-F]{6}/g);
    console.log(color);
});

//