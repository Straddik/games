"use strict";
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function guessTheNumber() {
    let guessedNumber = Math.ceil(Math.random() * 100);
    let attempt = 10;
    console.log(guessedNumber);

    function gameCycle() {
        let answer = prompt("Угадай число от 1 до 100");
        if (answer) {
            if (isNumber(answer)) {
                answer = +answer;
                if (guessedNumber > answer) {
                    --attempt;
                    if (attempt) {
                        alert("Загаданное число больше, у вас осталось: " + attempt);
                        gameCycle();
                    } else {
                        answer = confirm("Попытки закончились, хотите сыграть еще?");
                        if (answer) {
                            guessedNumber = Math.ceil(Math.random() * 100);
                            attempt = 10;
                            gameCycle();
                        }
                    }
                } else if (guessedNumber === answer) {
                    answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                    if (answer) {
                        guessedNumber = Math.ceil(Math.random() * 100);
                        attempt = 10;
                        gameCycle();
                    }
                } else {
                    --attempt;
                    if (attempt) {
                        alert("Загаданное число меньше, у вас осталось: " + attempt);
                        gameCycle();
                    } else {
                        answer = confirm("Попытки закончились, хотите сыграть еще?");
                        if (answer) {
                            guessedNumber = Math.ceil(Math.random() * 100);
                            attempt = 10;
                            gameCycle();
                        }
                    }
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