class obj {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and I'm from ${this.place}.`);
    }
    greet1() {
        console.log(`hello gud mrng this is ${this.name}`)
    }
}

const obj1 = new obj('John', 30, 'New York');

obj1.greet()
obj1.greet1()


// let a = userInput[""];
// let b = a.split("").map(Number).reduce((a, b) => a*a + b*b, 0);
// console.log(b)


let map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set('place', 'New York');

console.log(map)
console.log(map.get('name'))
console.log(`this is ${map.get('name')}`)
console.log(map.delete('name'))
console.log(map)

for(let value of map) {
    console.log("value", value)
}

const arrmap = Array.from(map)
console.log(arrmap)

let set = new Set();

set.add("apple");
set.add("banana");
set.add("banana")

console.log(set)
console.log(set.has("banana"))
const arr = Array.from(set)
console.log(arr)

for(let value of set) {
    console.log("value" , value)
}