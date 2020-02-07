let button = document.querySelector('#btn'),
    divColorH = document.querySelector('#color'),
    body = document.querySelector('body'),
    max = 16777215;
randomColor = Math.trunc(Math.random() * max).toString(16);
divColorH.innerHTML = "#" + randomColor;
body.style.backgroundColor = "#" + randomColor;
button.addEventListener("click", () => {
    randomColor = Math.trunc(Math.random() * max).toString(16);
    divColorH.innerHTML = "#" + randomColor;
    body.style.backgroundColor = "#" + randomColor;
    button.style.color = "#" + randomColor;
});