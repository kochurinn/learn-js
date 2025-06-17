// Задачи с сайта https://maxcode.dev/courses/arrays/ (раздел Массивы и строки)


// 1. Напишите функцию, которая принимает предложение, состоящее из слов, разделенных пробелами, и возвращает длину самого короткого слова.

const str = "lorem ipsum dolor sit amet";

const shortestWord = (str) => {
  const arrWords = str.split(' ')
  let minLength = arrWords[0].length
  arrWords.forEach(word => {
    if (word.length < minLength) {
      minLength = word.length
    }
  })
  return minLength
}

console.log(shortestWord(str)); // 3



// 2. Реализуйте функцию, которая принимает произвольное количество слов и объединяет их в одну строку.

const formatWords = function (...args) {
  if (args.length === 0) {
    return ''
  }
  if (args.length === 1) {
    return args[0]
  }

  let str = args[0]
  for (let i = 1; i < args.length; i++) {
    if (i === args.length - 1) {
      str += ` and ${args[i]}`
      return str
    }
    str += `, ${args[i]}`
  }
}

console.log(formatWords()); // ""
console.log(formatWords("Natalie")); // "Natalie"
console.log(formatWords("Natalie", "Mila")); // "Natalie and Mila"
console.log(formatWords("Natalie", "Mila", "Vincent")); // "Natalie, Mila and Vincent"
console.log(formatWords("Natalie", "Mila", "Vincent", "Barbara")); // "Natalie, Mila, Vincent and Barbara"



// 3. Для данной строки верните массив с индексами символов больших букв (A, B, ..., Z).

const findCapitals = (str) => {
    const arrLetters = str.split('')
    const arrIndex = []
    arrLetters.forEach((letter, index) => {
        if (letter === letter.toUpperCase() && typeof letter === 'string') {
            arrIndex.push(index)
        }
    })
    return arrIndex
}

console.log(findCapitals("MaxCode")); // [0, 3]



// 4. Дано положительное целое число — цена товара. Верните строку с отформатированной ценой: цифры справа налево должны быть сгруппированы по три, а группы отделены друг от друга пробелами.

function formatPrice(price) {
    const priceStr = String(price)
    let formatPriceArr = []
    let count = 0

    for (let i = priceStr.length - 1; i >= 0; i--) {
        if (count != 3) {
            formatPriceArr.push(priceStr[i])
            count++
        } else {
            count = 1
            formatPriceArr.push(' ')
            formatPriceArr.push(priceStr[i])
        }
    }
    return formatPriceArr.reverse().join('')
}

console.log(formatPrice(100)); // "100"
console.log(formatPrice(2000)); // "2 000"
console.log(formatPrice(345678)); // "345 678"
console.log(formatPrice(1000000)); // "1 000 000"
console.log(formatPrice(1234567890)); // "1 234 567 890"



// 5. Реализуйте функцию topWords, которая возвращает массив слов из массива words, подходящих под запрос query.
// Функция принимает три аргумента:
// words — массив строк;
// query — строка, с которой должны начинаться искомые слова;
// limit — максимальное количество слов, которое нужно вернуть.
// Поиск должен быть регистронезависимым. Например, слово "About" подходит под запрос "ABO". В итоговом массиве слова должны быть в том же регистре, в каком были в исходном массиве.
// Если подходящие слов больше, чем limit, то нужно вернуть первые limit подходящих слов из массива. Если меньше — вернуть все.

const words = [
  "a",
  "able",
  "about",
  "absolute",
  "accept",
  "account",
  "achieve",
  "across",
  "act",
  "active",
  "actual",
  "add",
  "address",
  "Admit",
  "Advertise",
  "Affect",
  "AFFORD",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "agent",
  "ago",
  "agree",
];

function topWords(words, query, limit) {
    const arr = []
    for (let i = 0; i <= words.length - 1; i++) {
        if (arr.length === limit) return arr

        let formatWord = words[i].toLowerCase()
        let lowerQuery = query.toLowerCase()

        if (formatWord.startsWith(lowerQuery)) {
            arr.push(words[i])
        }
    }
    return arr
}

console.log(topWords(words, "Af", 3)); // ['Affect', 'AFFORD', 'after']
console.log(topWords(words, "aga", 5)); // ['again', 'against']



// 6. Реализуйте функцию max, которая принимает массив чисел и возвращает максимальное число в этом массиве.

const max = (arr) => {
    let max = arr[0]

    for (let elem of arr) {
        if (elem > max) {
            max = elem
        }
    }

    return max
}

console.log(max([3, 6, 1, 5])); // 6
