function showMessage(message) {
    console.log(message)
}


let name = 'Viktor'

function sayHi(text = "hi") {
    console.log(`${text} ${name}`)
}

sayHi()
sayHi('Привет')

function UserName(Name = "User") {
    return (
        `hi ${Name}`
    )
}

console.log(UserName('Viktor'))

function Degree(MainNumber, degree = 1) {
    return (
        MainNumber ** degree
    )
}

console.log(Degree(5, 25))

function zxc(array = [36, 24]) {

    let middleNumber = 0

    for (let i = 1; i < array.length + 1; i++) {
        middleNumber = middleNumber + array[array.length - i]
    }

    return middleNumber / array.length
}

console.log(zxc([21, 3]))

const sayHello = function (name) {
    console.log(`hello ${name}`)
}


const funcExample = function (callback) {
    for (let i = 0; i < 5000000000; i++) {
    }
    callback("zxc")
}
funcExample(sayHello)

let sum = (name) => `name = ${name}`
console.log(sum("Viktor"))
let mono = a => a * 2
console.log(mono(2))

let alert = () => "zxc"
console.log(alert())
let repeat = (name, n) => {
    for (let i = 0; i < n; i++) {
        console.log(name)
    }
}
repeat("Viktor", 5)
let word = (bukva) => {
    if (bukva === "a" || bukva === "e" || bukva === "y" || bukva === "u" || bukva === "o" || bukva === "i" || bukva === "q") {
        console.log(true)
    } else {
        console.log(false)
    }
}
word('b')
let palindrom = (word) => {
    if (word.length % 2 === 0) {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[0] === word[word.length - 1] || word[0 + i] === word[word.length - 1 - i]) {
                console.log(true)
            } else {
                console.log(false)
            }
        }
    } else {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[0] === word[word.length - 1] || word[0 + i] === word[word.length - 1 - i]) {
                console.log(true)
            } else {
                console.log(false)
            }
        }
    }
}
palindrom("zxccxz")