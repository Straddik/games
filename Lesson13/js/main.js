// Вытаскиваем узлы со строницы
let buttonHeader = document.getElementsByClassName('header-button')[0],
    inputHeader = document.querySelector('.header-input'),
    buttonRemove = document.querySelectorAll('.todo-remove'),
    buttonComplete = document.querySelectorAll('.todo-complete'),
    ul = document.querySelectorAll('.todo'),
    flag = false,
    memory = {
        arrayToDo: [],
        arrayCompleted: [],
    }
cloneNodeToDo = ul[0].childNodes[1].cloneNode(true),
    cloneNodeComplete = ul[1].childNodes[1].cloneNode(true);

if (localStorage.memory) {
    memory = JSON.parse(localStorage.getItem("memory"));
};

const addLocalStorageToDo = function(elem) {
    memory.arrayToDo.push(elem);
    localStorage.setItem('memory', JSON.stringify(memory));
}
const addLocalStorageCompleted = function(elem) {
    memory.arrayCompleted.push(elem);
    localStorage.setItem('memory', JSON.stringify(memory));
}

// 2) Удаление дел на кнопку КОРЗИНА
const addListenButtonRemove = function() {
    buttonRemove.forEach(item => item.addEventListener('click', eventButtonRemove))
};
const eventButtonRemove = function(e) {
    let text = e.target.parentNode.parentNode.textContent.split("\n")[0];
    if (memory.arrayToDo.includes(text)) {
        memory.arrayToDo.splice(memory.arrayToDo.indexOf(text), 1);
    };
    if (memory.arrayCompleted.includes(text)) {
        memory.arrayCompleted.splice(memory.arrayCompleted.indexOf(text), 1);
    };
    localStorage.setItem('memory', JSON.stringify(memory));
    e.target.parentNode.parentNode.remove();
};

// 3) Отмечание выполненных дел
const addListenButtonComplete = function() {
    buttonComplete.forEach(item => item.addEventListener('click', eventButtonComplete));
};
const eventButtonComplete = function(e) {
    ul = document.querySelectorAll('.todo');
    let innerText = e.target.parentNode.parentNode.textContent.split("\n")[0];
    if (e.target.parentNode.parentNode.parentNode.getAttribute("class") === "todo") {
        ul[1].append(e.target.parentNode.parentNode);
        memory.arrayToDo.splice(memory.arrayToDo.indexOf(innerText), 1);
        localStorage.setItem('memory', JSON.stringify(memory));
        addLocalStorageCompleted(innerText);
    } else {
        ul[0].append(e.target.parentNode.parentNode);
        memory.arrayCompleted.splice(memory.arrayCompleted.indexOf(innerText), 1);
        localStorage.setItem('memory', JSON.stringify(memory));
        addLocalStorageToDo(innerText);
    };
};

// 0) Очистка дел

ul.forEach(i => i.removeChild(i.children[0]));
buttonHeader.disabled = true;

// Из localStorage чтение и добавление элементов
memory.arrayToDo.forEach(item => {
    let clones = cloneNodeToDo.cloneNode(true);
    clones.innerHTML = item + clones.innerHTML.replace(/^[^<]*/g, "");
    ul[0].insertAdjacentElement('beforeend', clones);
    buttonRemove = document.querySelectorAll('.todo-remove');
    buttonComplete = document.querySelectorAll('.todo-complete');
    addListenButtonRemove();
    addListenButtonComplete();
});
memory.arrayCompleted.forEach(item => {
    let clones = cloneNodeToDo.cloneNode(true);
    clones.innerHTML = item + clones.innerHTML.replace(/^[^<]*/g, "");
    ul[1].insertAdjacentElement('beforeend', clones);
    buttonRemove = document.querySelectorAll('.todo-remove');
    buttonComplete = document.querySelectorAll('.todo-complete')
    addListenButtonRemove();
    addListenButtonComplete();
})



// 1) Обработчик событий: добавление  новых дел по нажатию ENTER и на кнопку ПЛЮС
inputHeader.addEventListener("input", (e) => {
    e.preventDefault();
    flag = true;
    buttonHeader.disabled = false;

});

buttonHeader.addEventListener("click", (e) => {
    if (flag) {
        e.preventDefault();
        buttonHeader.disabled = true;
        flag = false;
        let clone = cloneNodeToDo.cloneNode(true);
        clone.innerHTML = inputHeader.value + clone.innerHTML.replace(/^[^<]*/g, "");
        ul[0].insertAdjacentElement('beforeend', clone);
        ul[0].style.display = "block";
        ul[1].style.display = 'block';
        addLocalStorageToDo(inputHeader.value);
        inputHeader = document.querySelector('.header-input');
        buttonRemove = document.querySelectorAll('.todo-remove');
        buttonComplete = document.querySelectorAll('.todo-complete');
        addListenButtonRemove();
        addListenButtonComplete();
        inputHeader.value = '';

    }
});