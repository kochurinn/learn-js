// Задача 1.
// Что выведется в консоли и почему?

let obj = {
  valueOf() {
    return 10;
  }
};

console.log(obj + 5); // Выведется число 15, тк объект будет приобразован к числу.


// Задача 2.
// Какой результат будет у следующего выражения?

let obj = {
  toString() {
    return "100";
  }
};

console.log(obj * 2); // Выведется число 200. Объект преобразуется в строку "100", но при умножении будет 100 * 2


// Задача 3.
// Что выведется и почему?

let obj = {
  valueOf() {
    return {};
  },
  toString() {
    return "42";
  }
};

console.log(obj + 8); // сначала будет использоваться метод valueOf, но он возвращает не приметив, поэтому проигнорируется
//значит перейдёт к toString, вернет строчку "42". Операция "42" + 8 вернет строку "428"


// Задача 4.
// Измените объект так, чтобы выражение obj + 1 возвращало "hello1".

let obj = {
  // допишите код
  toString() {
    return 'hello'
  }
};

console.log(obj + 1); // должно быть "hello1"


// Задача 5.
// Предскажите результат:

let obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 100;
    if (hint === "string") return "hundred";
    return "default";
  }
};

console.log(+obj);        // 100
console.log(`${obj}`);    // hundred
console.log(obj + "");    // default


// Задача 6.
// Сделайте так, чтобы:

let obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return 5
        return '5'
    }
};

console.log(+obj);        // 5
console.log(obj + "");    // "5"
console.log(`${obj}`);    // "5"


// Задача 7.
// Что выведется?

console.log("hello".toUpperCase()); // "HELLO"
console.log("JavaScript".slice(4, 10)); // "Script"
console.log("   spaced   ".trim()); // "spaced"


// Задача 8.
// Сделай так, чтобы из строки "Привет, мир!" получилось: "МИР! ПРИВЕТ"

const str = 'Привет, мир!'
const firstWord = str.slice(0, 6).toUpperCase()
const secondWord = str.slice(8, 11).toUpperCase()
console.log(`${secondWord}! ${firstWord}!`) // "МИР! ПРИВЕТ!"


// Задача 9.
// Что выведется?

console.log((123.456).toFixed(1)); // 123.5
console.log((255).toString(16)); // "ff"
console.log(Number("   42  ")); // 42


// Задача 10.
// Сделай так, чтобы из числа 1234567.89 получить строку: "1 234 567.89"

const num = 1234567.89
const str = String(num)
console.log(`${str.slice(0, 1)} ${str.slice(1, 4)} ${str.slice(4, 10)}`)


// Задача 11
// Что выведется?

let str = "hello";
str[0] = "H";
console.log(str);  // Строки иммутабельны, поэтому мы не можем изменить отдельный символ строки. Выведет 'hello'


// Задача 12.
// Что выведется и почему?

let isTrue = true;
console.log(isTrue.toString()); // 'true'
console.log(true.toString); // ссылка на метод


// Задача 13.
// Преобразуй строку "10.5px" в число 10.5.

console.log(parseFloat('10.5px'))