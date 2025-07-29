// 6.1 Рекурсия

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

const sumTo = (x) => {
  return x === 1 ? x : x + sumTo(x - 1)
}

console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))



// Вычислить факториал

const factorial = (x) => {
  return x === 1 ? x : x * factorial(x - 1)
}

console.log(factorial(10))



// Числа Фибоначчи

const fib = (x) => {
  return x <= 1 ? x : fib(x - 1) + fib(x - 2)
}

console.log(fib(3))



// Вывод односвязного списка

// цикл
const printList = (list) => {
  let step = list
  while (step) {
    console.log(step.value)
    step = step.next
  }
}

printList(list)

//рекурсия
const printList = (list) => {
  console.log(list.value)
  
  if (list.next) {
    printList(list.next)
  }
}

printList(list)


// Вывод односвязного списка в обратном порядке.

const printListFromEnd = (list) => {
  if (list.next) {
    printList(list.next)
  }
  console.log(list.value)
}

printList(list)



// Проверка на палиндром

const isPalindrome = (str) => {
  if (str.length <= 1) return true
  if (str[0] === str.at(-1)) {
    return isPalindrome(str.slice(1, -1))
  } else {
    return false
  }
}

console.log(isPalindrome("шалаш"))
console.log(isPalindrome("анна"))
console.log(isPalindrome("hello"))



// Глубокий подсчёт количества элементов в массиве

function countElements(arr) {
  let count = 0;
  
  for (const element of arr) {
    if (Array.isArray(element)) {
      count += countElements(element); // Рекурсивный вызов для вложенного массива
    } else {
      count += 1; // Увеличиваем счётчик для обычного элемента
    }
  }
  
  return count;
}

countElements([1, [2, [3, 4], 5]]) // 5 (1, 2, 3, 4, 5)
countElements([[[]]])              // 0 (пустые массивы не считаются)
countElements([10, [20, [30]]])    // 3 (10, 20, 30)



// Поиск максимального числа в массиве

const findMax = (arr) => {
  if (arr.length === 0) return 0
  if (arr.length === 1) return arr[0]
  
  return Math.max(arr[0], findMax(arr.slice(1)))
}

findMax([1, 5, 3, 9, 2]) // 9
findMax([-10, -5, -20])   // -5



// Генератор всех подмножеств (комбинаций)

function getSubsets(arr) {
  if (arr.length === 0) return [[]]; // Базовый случай
  
  const first = arr[0];
  const subsetsWithoutFirst = getSubsets(arr.slice(1));
  const subsetsWithFirst = subsetsWithoutFirst.map(subset => [first, ...subset]);
  
  return [...subsetsWithoutFirst, ...subsetsWithFirst];
}

getSubsets([1,1]) // [ [], [ 1 ], [ 1 ], [ 1, 1 ] ]
getSubsets([1, 2]) // [[], [1], [2], [1, 2]]
getSubsets([9])    // [[], [9]]



// Разворот строки

const reverseString = (str) => {
  if (str.length <= 1) return str
  
  let lastSymbol = str.slice(-1)
  return lastSymbol + reverseString(str.slice(0, str.length - 1))
}

reverseString("hello") // "olleh"
reverseString("a")     // "a"
reverseString('12345') // '54321'



// Сумма цифр числа 

const sumDigits = (num) => {
  num = Math.abs(num); // Работаем с модулём, чтобы избежать проблем с отрицательными числами
  if (num < 10) return num; // Базовый случай: одна цифра
  return (num % 10) + sumDigits(Math.floor(num / 10)); // Последняя цифра + рекурсия для остатка
};

sumDigits(123) // 6 (1 + 2 + 3)
sumDigits(9045) // 18 (9 + 0 + 4 + 5)