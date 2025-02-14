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

///// 6 /////

// Строка является анаграммой другой строки, если может быть получена путем перестановки символов в этой строке.

// Проверьте, что первая строка является анаграммой второй строки.

console.log(isAnagram("bacd", "cdab")); // true
console.log(isAnagram("aaabbaaa", "aaaaaabb")); // true
console.log(isAnagram("ababa", "babab")); // false
console.log(isAnagram("", "")); // true

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

///// 7 /////

// В этой задаче требуется отсортировать массив. Трансформируйте объект в массив. Пары ключ-значение должны быть отсортированы по ключу в лексикографическом порядке (по алфавиту).

const obj = {
  name: 'Jeremy',
  age: 24,
  role: 'Software Engineer',
};

// [
//   ["age", 24],
//   ["name", "Jeremy"],
//   ["role", "Software Engineer"],
// ]

const convertHashToArray = (obj) => {
  const sortedArray = Object.keys(obj).sort()
  return sortedArray.map(key => {
    return [key, obj[key]]
  })
}

console.log(convertHashToArray(obj));

///// 8 /////

// Вам дан объект, содержащий языки и результаты теста для каждого языка.
// Верните список языков с результатами не ниже 60 баллов, отсортированных по убыванию результата.
// Если по нескольким языкам набрано одинаковое количество баллов, между собой они должны быть отсортированы в лексикографическом порядке (по алфавиту по возрастанию).

function myLanguages(results) {
  return Object.keys(results).filter(key => results[key] >= 60).sort((a, b) => results[b] - results[a])
}

console.log(myLanguages({
  "Java": 10,
  "Ruby": 80,
  "Python": 65,
})); // ["Ruby", "Python"]

console.log(myLanguages({
  "Hindi": 60,
  "Dutch" : 93,
  "Greek": 71,
})); // ["Dutch", "Greek", "Hindi"]

console.log(myLanguages({
  "C++": 50,
  "ASM": 10,
  "Haskell": 20,
})); // []


///// 9 /////

// Реализуйте функцию template, которая позволяет шаблонизировать произвольную строку, подставляя в нее значения из словаря.

console.log(template(
  `Купить {size}-комнатную квартиру в городе {city} за {price} млн рублей`,
  { size: 2, city: "Тверь", price: 7 },
)); //  "Купить 2-комнатную квартиру в городе Тверь за 7 млн рублей"

console.log(template(
  `Купить {size}-комнатную квартиру в городе {city} за {price} млн рублей`,
  { size: 2, price: 7 },
)); //  "Купить 2-комнатную квартиру в городе {city} за 7 млн рублей"

console.log(template(
  `Купить {size}-комнатную квартиру в городе {city} за {price} млн рублей`,
  {},
)); //  "Купить {size}-комнатную квартиру в городе {city} за {price} млн рублей"

function template(str, dict) {
  let newStr = ''
  let key = ''
  let isKey = false
  for (let char of str) {
    if (char !== '{' && !isKey) {
      newStr += char
      continue
    }
    if (char === '{') {
      isKey = !isKey
      continue
    }
    if (char === '}') {
      if (key in dict) {
        newStr += dict[key]
        isKey = !isKey
        key = ''
        continue
      } else {
        newStr += `{${key}}`
        isKey = !isKey
        key = ''
        continue
      }
    }
    if (isKey) {
      key += char
    }
  }
  console.log(newStr, key)
}

///// 10 /////

// Дан массив чисел. Необходимо вернуть новый массив, в котором останутся только те числа, которые повторялись более одного раза.
// В итоговом массиве числа должны в том же порядке, в котором они были в исходном массиве.

const numbers = [10, 5, 1, 2, 5, 3, 2, 1, 5, 8];
console.log(nonUniqueNumbers(numbers));
//  [5, 1, 2, 5, 2, 1, 5];

function nonUniqueNumbers(numbers) {
  const numberOfDigits = {}
  for (let num of numbers) {
    if (!numberOfDigits[num]) {
      numberOfDigits[num] = 1
      continue
    }
    numberOfDigits[num]++
  }
  return numbers.filter(num => numberOfDigits[num] > 1)
}

///// 11 /////

// Дан список фильмов, отсортированных по популярности. Фильмов может быть произвольное количество. Каждый фильм имеет определенный жанр.
// Реализуйте функцию filterMovies(movies, limit), которая оставит не более limit фильмов каждого жанра. Функция возвращает массив из названий фильмов.
// Для каждого жанра мы оставляем те фильмы, которые находятся в рейтинге выше. В ответе отфильтрованные фильмы должны идти в том же порядке, в каком они шли в исходном рейтинге.

const movies = [
  {
    "title": "The Godfather",
    "genre": "Drama"
  },
  {
    "title": "Dilwale Dulhania Le Jayenge",
    "genre": "Comedy"
  },
  {
    "title": "The Shawshank Redemption",
    "genre": "Drama"
  },
  {
    "title": "Impossible Things",
    "genre": "Family"
  },
  {
    "title": "The Godfather Part II",
    "genre": "Drama"
  },
  {
    "title": "Schindler's List",
    "genre": "Drama"
  },
  {
    "title": "Life Is Beautiful",
    "genre": "Comedy"
  },
];

console.log(filterMovies(movies, 1));
const output1 = [
  'The Godfather',                // ← Drama #1
  'Dilwale Dulhania Le Jayenge',  // ← Comedy #1
  'Impossible Things',            // ← Family #1
];

console.log(filterMovies(movies, 2));
const output2 = [
  'The Godfather',                // ← Drama #1
  'Dilwale Dulhania Le Jayenge',  // ← Comedy #1
  'The Shawshank Redemption',     // ← Drama #2
  'Impossible Things',            // ← Family #1
  'Life Is Beautiful',            // ← Comedy #2
];

console.log(filterMovies(movies, 3));
const output3 = [
  'The Godfather',                // ← Drama #1
  'Dilwale Dulhania Le Jayenge',  // ← Comedy #1
  'The Shawshank Redemption',     // ← Drama #2
  'Impossible Things',            // ← Family #1
  'The Godfather Part II',        // ← Drama #3
  'Life Is Beautiful',            // ← Comedy #2
];


function filterMovies(movies, limit) {
  const genreСounter = {}
  const films = []
  for (let movie of movies) {
    if (!genreСounter[movie.genre]) {
      genreСounter[movie.genre] = 1
      films.push(movie.title)
      continue
    }
    if (genreСounter[movie.genre] < limit) {
      genreСounter[movie.genre]++
      films.push(movie.title)
      continue
    }
  }
  return films
}
