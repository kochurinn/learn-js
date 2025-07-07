// Задача 1: Свой итератор массива задом наперёд
// Создай объект-итератор, который будет итерировать массив в обратном порядке:

const arr = [1, 2, 3, 4];

// Твоя реализация
arr[Symbol.iterator] = function () {
  return {
    current: arr.at(-1),
    to: arr.at(0),
    
    next() {
      if (this.current >= this.to) {
        return {done: false, value: this.current--}
      } else {
        return {done: true}
      }
    }
  }
};

for (const item of arr) {
  console.log(item); // Ожидается: 4, 3, 2, 1
}



// Задача 2: Итератор от A до Z
// Создай объект, который итерируется по буквам от 'A' до 'Z':

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

const alpha = {
  from: 0,
  to: alphabet.length - 1,
  
  [Symbol.iterator]() {
    return this
  },
  
  next() {
    if (this.from <= this.to) {
      return {done: false, value: this.from++}
    } else {
      return {done: true}
    }
  }
};

for (const letter of alphabet) {
  console.log(letter); // A, B, ..., Z
}



// Задача 3: Диапазон чисел
// Создай функцию range(from, to), которая возвращает итерируемый объект:

const range = (from, to) => ({
    from,
    to,
  
    [Symbol.iterator]() {
      return this  
    },

    next() {
      if (this.from <= this.to) {
        return {done: false, value: this.from++}
      } else {
        return {done: true}
      }
    }
  }
);

for (const num of range(5, 10)) {
  console.log(num); // 5, 6, 7, 8, 9, 10
}