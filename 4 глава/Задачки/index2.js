// 1. Создание объекта и доступ к свойствам
// Создай объект person, у которого есть свойства: name, age, city. Выведи на экран фразу:
// "Меня зовут [name], мне [age] лет, я из [city]".

const person = {
    name: "Никита",
    age: '23',
    city: 'Екатеринбург'
}
alert(`Меня зовут ${person.name}, мне ${person.age} года, я из ${person.city}`)


// 2. Добавление и удаление свойств
// Создай пустой объект car.
// Добавь в него свойства: brand, model, year.
// Потом удали свойство year.

const car = {}
car.brand = 'bmw'
car.model = '520d'
car.year = '2018'
delete car.year


// 3. Подсчёт количества свойств
// Напиши функцию countProps(obj), которая возвращает количество собственных свойств объекта (без унаследованных).\

const user = {
    name: "Alice",
    age: 25,
    city: "Paris"
};

let count = 0
for (let i in user) {
    count++
}
console.log(count)


// 4. Поиск свойства по значению
// Напиши функцию findKeyByValue(obj, value), которая ищет ключ по значению.

const fruits = {
    a: "apple",
    b: "banana",
    c: "cherry"
};

const findKeyByValue = (obj, value) => {
    for (let elem in obj) {
        if (obj[elem] === value) {
            return elem
        }
    }
}

console.log(findKeyByValue(fruits, "banana")) // вернёт 'b'


// 5. Объединение объектов
// Есть два объекта
// Собери из них один объект c, при этом свойства из b должны перезаписать одноимённые свойства из a.

const a = {x: 1, y: 2};
const b = {y: 10, z: 3};
const c = {...a, ...b} 


// 6. Перебор объекта и вывод пар ключ-значение
// Напиши функцию, которая выводит каждую пару ключ-значение объекта в формате:
// "ключ: значение"

const func = (obj) => {
    for (let elem in obj) {
        console.log(`${elem} : ${obj[elem]}`)
    }
}


// 7. Копирование объекта
// Напиши функцию copyObject(obj), которая создаёт поверхностную копию объекта.

function copyObject(obj) {
    return { ...obj }
}

const original = {
    name: "Alice",
    age: 25
};
  
const copied = copyObject(original);


// 8. Проверка наличия свойства
// Напиши функцию hasKey(obj, key), которая возвращает true, если в объекте есть ключ key.

const hasKey = (obj, key) => {
    if (key in obj) {
        return true
    }
}


// 9. Подсчёт повторяющихся значений

const arr = ["apple", "banana", "apple", "cherry", "banana", "banana"];
const obj = {}

const countElements = (obj, arr) => {
    for (let elem of arr) {
        if (elem in obj) {
            obj[elem]++
            continue
        }
        obj[elem] = 1
    }
    return obj
}

console.log(countElements(obj, arr))


// 10. Сортировка объекта по значениям
// Дан объект
// Создай из него массив пар [ключ, значение], отсортированный по убыванию значений:

const scores = {
    Alice: 30,
    Bob: 20,
    Carol: 50
};

const sortObjectByValuesDesc = (obj) => {
    return Object.entries(obj).sort((a, b) => b[1] - a[1]);
};