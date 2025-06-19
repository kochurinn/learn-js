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



// 7. Дан массив с массивами строк matrix и минимальное значение min.
// Определите, есть ли в этом массиве хотя бы одна строка длины не меньшее min.

const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

function searchValue(matrix, min) {
    return matrix.some(arr =>
        arr.some(str => str.length >= min)
    );
}

console.log(searchValue(matrix, 6)); // true
console.log(searchValue(matrix, 11)); // true
console.log(searchValue(matrix, 200)); // false



// 8. В формате массива пар задается плейлист. Пара состоит из песни и ее продолжительности.
// Необходимо вернуть продолжительность всего плейлиста в формате HH:MM:SS.
// Если плейлист длится меньше часа, ответ должен быть в формате MM:SS. Если хотя бы 1 час, то HH:MM:SS.

const innuendo = [
  ["Innuendo", "6:31"],
  ["I'm Going Slightly Mad", "4:22"],
  ["Headlong", "4:38"],
  ["I Can't Live with You", "4:33"],
  ["Don't Try So Hard", "3:39"],
  ["Ride the Wild Wind", "4:42"],
  ["All God's People", "4:21"],
  ["These Are the Days of Our Lives", "4:15"],
  ["Delilah", "3:35"],
  ["The Hitman", "4:56"],
  ["Bijou", "3:36"],
  ["The Show Must Go On", "4:35"],
];

const blackMirrorSeason4 = [
  ["USS Callister", "01:16:00"],
  ["Arkangel", "52:00"],
  ["Crocodile", "59:00"],
  ["Hang the DJ", "51:00"],
  ["Metalhead", "41:00"],
  ["Black Museum", "01:09:00"],
];

const playlistDuration = (playlist) => {
    const arrTime = playlist.map(elem => {
        return elem[1].split(':')
    })

    let arrTimeSum = [0,0,0]

    for (let i = 0; i < arrTime.length; i++) {
        if (arrTime[i].length === 2) {
            arrTimeSum[1] += +arrTime[i][0]
            arrTimeSum[2] += +arrTime[i][1]
        }
        if (arrTime[i].length === 3) {
            arrTimeSum[0] += +arrTime[i][0]
            arrTimeSum[1] += +arrTime[i][1]
            arrTimeSum[2] += +arrTime[i][2]
        }
    }

    arrTimeSum[1] += Math.floor(arrTimeSum[2] / 60)
    if (arrTimeSum[1] > 59) {
        arrTimeSum[0] += Math.floor(arrTimeSum[1] / 60)
    }
    arrTimeSum[1] = arrTimeSum[1] % 60
    arrTimeSum[2] = arrTimeSum[2] % 60

    if (arrTimeSum[0]) {
        return `${
            10 > arrTimeSum[0] > 0 ? `0${arrTimeSum[0]}` : `${arrTimeSum[0]}`
            }:${10 > arrTimeSum[1] > 0 ? `0${arrTimeSum[1]}` : `${arrTimeSum[1]}`}:${ 
            10 > arrTimeSum[2] > 0 ? `0${arrTimeSum[2]}` : `${arrTimeSum[2]}`}`
    } else {
        return `${10 > arrTimeSum[1] > 0 ? `0${arrTimeSum[1]}` : `${arrTimeSum[1]}`}:${
            10 > arrTimeSum[2] > 0 ? `0${arrTimeSum[2]}` : `${arrTimeSum[2]}`}`
    }
}

console.log(playlistDuration(innuendo)); // "53:43"
console.log(playlistDuration(blackMirrorSeason4)); // "05:48:00"



// 9. Как работают кнопки лайка и дислайка на ютубе? Изначально ни одна из них не выбрана. Если вы нажимаете на кнопку лайк, то она становится активной. Если вы нажмете на нее еще раз, то она отожмется и активной кнопки не будет.
// Если изначально нажать на лайк, а потом на дислайк, то активной будет только кнопка дислайка. Кнопка лайка будет неактивной, т.к. активной может быть только одна кнопка.
// Определите, какая кнопка будет выбрана после серии нажатий. Считаем, что изначально ни одна кнопка не выбрана.

function likeOrDislike(buttons) {
    if (buttons.length === 0) return 'Nothing'
    if (buttons.length === 1) return buttons[0]

    let count = 1
    for (let i = 1; i < buttons.length; i++) {
        if (buttons[i - 1] === buttons[i]) {
            count++
        }
        if (buttons[i - 1] !== buttons[i]) {
            count = 1
        }
    }

    return count % 2 === 0 ? 'Nothing' : buttons.at(-1)
}

console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"



// 10. Дан массив чисел. Необходимо найти индекс элемента такого, что сумма чисел слева от него равна сумме чисел справа от него. Если такого элемента нет, вернуть -1.

function pivotIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        let toggle = 0

        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                toggle = 1
                continue
            }

            if (toggle === 0) {
                leftSum += arr[j]
            } else {
                rightSum += arr[j]
            }
        }

        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
}