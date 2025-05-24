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