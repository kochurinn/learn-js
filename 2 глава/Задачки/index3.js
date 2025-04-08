// ФУНКЦИИ

// Напиши функцию add()
// console.log(add(2)(3)(5)()); // 10
// console.log(add(1)(2)(3)(4)(5)()); // 15
// console.log(add(10)(-2)(8)()); // 16
// Функция должна принимать одно число за раз.
// Вызывать её можно много раз подряд.
// Как только вызывается () без аргументов, она должна вернуть сумму всех переданных чисел.

const add = (a) => {
    let sum = a

    const innerAdd = (b) => {
        if (b === undefined) return sum
        sum += b
        return innerAdd
    }

    return innerAdd
}
console.log(add(2)(3)(5)()); // 10
console.log(add(1)(2)(3)(4)(5)()); // 15
console.log(add(10)(-2)(8)()); // 16


// Напиши функцию createMultiplier(n), которая создаёт и возвращает новую функцию, умножающую числа на n.
// const double = createMultiplier(2);
// console.log(double(5)); // 10

const createMultiplier = (n) => {
    return function (x) {
        return x * n
    }
}

const double = createMultiplier(2);
console.log(double(5)); // 10


//Напиши функцию createCounter(), которая создаёт и возвращает счётчик. Этот счётчик должен увеличиваться при каждом вызове.

const createCounter = () => {
    let count = 0

    return function () {
        return ++count
    }
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



//Напиши функцию once(fn), которая принимает другую функцию и возвращает её модифицированную версию, которая может быть вызвана только один раз.
// const sayHello = once(() => console.log("Привет!"));
// sayHello(); // "Привет!"
// sayHello(); // (ничего не происходит)
// sayHello(); // (ничего не происходит)

function once(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}


// Напиши функцию getUnique(arr), которая принимает массив и возвращает новый массив, содержащий только уникальные значения из исходного.
// Пример: getUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

const getUnique = (arr) => {
    const newArr = []
    for (let elem of arr) {
      if (!newArr.includes(elem)) {
        newArr.push(elem)
      }
    }
  return newArr
}
console.log(getUnique([1, 2, 2, 3, 4, 4, 5]))



// Напиши функцию countVowels(str), которая возвращает количество гласных букв в строке.

const countVowels = (str) => {
    const vowelLetters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
    let count = 0
    for (let i of str.toLowerCase()) {
        if (vowelLetters.includes(i)) {
          count++
        }
    }
    return count
}
console.log(countVowels('КАк дЕла?')) // 3



// Напиши функцию formatTime(seconds), которая принимает количество секунд и возвращает строку в формате mm:ss.

function formatTime (seconds) {
    let min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`
}
console.log(formatTime(481)) // 08:01



// Напиши функцию isPalindrome(str), которая проверяет, является ли строка палиндромом (одинаково читается слева направо и справа налево). Игнорируй регистр и пробелы.

const isPalindrome = (str) => {
    const reverseStr = str.replaceAll(' ', '').toLowerCase().split('').reverse().join('')
    const formattedWord = str.replaceAll(' ', '').toLowerCase()
    return formattedWord == reverseStr  
}

console.log(isPalindrome("A man a plan a canal Panama")) // true



// Напиши функцию areAnagrams(str1, str2), которая проверяет, являются ли две строки анаграммами (состоят из одних и тех же букв).

function areAnagrams(str1, str2) {
    // не дошло до меня решение, потом посижу ещё с ним
}