// Задачи с learn.javascript.ru после глав /////////////////////////////////////////////////////

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

let calculator = new Calculator();

  function Calculator () {
    this.read = () => {
      this.a = +prompt('Введите первое число')
      this.b = +prompt('Введите второе число число')
    }
    this.sum = () => {
      return this.a + this.b
    }
    this.mul = () => {
      return this.a * this.b
    }
  }

  calculator.read();

  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );



// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

let accumulator = new Accumulator(1); // начальное значение 1

  function Accumulator (startingValue) {
    this.value = startingValue
    this.read = () => {
      const  enteredValue = +prompt("Введите число")
      this.value += enteredValue
    }
  }

  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
  alert(accumulator.value); // выведет сумму этих значений





  // Задачи с chatgpt //////////////////////////////////////////////////////////////////

  // 1. Создать метод, который будет расчитывать год рождения

  function User (name, age) {
    this.name = name
    this.age = age
    this.getBirthYear = () => {
      const date = new Date()
      return date.getFullYear() - this.age
    }
  }
  
  const user = new User('Никита', 23)
  console.log(user.getBirthYear())


  // 2. Сделай так, чтобы User кидал ошибку, если вызывается без new.

  function User (name) {
    this.name = name
    if (!new.target) {
      return 'Ошибка. Используйте new'
    }
  }

  console.log(User("Катя", 22)) // Ошибка: Используйте new


  // 3. Создай конструктор Car, который принимает параметры: brand, year, enginePower. Добавь метод isOld, который возвращает true, если машине больше 10 лет.

  function Car (brand, year, enginePower) {
    this.brand = brand
    this.year = year
    this.enginePower = enginePower
    this.isOld = () => {
      const date = new Date()
      const ageCar = date.getFullYear() - this.year 
      return ageCar > 10 ? true : false
    }
  }

  const car = new Car("Toyota", 2010, 130);
  console.log(car.isOld()); // true (если сейчас 2025)


  // 4. Дан объект. Выведи название города, если он есть, иначе 'undefined', не используя if или try.

  const user = {
    name: "Анна",
    address: {
      city: "Москва"
    }
  };

  console.log(user.address?.city)

  
  // 5. Дан объект. Вызови logger.log("Привет!") безопасно, даже если logger может быть null или undefined.

  const logger = {
    log(message) {
      console.log("Лог:", message);
    }
  };

  console.log(logger?.log('Привет!'))

  
  // 6. Дан массив пользователей. Выведи имена всех пользователей. Если элемент — null, пропускай его, не вызывая ошибки.

  const users = [
    { name: "Катя", age: 24 },
    null,
    { name: "Илья", age: 31 },
  ];

  for (let user of users) {
    if (user?.name) {
      console.log(user.name)
    }
  }


  // 7. Дан объект. Выведи settings.theme['darkMode'], но безопасно. Используй опциональную цепочку с квадратными скобками.

  const settings = {
    theme: {
      darkMode: true
    }
  };

  console.log(settings.theme?.['darkMode'])


  // 8. Дан объект. Нужно создать функцию safeRestart(obj), которая безопасно вызывает obj.restart(), только если метод существует и является функцией.

  const server = {
    status: "ok",
    restart() {
      console.log("Сервер перезапущен");
    }
  };

  function safeRestart(obj) {
    obj.restart?.()
  }

  safeRestart(server)


  // 9. Создай объект user, добавь в него Symbol-ключ id, значение — любое число.

  const id = Symbol('id')
  const user = {
      name: 'Алексей',
      [id]: 123
  }


  // 10. Создай два символа с Symbol.for("token"). Сравни их.

  const id = Symbol.for('id')
  const id2 = Symbol.for('id')
  console.log(id === id2)


  // 11. Создай объект с обычными и Symbol-свойствами. Сериализуй его с помощью JSON.stringify() и посмотри, какие свойства попадут в JSON.

  const id = Symbol('id')

  const obj = {
    name: 'Никита',
    age: 23,
    [id]: 'Что-то',
  }

  console.log(JSON.stringify(obj))