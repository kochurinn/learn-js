// 1. Поверхностное копирование
// Склонируй объект user в новый объект userCopy, чтобы изменение полей userCopy не влияло на user.

const user = {
  name: 'Alice',
  age: 25,
};

const userCopy = Object.assign({}, user);

// 2. Копирование с добавлением новых свойств
// Копируй объект product в новый productCopy, добавляя туда новое свойство inStock: true.

const product = {
  id: 1,
  title: 'Phone',
};

const productCopy = Object.assign({ inStock: true }, product);

// 3. Объединение нескольких объектов
// Создай новый объект, который объединит свойства объектов a, b и c. При совпадении ключей, приоритет должен быть у последнего объекта.

const a = { name: 'John' };
const b = { age: 30 };
const c = { name: 'Mike', city: 'New York' };

const d = { ...a, ...b, ...c };

// 4. Копирование массива объектов
// Склонируй массив объектов users, чтобы изменение объектов в новом массиве не влияло на исходный массив.

const users = [
  { phone: 'Android', ver: 15 },
  { name: 'Bob', age: 30 },
];

const usersCopy = {};
for (let user of users) {
  usersCopy = { ...usersCopy, ...user };
}

// 5. Метод объекта с использованием this
// Создай объект car, у которого есть свойства brand и model, и метод getInfo(), который возвращает строку "Brand: ..., Model: ...", используя this.

const car = {
  brand: 'Iphone',
  modal: '16 pro max',
  getInfo() {
    return `Brand: ${this.brand}, Modal: ${this.modal}`;
  },
};

// 6.Передача метода с потерей контекста this
// Объясни, что выведет следующий код и как исправить проблему, чтобы работало правильно:

const person = {
  name: 'Alice',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const greet = person.sayHi;
greet(); // Что выведет?

// Выведет window
// Переписать на функцию с вызовом внутри

const greet = () => person.sayHi();
greet(); // "Hi, I am Alice"

// 7. this внутри стрелочной функции
// Исправь код так, чтобы метод counter.increment() корректно увеличивал значение value, используя this.

const counter = {
  value: 0,
  increment() {
    setTimeout(function () {
      this.value++;
      console.log(this.value);
    }, 1000);
  },
};

// изменение:

const counter = {
  value: 0,
  increment() {
    setTimeout(() => {
      this.value++;
      console.log(this.value);
    }, 1000);
  },
};

// 8. Напиши объект calculator с методами add и subtract. Используя this, методы должны работать с переменной result внутри объекта.

const calculator = {
  result: 0,
  add(x) {
    if (typeof x === 'number') {
      this.result += x;
    } else {
      alert('Это не число');
    }
  },
  subtract(x) {
    if (typeof x === 'number') {
      this.result -= x;
    } else {
      alert('Это не число');
    }
  },
};
