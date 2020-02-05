"use strict";

let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
//Восстановление порядка книг
book[1].insertAdjacentElement('afterend', book[0]);
book[5].insertAdjacentElement('afterend', book[2]);
book[4].insertAdjacentElement('afterend', book[3]);

let body = document.querySelector('body');

// Смена фона
//Можно ещё через setAttribute:  body.setAttribute("style", "background-image: url(./image/you-dont-know-js.jpg)");
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Исправление заголовка в третьей книге
book[4].children[0].children[0].innerHTML = 'Книга 3. this и Прототипы Объектов';

//Удаление рекламы со страницы
let advertisment = document.querySelector('.adv');
advertisment.style.display = 'none';

//Восстановление глав в книге 2 
book[0].children[1].children[3].insertAdjacentElement('afterend', book[0].children[1].children[6]);
book[0].children[1].children[4].insertAdjacentElement('afterend', book[0].children[1].children[8]);
//Добавление главы в книге 2
let clonedElem = book[0].children[1].children[10].cloneNode(true);
clonedElem.innerHTML = 'Приложение C: Лексический this';
book[0].children[1].children[9].insertAdjacentElement('afterend', clonedElem);

//Восстановление глав в книге 5
book[5].children[1].children[1].insertAdjacentElement('afterend', book[5].children[1].children[9]);
book[5].children[1].children[2].insertAdjacentElement('afterend', book[5].children[1].children[4]);
book[5].children[1].children[5].insertAdjacentElement('afterend', book[5].children[1].children[4]);

//Добавление недостающей главы в книге 5
clonedElem = book[5].children[1].children[7].cloneNode(true);
clonedElem.innerHTML = 'Приложение A: Библиотека: asynquence';
book[5].children[1].children[8].insertAdjacentElement('afterend', clonedElem);

//Добавление недостающей главы в книге 6
clonedElem = book[2].children[1].children[8].cloneNode(true);
clonedElem.innerHTML = 'Глава 8: За пределами ES6';
book[2].children[1].children[8].insertAdjacentElement('afterend', clonedElem);