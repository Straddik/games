let button = document.querySelector('button'),
    input = document.querySelector('input'),
    ul = document.querySelector('ul');

button.addEventListener("click", () => {
    let li = document.querySelector('li').cloneNode(true);
    //добавила, чтобы пустой input не добавлял
    if (input.value) {
        li.innerHTML = input.value[0].toUpperCase() + input.value.substr(1);
        ul.lastElementChild.insertAdjacentElement('afterend', li);
    }
})