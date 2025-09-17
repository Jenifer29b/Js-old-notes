const fruits = ["Apple", "Banana", "Grapes", "Cherry", "Mango" , "Banana"]
fruits.forEach((fruit) => {
    console.log(fruit)
})

// fruits.shift("apple")
// console.log(fruits)

fruits.map((fruit, index) => {
    console.log(fruit, index)
})

let numbers = [1, 2, 3, 4, 5, 6, 5, 2, 6, 10]
let newnum = [];

numbers.map((number ,index) => {
    if (numbers.indexOf(number) === index) {
        newnum.push(number)
        console.log(newnum) 
    }
})


let numbers1 = [1, 2, 3, 4, 5, 6, 5, 2, 6, 10]
let newnum1 = [];

numbers1.filter((number) => {
    if(number % 2 == 0){
        newnum1.push(number)
        console.log(newnum1)
    }
})


const num = numbers1.reduce((prev,curr) => {
    return(prev + curr)
})
console.log(num)


let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(Object.keys(obj))
console.log(obj.name)
console.log(`this is ${obj.name}`)

obj.place = "USA"
console.log(obj)
delete obj.place
console.log(obj)


 const name = "John"
const greet = function() {
    console.log(`hello ${this.name}`)
}



// let index = new Set(n)
// console.log(index)

// Destructiong of both Array and Objects
const array = [1, 2, 3, 4, 5, 6, 5, 2, 6, 10]
const [one, two] = array;
console.log(one, two)

const obj1 = {
    name: "John",
    age: 30,
    city: "New York"
}

const { age, city } = obj1;
console.log(age, city)

// Template Literals
const name1 = "John"
const age1 = 30
const city1 = "New York"

const temp = `Hello I am  ${name1}, I am ${age1} years old and live in ${city1} city`
console.log(temp)

// Spread Operator







