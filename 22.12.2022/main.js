// //1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// const repeatString = (str, repeat, separator) => {
//     // let newStr = str
//     // for (let i = 1; i < repeat; i++) {
//     //     newStr = newStr + separator + str
//     // }
//     // console.log(newStr)
//
//     console.log((str + separator).repeat(repeat).slice(0, -1))
// }
// repeatString('yo', 3, ' ') // => "yo yo yo"
// repeatString('yo', 3, ',') // => "yo,yo,yo"
//
// //2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// const checkStart = (str, subStr) => {
//     const newStr = str.slice(0, subStr.length)
//     return newStr.toLowerCase() === subStr.toLowerCase()
//     console.log(newStr.toLowerCase() === subStr.toLowerCase())
// }
//
// checkStart('Incubator', 'inc') // => true
// checkStart('Incubator', 'yo') // => false
//
// //3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
// const truncateString = (str, amountOfCharacters) => {
//     console.log(str.slice(0, amountOfCharacters) + '...')
// }
//
// truncateString('Всем студентам инкубатора желаю удачи!', 10) // => "Всем студе..."
//
// //4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// const getMinLengthWord = (str) => typeof str === 'string' && str.length > 0
//     ? str.split(' ').reduce((acc, el) => acc.length <= el.length ? acc : el)
//     : null
//
// getMinLengthWord('Всем студентам инкубатора желаю удачи') // => "Всем"
// getMinLengthWord('') // => null
// getMinLengthWord(123) // => null
//
//
// //5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// const setUpperCase = (str) => str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
//
// setUpperCase('всем стУдентам инкуБатора Желаю удачИ') // => "Всем Студентам Инкубатора Желаю Удачи!"
//
// // !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!
//
// //6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// // символы подстроки содержаться в стороке - возвращает true, если нет -
// // возвращает false. Проверка проводится без учёта регистра и без учёта
// // повторяющихся символов.
// // * с учётом повторяющихся символов в подстроке
//
// // const isIncludes = (str, subStr) => {
// //     const arrayStr = str.toLowerCase().split('')
// //     const arraySubStr = subStr.toLowerCase().split('')
// //     // let indicator = true
// //
// //     for (let i = 0; i < subStr.length; i++) {
// //         if (arrayStr.includes(arraySubStr[i])) {
// //             // indicator = true
// //             arrayStr.splice(arrayStr.indexOf(arraySubStr[i]), 1)
// //         } else {
// //             return false
// //         }
// //     }
// //     return true
// // }
//
function isIncludes(str_1, str_2) {
    return [ ...str_1.toLowerCase() ].filter((i) => str_2.toLowerCase().includes(i)).length === str_2.length
}


console.log(isIncludes('Incubator', 'Cut')) //=> true
console.log(isIncludes('Incubator', 'table')) //=> false
console.log(isIncludes('Incubator', 'inbba')) //=> true //*false
console.log(isIncludes('Incubator', 'inba')) //=> true  //*true
console.log(isIncludes('Incubator', 'Incubatorrr')) //=> true //*false
//
//
//
//
//
//
//
//
//
//
