class First {
    hello() {
        console.log("Привет я метод родителя!")
    };
};
class Second extends First {
    hello() {
        super.hello();
        console.log('А я наследуемый метод!');
    }
};

first = new First();
second = new Second();
first.hello();
second.hello();