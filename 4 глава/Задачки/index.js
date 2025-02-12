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

function findDevelopers(teams) {
    const arrDevelopers = []
    teams.forEach(obj => {
      for (let member of obj.members) {
        if (member.role === 'developer') arrDevelopers.push(member.name)
      }
    })
    return arrDevelopers.sort()
}

///// 3 /////
// На вход подается массив разработчиков:

const list1 = [
    {
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    } 
  ];
  // Необходимо вернуть новый массив, где у каждого разработчика появится поле greeting

// РЕШЕНИЕ

function greetDevelopers(list) {
    const list2 = list.map(person => {
      const personWithGreeting = {
        ...person,
        greeting: `Hi ${person.firstName}, what do you like the most about ${person.language}?`
      }
      return personWithGreeting
    })
    return list2
  }

///// 4 /////

// Дан массив объектов и название ключа. Необходимо вернуть массив значений по этому ключу.

const users = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

// Решение

const extractKey = (obj, key) => {
    return obj.map(elem => {
      return elem[key]
    })
  }

console.log(extractKey(users, "name")); // ["A", "B", "C"]
console.log(extractKey(users, "age")); // [11, 54, 23]

///// 5 /////

// Замените в предложении все слова, обозначающие цифры, на цифры.

const s = "The score is four nil";
const numbersInWords = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  
  function replaceDigits(s) {
    return s.split(' ').map(word => {
      const gettingIndex = numbersInWords.indexOf(word)
      if (gettingIndex >= 0) return gettingIndex
      return word
    }).join(' ')
  }
  
console.log(replaceDigits(s)); // "The score is 4 0"

///// 6 /////

// Годовой доход сотрудника зависит от его зарплаты, но для разных уровней вычисляется по-разному.

// Джуниор получает только зарплату
// Мидл дополнительно получает годовую премию в размере 10% от дохода
// Сеньор получает годовую премию в размере 10% от дохода + 5% за каждый год опыта
// Тимлид получает годовую премию в размере 20% от дохода + 10% за каждый год опыта
// На вход приходит массив с данными о сотрудниках. Необходимо посчитать размер фонда оплаты труда команды — общую сумму расходов на всю команду за год.

const employees = [
    {
      name: "Andrew Clark",
      level: "junior",
      monthlyWage: 5000,
      tenure: 2,
    },
    {
      name: "Dan Abramov",
      level: "middle",
      monthlyWage: 6000,
      tenure: 4,
    },
    {
      name: "Sebastian Markbåge",
      level: "teamlead",
      monthlyWage: 10000,
      tenure: 10,
    },
    {
      name: "Sophie Alpert",
      level: "senior",
      monthlyWage: 9000,
      tenure: 9,
    },
    {
      name: "Tianyu Yao",
      level: "middle",
      monthlyWage: 7000,
      tenure: 3,
    },
  ];

// Andrew Clark за год заработает 60 000, Dan Abramov — 79 200, Sebastian Markbåge — 264 000, Sophie Alpert — 167 400, Tianyu Yao — 92 400.

// Общая зарплата команды за год составит 663 000.

const calcOfAnnualSalary = (employees) => {
    const levelAllowance = {
        junior (monthlyWage, tenure) {
            return monthlyWage * 12
        },
        middle (monthlyWage, tenure) {
            return monthlyWage * 1.1 * 12
        },
        senior (monthlyWage, tenure) {
            return (monthlyWage * 1.1 + (monthlyWage * 0.05 * tenure)) * 12
        },
        teamlead (monthlyWage, tenure) {
            return (monthlyWage * 1.2 + (monthlyWage * 0.1 * tenure)) * 12
        }
    }

    return employees.reduce((sum, empl) => {
        return sum + levelAllowance[empl.level](empl.monthlyWage, empl.tenure)
    }, 0)
}

console.log(calcOfAnnualSalary(employees))

///// 7 /////

// Строка является анаграммой другой строки, если может быть получена путем перестановки символов в этой строке.

// Проверьте, что первая строка является анаграммой второй строки.

console.log(isAnagram("bacd", "cdab")); // true
console.log(isAnagram("aaabbaaa", "aaaaaabb")); // true
console.log(isAnagram("ababa", "babab")); // false

function isAnagram(str1, str2) {
    if (!str1.length && !str2.length) return true
    if (str1.length !== str2.length) return false

    const calcSymbols = (arrSymbols) => {
        const objectToReturn = {}
        for (let symbol of arrSymbols) {
            if (symbol in objectToReturn) {
              objectToReturn[symbol]++
              continue
            }
            objectToReturn[symbol] = 1
        }
        return objectToReturn
    }

    const obj1 = calcSymbols(str1.split(''))
    const obj2 = calcSymbols(str2.split(''))

    for (let char in obj1) {
      if (!(char in obj2)) return false
      if (obj1[char] !== obj2[char]) return false
      return true
    }
}