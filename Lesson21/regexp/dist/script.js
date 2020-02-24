// 4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>, 
// 5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль
// 6. Не обязательное усложненное 
// Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
// на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const div1 = body.childNodes[3];
    const div2 = body.childNodes[5];
    div1.innerHTML = div1.innerHTML.replace(/[а-я]*функц[а-я]*/g, (text) => `<strong>${text}</strong>`);
    div2.innerHTML = div2.innerHTML.replace(/\d{2}:\d{2}/g, (text) => `<b>${text}</b>`);
    div1.innerHTML = div1.innerHTML.replace(/["|«].*?["|»]/g, (text) => `<mark>${text}</mark>`);
    div2.innerHTML = div2.innerHTML.replace(/["|«].*?["|»]/g, (text) => `<mark>${text}</mark>`);
    div2.innerHTML = div2.innerHTML.replace(/http:\/\/(\w+\.\w{2,3}\b)/g, (text, val1) => `<a href="${text}">${val1}</a>`);
    div2.innerHTML = div2.innerHTML.replace(/http:\/\/w{3}?\.?(\w+\.\w{2,3})(?:\/(?:\w*-?)*)*\/?/g, (text, val1) => `<a href="${text}">${val1}</a>`);
    let color = body.innerHTML.match(/#[\dA-F]{6}/g);
    console.log(color);
});

//