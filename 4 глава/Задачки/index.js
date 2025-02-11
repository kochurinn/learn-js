// Задачки с learn.js
const createObj = () => {
    const user = {}
    user.name = 'John'
    user.surname = 'Smith'
    user.name = 'Pete'
    delete user.name
    // return user
}

///////////////////////////////////

const isEmpty = (obj) => {
    return Object.keys(obj).length ? false : true
    //true -> если объект пустой
}

///////////////////////////////////

const calculatingAmount = (obj) => {
    let sum = 0
    for (let elem in obj) {
        sum += obj[elem]
    }
    return sum
}

calculatingAmount({
    John: 100,
    Ann: 160,
    Pete: 130
})

///////////////////////////////////

const multiplyNumeric = (obj) => {
    for (let elem in obj) {
        if (typeof obj[elem] === 'number') {
            obj[elem] *= 2
        }
    }
    return obj
}

///////////////////////////////////

const calculator = {
    read() {
        this.a = +prompt('Введите первое число', 0)
        this.b = +prompt('Введите второе число', 0)
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

///////////////////////////////////

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() {
      alert( this.step );
      return this
    }
};
  
ladder.up().up().down().showStep().down().showStep();

///////////////////////////////////

function Calculator () {
    this.read = () => {
        this.a = +prompt('Введите первое число', 0)
        this.b = +prompt('Введите второе число', 0)
    }
    this.sum = () => {
        return this.a + this.b
    }
    this.mul = () => {
        return this.a * this.b
    }
}

// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

///////////////////////////////////

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = () => {
        this.value += +prompt('Введите число')
    }
}

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);



// Задачки с maxcode.dev

///// 1 ///// 
// Функция incrementAge принимает объект с информацией о человеке, в том числе его возраст (поле age).
//Нужно вернуть новый объект такого же формата, где возраст будет увеличен на 1. Исходный объкет не должен измениться.

// ДАНО
const person = {
    name: "Joe",
    age: 82,
    gender: "male",
}; 
console.log(incrementAge(person));
// РЕШЕНИЕ
function incrementAge(person) {
    return {
        ...person,
        age: person.age + 1
    }
}

///// 2 /////
// Дан массив с информацией о командах разработки. Верните список имен всех разработчиков (член команды с ролью "developer"), отсортированных в лексикографическом порядке (по алфавиту).

// ДАНО
const teams = [
    {
      name: "1",
      members: [
        { name: "Alice", role: "developer" },
        { name: "Bob", role: "designer" },
      ],
    },
    {
      name: "2",
      members: [
        { name: "Carol", role: "developer" },
        { name: "Dave", role: "qa" },
      ],
    },
  ];
  
  console.log(findDevelopers(teams)); // ["Alice", "Carol"]

// РЕШЕНИЕ

