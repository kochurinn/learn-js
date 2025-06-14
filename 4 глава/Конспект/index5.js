// 5.3 Строки

// Внутренний формат для строк — всегда UTF-16, вне зависимости от кодировки страницы.

// Преимущество обратных кавычек — они могут занимать более одной строки

// \n	Перевод строки
// \r	В текстовых файлах Windows для перевода строки используется комбинация символов \r\n, а на других ОС это просто \n. Это так по историческим причинам, ПО под Windows обычно понимает и просто \n.
// \', \", \`	Кавычки
// \\	Обратный слеш
// \t	Знак табуляции
// \b, \f, \v	Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.

// alert( 'I\'m the Walrus!' ); // I'm the Walrus!
// alert( `I'm the Walrus!` ); // I'm the Walrus!

let str = `Hello`;
// получаем первый символ
alert( str[0] ); // H
alert( str.at(0) ); // H
// получаем последний символ
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o
// Квадратные скобки всегда возвращают undefined для отрицательных индексов. Например:
alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

// Также можно перебрать строку посимвольно, используя for..of:
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}

let str = 'Hi';
str[0] = 'h'; // ошибка - Строки иммутабельны
alert( str[0] ); // не работает

let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

let str = 'Widget with id';
alert( str.indexOf('id', 2) ) // 12

// При проверке indexOf в условии if есть небольшое неудобство. Такое условие не будет работать:
let str = "Widget with id";
if (str.indexOf("Widget")) {
    alert("Совпадение есть"); // не работает
}
// Мы ищем подстроку "Widget", и она здесь есть, прямо на позиции 0. Но alert не показывается, т. к. str.indexOf("Widget") возвращает 0, и if решает, что тест не пройден.
// Поэтому надо делать проверку на -1



// Существует старый трюк с использованием побитового оператора НЕ — ~. Он преобразует число в 32-разрядное целое со знаком (signed 32-bit integer). Дробная часть, в случае, если она присутствует, отбрасывается. Затем все биты числа инвертируются.
// На практике это означает простую вещь: для 32-разрядных целых чисел значение ~n равно -(n+1).
// В частности:
alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

// Таким образом, ~n равняется 0 только при n == -1 (для любого n, входящего в 32-разрядные целые числа со знаком).
// Соответственно, прохождение проверки if ( ~str.indexOf("…") ) означает, что результат indexOf отличен от -1, совпадение есть.
// Это иногда применяют, чтобы сделать проверку indexOf компактнее:
let str = "Widget";
if (~str.indexOf("Widget")) {
  alert( 'Совпадение есть' ); // работает
}



// Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

// Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

str.slice(start [, end])
// Возвращает часть строки от start до (не включая) end.
	// можно передавать отрицательные значения

str.substring(start [, end])
// Возвращает часть строки между start и end (не включая) end.
// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.
    // отрицательные значения равнозначны 0

str.substr(start [, length])
// Возвращает часть строки от start длины length.
    // значение start может быть отрицательным


str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:
// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

String.fromCodePoint(code)
// Создаёт символ по его коду code
alert( String.fromCodePoint(90) ); // Z

// Давайте сделаем строку, содержащую символы с кодами от 65 до 220 — это латиница и ещё некоторые распространённые символы:
let str = '';
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
// Как видите, сначала идут заглавные буквы, затем несколько спецсимволов, затем строчные и Ö ближе к концу вывода.
// Теперь очевидно, почему a > Z.
// Символы сравниваются по их кодам. Больший код — больший символ. Код a (97) больше кода Z (90).
// Все строчные буквы идут после заглавных, так как их коды больше.
// Некоторые буквы, такие как Ö, вообще находятся вне основного алфавита. У этой буквы код больше, чем у любой буквы от a до z.

// Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:
// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.
// Например:
alert( 'Österreich'.localeCompare('Zealand') ); // -1