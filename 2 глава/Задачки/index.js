//////////// Задача на использование prompt, confirm и alert

const func1 = () => {
  const question = prompt('Какую задачу ты хочешь добавить?')
  if (question) {
    const verify = confirm('Точно хотите добавить эту задачу?')
    verify ? alert(`Задача "${question}" добавлена`) : alert('Ничего не добавлено')
  } else {
    alert('Ничего не добавлено')
  }
}
// func1()


//////////// Преобразование типов

const func2 = (converter, ...params) => {
  return params.map(elem => {
    return converter(elem)
  })
}
  
console.log(func2(Number, '', 'Строка', '1', 2, true, false, NaN, undefined, null))
console.log(func2(String, '', 'Строка', '1', 2, true, false, NaN, undefined, null))
console.log(func2(Boolean, '', 'Строка', '1', 2, true, false, NaN, undefined, null))


//////////// Операторы сравнения 

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" //false
null === +"\n0\n" // false


//////////// Условное ветвление: if, '?'

const func3 = (param) => {
  console.log(param ? true : false)
  // if (param) console.log(true)
  // if (!param) console.log(false)
}

func3('') // false
func3(1) // true
func3(NaN) // false
func3(undefined) // false
func3(null) // false
func3('0') // true


//////////// Логические операторы

console.log(false || 0 || '' || 11) // 11
console.log(true && 11 && '0' && 0) // 0

let a = false
a ||= true
console.log(a) // true

let b = true
b &&= false
console.log(b) // false

alert( alert(1) || 2 || alert(3) ); // выполнится первый alert, а далее вернет 2
alert( alert(1) && alert(2) ); // выполнится первый alert и вернет undefined
alert( null || 2 && 3 || 4 ); // 3


let value = NaN;


value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40; // итог 30


if (-1 || 0) alert( 'first' ); // выполнится
if (-1 && 0) alert( 'second' ); // нет
if (null || -1 && 1) alert( 'third' ); // выполнится


const question = prompt('Кто там?')
const password = 1234

if (question && question.toLowerCase() === 'админ') {
  const verify = prompt('Введите пароль')
  if (Number(verify) === password) {
    alert('Здравствуйте')
  } else if (!password) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (!question) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}


//////////// Операторы нулевого слияния и присваивания: '??', '??='

console.log(null ?? 123) // 123
console.log(undefined ?? 123) // 123
console.log(123 ?? 234) // 123


let aa = null
aa ??= 'теперь будет этот текст' // присвоится текст, тк слева null


alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN


let city = null;
city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург"; // Берлин


let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2


//////////// Циклы while и for

let i = 3;
while (i) {
  alert( i-- );
} // выведет 3, 2, 1


let ii = 0;
while (++ii < 5) alert( ii ); // 1, 2, 3, 4

let iii = 0;
while (iii++ < 5) alert( iii ); // 1, 2, 3, 4, 5


for (let i = 2; i <= 10; i++) {
  if (!(i % 2)) alert(i)
}


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
} 
// --------->
let j = 0
while (j < 3) {
  alert( `number ${j}!` );
  j++
}


let numberResponse = prompt("Введите число больше 100")
while (numberResponse < 100 && numberResponse !== null) {
  numberResponse = prompt('Введите число больше 100')
}


const n = 10
nextStep: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextStep
  }
  alert(i)
}


//////////// Конструкция "switch"

const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
// ---------->

switch (number) {
  case 0: 
    alert('Вы ввели число 0')
    break
  case 1:
    alert('Вы ввели число 1')
    break
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
}


//////////// Функции

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
// ---------->
function checkAge(age) {
  return age ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}


const min = (a, b) => {
  return a > b ? a : b
}

let num = +prompt('Какое число будет возводить в степень?')
let degree  = +prompt('В какую степень?')
const pow = (x, n) => {
  if (!(n > 0 && n % 1 == 0)) {
    alert("Не верная степень")
    return
  }
  return x ** n
}
pow(num, degree)