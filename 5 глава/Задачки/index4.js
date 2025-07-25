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