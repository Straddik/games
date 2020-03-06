'use strict';
const data = {
    "RU": [{
            "country": "Россия",
            "count": "144500000",
            "cities": [{
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Германия",
            "count": 82175684,
            "cities": [{
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [{
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "EN": [{
            "country": "Russia",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [{
            "country": "Russland",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
};
// import data from './db_cities';
document.addEventListener('DOMContentLoaded', () => {
    const listDefault = document.querySelector('.dropdown-lists__list--default'),
        listSelect = document.querySelector('.dropdown-lists__list--select'),
        listAutoComplete = document.querySelector('.dropdown-lists__list--autocomplete'),
        input = document.getElementById('select-cities'),
        button = document.querySelector('.button'),
        buttonClose = document.querySelector('.close-button'),
        label = document.querySelector('.label'),
        countryBlock = listDefault.childNodes[1].childNodes[1];

    listDefault.style.display = 'none';
    [...listDefault.childNodes[1].childNodes].forEach(val => listDefault.childNodes[1].removeChild(val));
    [...listSelect.childNodes[1].childNodes].forEach(val => listSelect.childNodes[1].removeChild(val));
    [...listAutoComplete.childNodes[1].childNodes].forEach(val => listAutoComplete.childNodes[1].removeChild(val));
    listSelect.style.display = 'none';
    listAutoComplete.style.display = 'none';
    button.removeAttribute('href');



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
                    child.childNodes[1].innerHTML = city["name"];
                    child.childNodes[3].innerHTML = city["count"];
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

    //Обработчики событий на click
    document.body.addEventListener('click', (e) => {
        if (e.target === input) {
            listDefault.style.display = 'block';
        } else if (e.target.closest('.dropdown-lists__list--default') && e.target.closest('.dropdown-lists__total-line')) {
            label.style.display = 'none';
            listDefault.style.display = 'none';
            [...listSelect.childNodes[1].childNodes].forEach(val => listSelect.childNodes[1].removeChild(val));
            formlistSelect(e.target.innerHTML);
            listSelect.style.display = 'block';
            input.value = e.target.innerHTML;
            buttonClose.style.display = 'block';
        } else if (e.target.closest('.dropdown-lists__total-line') && e.target.closest('.dropdown-lists__list--select')) {
            listDefault.style.display = 'block';
            listSelect.style.display = 'none';
            [...listSelect.childNodes[1].childNodes].forEach(val => listSelect.childNodes[1].removeChild(val));
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
            input.value = e.target.innerHTML;
            buttonClose.style.display = 'block';
            button.disabled = false;
            setLinkToButton(e.target.innerHTML);
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
    })
});