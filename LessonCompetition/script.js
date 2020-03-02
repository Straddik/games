'use strict';
document.addEventListener('DOMContentLoaded', () => {
    //создание элементов
    const container = document.createElement('div'),
        form = document.createElement('form'),
        select = document.createElement('select'),
        selectFilm = document.createElement('select'),
        optionFilm = document.createElement('option'),
        option = document.createElement('option'),
        img = document.createElement('img'),
        info = document.createElement('div'),
        date = document.createElement('div'),
        actor = document.createElement('div'),
        ulMovieList = document.createElement('ul'),
        divStatus = document.createElement('div'),
        btnLeft = document.createElement('a'),
        btnRight = document.createElement('a'),
        divWrapper = document.createElement('div'),
        style = document.createElement('style');

    let fontSize = '9px',
        data = {};

    //стилизация элементов
    document.body.style.cssText = `
    background-color: #EEEEEE; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: ${fontSize};
    `;

    container.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 120px;
    max-width: 150px;
    border:  2px solid black;
    `;

    ulMovieList.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    `;

    form.style.cssText = `
    margin: 10px 10px;
    font-size: 12px;
    `;

    info.style.cssText = `
    text-align: center;
    `;

    date.style.cssText = `
    text-align: center;
    `;

    actor.style.cssText = `
    text-align: center;
    `;

    img.style.cssText = `
    border: 1px black solid;
    max-width: 100%;
    `;

    select.style.cssText = `
    font-size: ${fontSize};
    margin-left: 15px;
    `;

    selectFilm.style.cssText = `
    font-size: ${fontSize};
    `;
    divWrapper.style.cssText = `
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    display: none;
    `;

    //Настройка select и кнопок  перед началом
    option.value = '0';
    option.innerHTML = 'Выберите героя';
    option.selected = true;
    optionFilm.value = '0';
    optionFilm.innerHTML = 'Выберите фильм';
    optionFilm.selected = true;
    btnLeft.id = 'left';
    btnRight.id = 'right';

    // Создание стилей для кнопок при наведении
    style.textContent = `
    #left:hover, #right:hover{
        opacity: 0.8; 
        background-color: #CCCCCC ;
        transition: All .2s; 
    }
    #right {
        margin-top: 140px;
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-image: url("./images/right-arrow.svg");
        background-color: #DDDEEE ;
        opacity: 0.4; 
        border-radius: 10px;
    }
    #left {
        margin-top: 140px;
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-image: url("./images/left-arrow.svg");
        background-color: #DDDEEE ;
        opacity: 0.3; 
        border-radius: 10px;
    }
    `;
    //добавление элементов на страницу
    select.appendChild(option);
    selectFilm.appendChild(optionFilm);
    form.appendChild(selectFilm);
    form.appendChild(select);
    divWrapper.appendChild(btnLeft);
    divWrapper.appendChild(container);
    divWrapper.appendChild(btnRight);
    container.appendChild(img);
    container.appendChild(info);
    container.appendChild(date);
    container.appendChild(actor);
    container.appendChild(ulMovieList);
    container.appendChild(divStatus);
    document.body.append(form);
    document.body.append(divWrapper);
    document.head.appendChild(style);

    //Функция создания options у selectFilm
    const addOptionFilm = () => {
        const set = new Set();
        data.forEach(item => {
            !!item.movies ? item.movies.forEach(val => set.add(val)) : null;

        });
        set.forEach((val) => {
            const optionAdd = document.createElement('option');
            optionAdd.value = val;
            optionAdd.innerHTML = val;
            selectFilm.appendChild(optionAdd);
        });
    };

    //Функия создания options у select 
    const addOption = (selected) => {
        divWrapper.style.display = 'flex';
        //Очищение select перед выбором;
        let { length } = select.options;
        for (let i = 0; i < length; i++) {
            select.remove(select.options[i]);
        };
        // Поиск по фильму
        data.forEach(item => {
            if (item.movies && item.movies.some(film => film === selected)) {
                const optionAdd = document.createElement('option');
                optionAdd.value = item.name;
                optionAdd.innerHTML = item.name;
                select.appendChild(optionAdd);
            };
        });
        addInfoAfterSelect(select.options[0].value);
        divWrapper.className = select.options[0].value;
        select.selectedIndex = 0;
    };

    //Функция отображения информации после выбора всех selectов
    const addInfoAfterSelect = (selected) => {
        data.forEach(item => {
            if (item.name === selected) {
                divWrapper.className = selected;
                img.src = item.photo;
                img.innerHTML = item.name;
                info.innerHTML = `<strong>Имя:</strong> ${item.name} <br>
                <strong>Вид:</strong> ${item.species} <br>
                <strong>Пол:</strong> ${item.genger} <br>`;
                date.innerHTML = `<strong>Cтатус:</strong> ${item.status} <br>`;
                date.innerHTML += !!item.birthDay ? `<strong>Дата рождения:</strong> ${item.birthDay} <br> ` : ``;
                date.innerHTML += !!item.deathDay ? `<strong>Дата смерти:</strong> ${item.deathDay} <br>` : ``;
                actor.innerHTML = `<strong>Актёр(ы):</strong> ${item.actors} `;
                ulMovieList.innerHTML = `<strong>Фильмы:</strong> `
                item.movies.forEach(val => {
                    const li = document.createElement('li');
                    ulMovieList.appendChild(li);
                    li.innerHTML = val;
                })

            }
        });
    };

    //Функция запроса на сервер
    const requestDoing = (callback) => {
        const request = new XMLHttpRequest();
        request.open('GET', './dbHeroes.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                data = JSON.parse(request.responseText);
                callback();
            } else if (request.readyState === 4) {
                console.warn('Запрос к серверу пришёл с ошибкой');
            };
        });
    };
    //Смена карточек влево
    const moveCardsLRight = () => {
        let index = [...select.options].map(item => item.value).indexOf(divWrapper.className);
        index++;
        if (index > ([...select.options].length - 1)) {
            index = 0;
        };
        select.selectedIndex = index;
        addInfoAfterSelect(select.options[select.selectedIndex].value);
    };
    // Смена карточек вправо
    const moveCardsLeft = () => {
        let index = [...select.options].map(item => item.value).indexOf(divWrapper.className);
        index--;
        if (index === -1) {
            index = [...select.options].length - 1;
        };
        select.selectedIndex = index;
        addInfoAfterSelect(select.options[select.selectedIndex].value);
    };

    //Запрос на сервер для отображения пунктов меню фильмов
    requestDoing(addOptionFilm);

    // Обработчик событий на кнопки
    divWrapper.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.target.id === 'left' ? moveCardsLeft() : moveCardsLRight();
        }
    })

    //Обработчики событий на selects
    selectFilm.addEventListener('change', (event) => {
        addOption(event.target.value);
    });
    select.addEventListener('change', (event) => {
        addInfoAfterSelect(event.target.value);;
    });
});