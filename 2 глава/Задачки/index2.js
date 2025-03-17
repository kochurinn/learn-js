// 2.13 Циклы while for

// 1. Вывести числа от 1 до 10

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2. Вывести все четные числа от 2 до 20

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
} 

// 3. Посчитать сумму чисел от 1 до n (пусть n = 100)

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

// 4. Вывести таблицу умножения на 7

let multBySeven
for (let i = 0; i < 10; i++) {
    multBySeven = 7 * i
    console.log(`7 * ${i} = ${multBySeven}`)
}

// 5. Вывести все элементы массива

let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 6. Вывести числа от 10 до 1

let num = 10
while (num > 0) {
    console.log(num)
    num--
}

// 7. Посчитать сумму четных чисел от 1 до 50

let number = 2
let sum2 = 0
while (number < 51) {
    if (number % 2 == 0) {
        sum2 += number
    }
    number++
}
console.log(sum2)

// 8. Пользователь вводит число, пока не введет 0

let input = prompt('Введите число 0')
while (input !== '0') {
    input = prompt('Вы ввели не 0. Введите число 0')
}

// 9. Вывести все элементы массива (while)

let array = [5, 10, 15, 20];
let index = 0
while (index !== array.length) {
    console.log(array[index])
    index++
}

// 10. Вывести числа Фибоначчи до 100

let a = 0, b = 1;
while (a <= 100) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}