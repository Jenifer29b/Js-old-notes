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

//Spread operator 
// The spread operator in JavaScript, also denoted by three dots(...),
//     allows you to expand or "spread" an iterable(like an array or an object)
//      into its individual elements or properties.
const arr1 = [1, 2, 3, 4, 5,]
const arr2 = [6, 7, ...arr1]
console.group(arr2);

//Rest operator
// The rest operator in JavaScript, also denoted by three dots(...),
//     allows you to collect multiple elements or properties into a single array or object.
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


const arr = [1, 2, 3, 4, 5, 6, 7]
const [a, b, ...c] = arr
console.log(a,b,c)






