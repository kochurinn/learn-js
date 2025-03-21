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



// 2.14

//Напиши программу, которая принимает число (от 1 до 7) и выводит соответствующий день недели (1 — Понедельник, 2 — Вторник и т. д.).

const getDayOfWeek = (day) => {
    switch (day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            console.log('Такого дня недели нет')
    }
}

// Напиши функцию, которая принимает два числа и оператор (+, -, *, /) и выполняет соответствующую операцию.

const calculator = (a, b, operator) => {
    switch (operator) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b)
            break;
        case '*':
            console.log(a * b)
            break;
        case '/':
            console.log(a / b)
            break;
        default:
            console.log('Такой оператор не принимается')
    }
}

// Напиши программу, которая принимает номер месяца (1-12) и выводит название сезона.

const getSeason = (month) => {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log('Зима')
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна')
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето')
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень')
            break;
        default:
            console.log('Ошибка')
    }
}

//Напиши функцию, которая принимает число (0-100) и выводит оценку (A, B, C, D, F).

const getGrade = (score) => {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        default:
            console.log('F')
    }
}
getGrade(85); // "B"