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