// 5.6 Перебираемые объекты

// Symbol.iterator

// Чтобы сделать range итерируемым (и позволить for..of работать с ним), нам нужно добавить в объект метод с именем Symbol.iterator (специальный встроенный Symbol, созданный как раз для этого).
// Когда цикл for..of запускается, он вызывает этот метод один раз (или выдаёт ошибку, если метод не найден). Этот метод должен вернуть итератор – объект с методом next.
// Дальше for..of работает только с этим возвращённым объектом.
// Когда for..of хочет получить следующее значение, он вызывает метод next() этого объекта.
// Результат вызова next() должен иметь вид {done: Boolean, value: any}, где done=true означает, что цикл завершён, в противном случае value содержит очередное значение.
// Вот полная реализация range с пояснениями:

let range = {
  from: 1,
  to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

// ИЛИ

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

// Недостаток такого подхода в том, что теперь мы не можем использовать этот объект в двух параллельных циклах for..of: у них будет общее текущее состояние итерации, потому что теперь существует лишь один итератор – сам объект. 


// Для строки for..of перебирает символы:
for (let char of "test") {
  // срабатывает 4 раза: по одному для каждого символа
  alert( char ); // t, затем e, затем s, затем t
}

// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.
// Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

// Есть универсальный метод Array.from, который принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array. После этого мы уже можем использовать методы массивов.

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)

// range взят из примера в начале статьи
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (преобразование массива через toString работает)

Array.from(obj[, mapFn, thisArg])
// Необязательный второй аргумент может быть функцией, которая будет применена к каждому элементу перед добавлением в массив, а thisArg позволяет установить this для этой функции.




// 5.7 Map и Set

// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства:
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let map = new Map();
map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ
// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"
alert(map.size); // 3

// Для перебора коллекции Map есть 3 метода:
// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

// В отличие от обычных объектов Object, в Map перебор происходит в том же порядке, в каком происходило добавление элементов.
// Кроме этого, Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array: