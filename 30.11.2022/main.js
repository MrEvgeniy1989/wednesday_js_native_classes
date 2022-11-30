const todoListId_1 =  "qw34-jg87"// v1()
const todoListId_2 =  "ou09-hf23"//v1()

const todoLists = [
    {
        id: todoListId_1,
        title: "What to learn",
        filter: "all",
    },
    {   id: todoListId_2,
        title: "What to buy",
        filter: "all",
    },
]

const getObjectKey = () => "username"

const tasks = {
    [todoListId_1]: [   // "qw34-jg87" => "todoListId_1" => ??????!!!!!!!
        {name: "HTML", isDone: true},
        {name: "CSS", isDone: true}
    ],
    [todoListId_2]: [    // "ou09-hf23"
        {name: "Beer", isDone: false},
        {name: "Fish", isDone: false}
    ],
    [10+20]: [],   //"30"
    [getObjectKey()]: [],
    "user name": []
}

console.log(tasks["user name"])
console.log(tasks[todoListId_1])

//reduce

const numbers = [1,2,3,4,5,6]
console.log(numbers.reduce((acc, el) => {
    return acc + el
}, 0))

// 1, 2 => 3
// 3, 3 => 6
// 6, 4 => 10
// 10, 5 => 15
// 15, 6 => 21
// => 21

console.log(numbers.reduce((acc, el)=> acc > el ? acc : el))

let students = [
    {   id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el)=> acc + el.scores, 0))

console.log(students.reduce((acc, el) => {
    if(el.scores >= 100){
        acc.push(el)
    }
    return acc
}, []))
console.log(students.reduce((acc,el) => {
    const copySt = {...el}
    copySt.scores = copySt.scores + 10
    acc.push(copySt)
    return acc
}, []))

console.log(students.reduce((acc, el) => {
    if(el.name === "Nick"){
        const copy = {...el, isMarried: true}
        acc.push(copy)
        return acc
    } else {
        acc.push(el)
        return acc
    }
}, []))

const stObjects = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    "2": {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    //........
}

console.log(students.reduce((acc, el)=> {
    acc[el.id]= {...el}
    delete acc[el.id].id
    return acc
}, {}))


const selfMadeReduce = (array, func, startAccValue) => {
    let acc = startAccValue
    for (let i = 0; i < array.length; i++) {
        acc = func(acc, array[i])
    }
    return acc
}

let studentsNew = [
    {   id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

console.log(selfMadeReduce(numbers, (acc, el) => acc + el, 0))
console.log(selfMadeReduce(students, (acc, el)=> {
    acc[el.id]= {...el}
    delete acc[el.id].id
    return acc
}, {}))
console.log(students)

const selfReduce = (array, func, initial) => {

    let acc = initial ? initial : array[0]
    let arr = initial ? array : array.slice(1)

    for(let i = 0;i <arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}

console.log(selfReduce(numbers, (acc, el)=> acc + el))



