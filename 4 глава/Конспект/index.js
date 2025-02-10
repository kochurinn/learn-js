let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"


let key = "likes birds";
// то же самое, что и user["likes birds"] = true;
user[key] = true;


let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert( bag.apple ); // 5, если fruit="apple"


"key" in object // проверка на наличие ключа в объекте


for (let key in obj) // цикл аналогичный for of, только по объекут


let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};
// ключи упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания.
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// чтобы поправить упорядоченность, перед целочисленным ключем достаточно добавить +, тогда они выведутся в порядке создания
let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}


// -------------------------------------------------------------------------------


let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user (поверхностное копирование)
Object.assign(user, permissions1, permissions2);

//глубокое клонирование делается с использованием рекурсии
//или готовая реализация, например _.cloneDeep(obj) из библиотеки JavaScript lodash.
//Также мы можем использовать глобальный метод structuredClone(), который позволяет сделать полную копию объекта (не везде поддерживается)


// -------------------------------------------------------------------------------


//Основной концепцией управления памятью в JavaScript является принцип достижимости.
//Если упростить, то «достижимые» значения – это те, которые доступны или используются. Они гарантированно находятся в памяти.


// -------------------------------------------------------------------------------


//Функцию, которая является свойством объекта, называют методом этого объекта.
//this указывает на объект, в котором вызывается функция. Его значение может меняться в зависимости от того, как и где вызывается функция.


// -------------------------------------------------------------------------------


// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".

function User(name) {
  // this = {};  (неявно)
  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;
  // return this;  (неявно)
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

// Будет такой результат --->
let user = {
  name: "Jack",
  isAdmin: false
};

// Пример использование метода в конструкторе
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}


// -------------------------------------------------------------------------------


//?. опциональная цепочка. Если значение слева существует, то пропускает дальше. Если нет, возвращает undefined
//ВАЖНОЕ УСЛОВИЕ - переменная в любом случае должна быть объявлена
let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)

//2й пример
let user = null;
alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

//синтаксис ?. делает необязательным значение перед ним, но не какое-либо последующее

//Пример  с функциями
let userAdmin = {
  admin() {
    alert("Я админ");
  }
};
let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)

//Пример с объектом 
let key = "firstName";
let user1 = {
  firstName: "John"
};
let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

delete user?.name; // удаляет user.name если пользователь существует

// опциональную цепучку нельзя использовать для записи
let user = null;
user?.name = "John"; // Ошибка, не работает
// то же самое что написать undefined = "John"


// -------------------------------------------------------------------------------


//«Символ» представляет собой уникальный идентификатор.
// Создаём новый символ - id
let id = Symbol();
// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false - потому что символы всегда уникальны, даже если одинаковое описание
// for..in игнорирует символы
// Object.keys тоже игнорирует символы
// Object.assign копирует символы

// Глобальные символы ////////////////
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан
// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");
// проверяем -- это один и тот же символ
alert( id === idAgain ); // true

// Symbol.keyFor /////////////////
// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


// -------------------------------------------------------------------------------


