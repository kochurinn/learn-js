// Имя переменной:
// - Не может начинаться с цифры
// - Дефис запрещен
// - Знак $ и _ разрешены, в том числе и как первый символ
// - Константы можно писать в ВЕРХНЕМ_РЕГИСТРЕ для значений, которые известны до 
// начала ипользования скрипта (например цвет) -----> const COLOR_RED = "#F00";


// -------------------------------------------------------------------------------


// В JS есть 8 типов данных
// number bigInt string boolean null undefined object symbol

// number ---> кроме обычных числел имеет значение Infinity, -Infinity, NaN
// Infinity - предельное значение числа
// NaN - это результат неправильной или неопределённой математической операции

// BigInt ---> работает с числами больше, чем 2^53-1 или -2^53-1 
// (в конце числа добавляется "n")

// symbol ---> для уникальных идентификаторов

// null - отсутствие значения (переменная объявлена и оно имеет пустое значение)
// typeof null вернет object - историческая ошибка

// undefined - значение не было присвоено (переменная объявлена без значения)

// typeof Math -> object
// typeof alert -> function


// -------------------------------------------------------------------------------


// alert ---> модальное окно с текстом и кнопкой "ОК"
// prompt ---> окно с текстом (можно прописать default) и поле для ввода текста
// если если нажмет отмену или esc, то вернется null
// confirm ---> окно с текстом и кнопками "ОК" и "Отмена" - true/false соответственно


// -------------------------------------------------------------------------------


// Number(undefined) -> NaN
// Number(null) -> 0
// Number(true / false) -> 1 / 0
// Number('string') -> пустая строка = 0, строка с буквами NaN

// Boolean(0 / null / undefined / NaN / '') -> false
// Boolean('0') -> true
// Boolean(' ') -> true

// '2' + 1 -> '21'
// 6 - '2' -> 4
// '6' / '2' -> 3


// -------------------------------------------------------------------------------


// Сравнение строк проиходит посимвольно, регистр влияет
// но есть особенность
// строчные буквы имеют бОльший приоритет, чем заглавные
// 'a' > 'A' ---> true

// null == undefined ---> true
// null === undefined ---> false
// null > 0 ---> false
// null == 0 ---> false (null остается null)
// null => 0 ---> true (null при сравнении становится 0)

// undefined при сравнении преобразуется в NaN, соответственно всегда false
// Кроме нестрогого сравнения с null


// -------------------------------------------------------------------------------


// || ИЛИ находит первое истинное значение 
// (если все ложные, возвращает последний ложный)

// ||= логическое присваивание ИЛИ (синтаксический сахар, аналог if)
// Если левая часть false, то ей присваивается правая часть

let johnHasCar = false;
johnHasCar ||= "У Джона нет машины!";
alert( johnHasCar ); // "У Джона нет машины!"

// && И находит первое ложное значение
// (если все значения истины, то возвращает последнее истинное)

// &&= логическое присваивание И (синтаксический сахар, аналог if)
// Если левая часть истина, то ей присваивается правая часть

let greeting = "Привет";
greeting &&= greeting + ", пользователь!";
alert( greeting ) // "Привет, пользователь!"

// !! - переводит переменную в логический тип

alert( !!"непустая строка" ); // true
alert( !!null ); // false


// -------------------------------------------------------------------------------


// ?? Оператор нулевого слияния
// a ?? b
// Если a не null/undefined, то вернет a, иначе b

// ??= Оператор нулевого присваивания
// Если левая часть не определена (null/undefined), то ей присваивается правая часть


// -------------------------------------------------------------------------------

// do {
//     'Что-то делается'
// } while ('условие')

// Метки в цикле
// например break <labelName>

// outer: for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 let input = prompt(`Значение на координатах (${i},${j})`, '');
//                 if (!input) break outer; // (*)
//             }
//         } 
// --> Дойдя до условия, break сработает на внешнем цикле и завершит его
// continue так же может использоваться с метками
// вызов директивы с меткой должне происходить внутри цикла


// -------------------------------------------------------------------------------


// switch (x) {
//     case условие, на которое проверяют x:
//         выполнениие, если условие сработает
//         break --> если break нет, то выполнение пойдёт ниже, без проверки на условие
//     default: 
//         дефолтное выполнение, если ни одно условие не сработало
// }

// можно группировать case

// switch (x) {
//     case: 3
//     case: 5
//         выполнение кода
//         break
// }

// --> Проверка условия всегда на строгое равенство ===


// -------------------------------------------------------------------------------


// function funcName (парматры) {}
// funcName(аргументы)


// -------------------------------------------------------------------------------


// function sayHi() {    --->    Function Declaration
//     alert( "Привет" );
// }

// let sayHi = function() {     --->    Function Expression 
//     alert( "Привет" );
// };


// -------------------------------------------------------------------------------


