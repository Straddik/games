"use strict";
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function guessTheNumber() {
    let guessedNumber = Math.ceil(Math.random() * 100);
    console.log(guessedNumber);

    function gameCycle() {
        let answer = prompt("Угадай число от 1 до 100");
        if (answer) {
            if (isNumber(answer)) {
                answer = +answer;
                if (guessedNumber > answer) {
                    alert("Загаданное число больше");
                    gameCycle();
                } else if (guessedNumber === answer) {
                    alert("Вы угадали число");
                    return undefined;
                } else {
                    alert("Загаданное число меньше");
                    gameCycle();
                }
            } else {
                alert("Введи число!");
                gameCycle();
            }
        }
    }
    gameCycle();
}

guessTheNumber();