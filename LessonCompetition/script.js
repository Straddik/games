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
        divStatus = document.createElement('div');

    let fontSize = '9px';

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


    //Настройка select перед началом
    option.value = '0';
    option.innerHTML = 'Выберите героя';
    option.selected = true;
    optionFilm.value = '0';
    optionFilm.innerHTML = 'Выберите фильм';
    optionFilm.selected = true;

    //добавление элементов на страницу
    select.appendChild(option);
    selectFilm.appendChild(optionFilm);
    form.appendChild(selectFilm);
    form.appendChild(select);
    document.body.append(form);
    document.body.append(container);
    container.appendChild(img);
    container.appendChild(info);
    container.appendChild(date);
    container.appendChild(actor);
    container.appendChild(ulMovieList);
    container.appendChild(divStatus);

    //Функция создания options у selectFilm
    const addOptionFilm = (resp) => {
        const set = new Set();
        resp.forEach(item => {
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
    const addOption = (selected, resp) => {
        //Очищение select перед выбором;
        let { length } = select.options;
        for (let i = 1; i < length; i++) {
            select.remove(select.options[i]);
        };
        // Поиск по фильму
        resp.forEach(item => {
            if (item.movies && item.movies.some(film => film === selected)) {
                const optionAdd = document.createElement('option');
                optionAdd.value = item.name;
                optionAdd.innerHTML = item.name;
                select.appendChild(optionAdd);
            };
        });

    };

    //Функция отображения информации после выбора всех selectов
    const addInfoAfterSelect = (selected, response) => {
        response.forEach(item => {
            if (item.name === selected) {
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
                const data = JSON.parse(request.responseText);
                callback(data);
            } else if (request.readyState === 4) {
                console.warn('Запрос к серверу пришёл с ошибкой');
            };
        });
    };

    //Запрос на сервер для отображения пунктов меню фильмов
    requestDoing(addOptionFilm);

    //Обработчики событий на selectы

    selectFilm.addEventListener('change', (event) => {
        requestDoing(addOption.bind(null, event.target.value));
    });
    select.addEventListener('change', (event) => {
        requestDoing(addInfoAfterSelect.bind(null, event.target.value));
    });

});