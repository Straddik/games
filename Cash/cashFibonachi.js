const fibonachi = (n) => {
    return n == 2 ? 1 : n == 1 ? 0 : fibonachi(n - 1) + fibonachi(n - 2);
};

const generateKey = item => item.toString() + '(' + typeof item + ')';

const memorize = (cb, n) => {
    const cash = {};
    return (...args) => {
        const key = generateKey(...args),
            val = cash[key];
        if (val) return val;
        const res = cb(...args);
        if (Object.keys(cash).length >= n) {
            delete cash[Object.keys(cash)[0]];
        };
        cash[key] = res;
        return res;
    };
};

const memFib = memorize(fibonachi, 3);
console.log(memFib(40));
console.log(memFib(41));
console.log(memFib(20));
console.log(memFib(19));
console.log(memFib(41));
console.log(memFib(40));