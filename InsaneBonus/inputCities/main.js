'use strict';

// import data from './db_cities';
document.addEventListener('DOMContentLoaded', () => {
    const listDefault = document.querySelector('.dropdown-lists__list--default'),
        listSelect = document.querySelector('.dropdown-lists__list--select'),
        listAutoComplete = document.querySelector('.dropdown-lists__list--autocomplete'),
        input = document.getElementById('select-cities'),
        button = document.querySelector('.button'),
        buttonClose = document.querySelector('.close-button'),
        label = document.querySelector('.label'),
        countryBlock = listDefault.childNodes[1].childNodes[1],
        main = document.querySelector('.main'),
        form = main.childNodes[1],
        urlAdress = './db_cities.json';
    let idAni, idAniList;

    //Очистка 
    listDefault.style.display = 'none';
    [...listDefault.childNodes[1].childNodes].forEach(val => listDefault.childNodes[1].removeChild(val));
    [...listSelect.childNodes[1].childNodes].forEach(val => listSelect.childNodes[1].removeChild(val));
    [...listAutoComplete.childNodes[1].childNodes].forEach(val => listAutoComplete.childNodes[1].removeChild(val));
    listSelect.style.display = 'none';
    listAutoComplete.style.display = 'none';
    button.removeAttribute('href');
    form.style.display = 'none';
    input.value = '';

    //Создание спинера
    const img = document.createElement('img');
    img.setAttribute('src', './images/preloader.png');
    img.style.cssText = `
    height: 100px;
    width: 100px;
    margin: 200px auto 0 auto;
    `;
    main.appendChild(img);

    const loadInfo = (data) => {
        //Создание списка по умолчанию
        data['RU'].forEach(item => {
            const node = countryBlock.cloneNode(true);
            node.childNodes[1].childNodes[1].innerHTML = item["country"];
            node.childNodes[1].childNodes[3].innerHTML = item["count"];
            item["cities"].sort((a, b) => +a["count"] > +b["count"] ? -1 : +a["count"] < +b["count"] ? 1 : 0);
            node.childNodes[3].childNodes[1].innerHTML = item["cities"][0]["name"];
            node.childNodes[3].childNodes[3].innerHTML = item["cities"][0]["count"];
            node.childNodes[5].childNodes[1].innerHTML = item["cities"][1]["name"];
            node.childNodes[5].childNodes[3].innerHTML = item["cities"][1]["count"];
            node.childNodes[7].childNodes[1].innerHTML = item["cities"][2]["name"];
            node.childNodes[7].childNodes[3].innerHTML = item["cities"][2]["count"];
            listDefault.childNodes[1].appendChild(node);
        });
        //Создание списка всех городов для ListSelect
        const formlistSelect = (countryText) => {
            data['RU'].forEach(item => {
                if (item["country"] === countryText) {
                    const node = countryBlock.cloneNode(true);
                    node.childNodes[1].childNodes[1].innerHTML = item["country"];
                    node.childNodes[1].childNodes[3].innerHTML = item["count"];
                    item["cities"].forEach((city, index) => {
                        if (node.childNodes[(index + 1) * 2 + 1]) {
                            node.childNodes[(index + 1) * 2 + 1].childNodes[1].innerHTML = city["name"];
                            node.childNodes[(index + 1) * 2 + 1].childNodes[3].innerHTML = city["count"];
                        } else {
                            const copyTown = node.childNodes[5].cloneNode(true);
                            copyTown.childNodes[1].innerHTML = city["name"];
                            copyTown.childNodes[3].innerHTML = city["count"];
                            node.appendChild(copyTown);
                        }
                    })
                    listSelect.childNodes[1].appendChild(node);
                };
            });
        };
        //Вывод городов для listAutoComplete
        const addToListAutoComplete = (reg) => {
            const regEx = new RegExp(`^${reg}`, "i");
            data['RU'].forEach(item => {
                return item["cities"].forEach(city => {
                    if (regEx.test(city["name"])) {
                        const node = countryBlock.cloneNode(true);
                        const child = node.childNodes[5].cloneNode(true);
                        [...node.childNodes].forEach(val => node.removeChild(val));
                        child.childNodes[1].innerHTML = '<strong>' + reg.slice(0, 1).toUpperCase() + reg.slice(1) + '</strong>' + city["name"].split(reg.slice(0, 1).toUpperCase() + reg.slice(1)).join('');
                        child.childNodes[3].innerHTML = item["country"];
                        node.appendChild(child);
                        listAutoComplete.childNodes[1].appendChild(node);
                    };
                });
            });
            if (!data['RU'].some(item => item["cities"].some(city => regEx.test(city["name"])))) {
                const node = countryBlock.cloneNode(true);
                const child = node.childNodes[5].cloneNode(true);
                [...node.childNodes].forEach(val => node.removeChild(val));
                child.childNodes[1].innerHTML = 'Ничего не найдено';
                child.childNodes[3].innerHTML = '';
                node.appendChild(child);
                listAutoComplete.childNodes[1].appendChild(node);
            };
        };
        //Активация кнопки и установка ссылки для неё
        const setLinkToButton = (text) => {
            data['RU'].forEach(item => {
                item["cities"].some(city => {
                    if (city['name'] === text) {
                        button.setAttribute('href', city['link']);
                        return true;
                    } else {
                        return false;
                    }
                });
            });
        };
        // Анимация при переключении списков
        const animateList1 = (list1, list2, step, side) => {
            list1.style.transform = `translateX(${step-100*side}%)`;
            if (step === 10) {
                list1.style.display = 'none';
                cancelAnimationFrame(idAniList);
                list2.style.transform = 'translateX(100%)';
                list2.style.display = 'block';
                animateList2(list2, 99 * side, side);
            } else {
                idAniList = requestAnimationFrame(animateList1.bind(null, list1, list2, step - side * 4, side));
            }
        };
        const animateList2 = (list, step, side) => {
            list.style.transform = `translateX(${step}%)`;
            if (!step) {
                cancelAnimationFrame(idAniList);
                if (list === listDefault) {
                    [...listSelect.childNodes[1].childNodes].forEach(val => listSelect.childNodes[1].removeChild(val));
                };
            } else {
                console.log(step);
                idAniList = requestAnimationFrame(animateList2.bind(null, list, step - side * 3, side));
            }
        };

        //Обработчики событий на click
        document.body.addEventListener('click', (e) => {
            if (e.target === input) {
                listDefault.style.display = 'block';
            } else if (e.target.closest('.dropdown-lists__list--default') && e.target.closest('.dropdown-lists__total-line')) {
                label.style.display = 'none';
                [...listSelect.childNodes[1].childNodes].forEach(val => listSelect.childNodes[1].removeChild(val));
                formlistSelect(e.target.innerHTML);
                animateList1(listDefault, listSelect, 94, 1);
                input.value = e.target.innerHTML;
                buttonClose.style.display = 'block';
            } else if (e.target.closest('.dropdown-lists__total-line') && e.target.closest('.dropdown-lists__list--select')) {

                animateList1(listSelect, listDefault, -94, -1);
            } else if (e.target === buttonClose) {
                button.removeAttribute('href');
                listDefault.style.display = 'none';
                listSelect.style.display = 'none';
                input.value = '';
                buttonClose.style.display = 'none';
                label.style.display = 'block';
                button.disabled = true;
            } else if (e.target.closest('.dropdown-lists__city')) {
                label.style.display = 'none';
                input.value = e.target.innerHTML.split('<strong>').join('').split('</strong>').join('');
                buttonClose.style.display = 'block';
                button.disabled = false;
                setLinkToButton(input.value);
                listAutoComplete.style.display = 'none';
                label.style.display = 'none';
            } else {
                listDefault.style.display = 'none';
                listSelect.style.display = 'none';
                listAutoComplete.style.display = 'none';
            };
        });
        //Обработчик событий на input
        input.addEventListener('input', (e) => {
            listDefault.style.display = 'none';
            listSelect.style.display = 'none';
            listAutoComplete.style.display = 'block';
            [...listAutoComplete.childNodes[1].childNodes].forEach(val => listAutoComplete.childNodes[1].removeChild(val));
            addToListAutoComplete(e.target.value.toLowerCase());
            if (e.target.value === '') {
                listDefault.style.display = 'block';
                listAutoComplete.style.display = 'none';
            }
        });
        //Чтобы label не появлялся при выбранном городе, когда фокус убираешь с input
        input.addEventListener('blur', (e) => {
            e.preventDefault();
            if (!input.value === '') {
                label.style.display = 'none';
            };
        });
    };

    //Запрос на сервер
    const postData = (url) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };
    //Анимация для спинера

    const animateSpiner = (angle) => {
        img.style.transform = `rotate(${angle}deg)`;
        idAni = requestAnimationFrame(animateSpiner.bind(null, angle + 1));
    };
    animateSpiner(1);

    //Имитация загрузки 1 секунд
    setTimeout(() => {
        postData(urlAdress)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status nerwork not 200');
                }
                return response.json();
            })
            .then((info) => {
                cancelAnimationFrame(idAni);
                form.style.display = 'block';
                img.style.display = 'none';
                loadInfo(info);
            })
            .catch((error) => {
                console.log(error);
            })
    }, 1000)
});