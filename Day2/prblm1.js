


const obj = {
    name: "santhosh",
    age: 22,
    city: "chennai"
}
console.log(JSON.stringify(obj))
console.log(JSON.parse(JSON.stringify(obj)))

for(let key in obj) {
    console.log(key, obj[key])
}


const { name, age, city } = obj
console.log(name, age, city)
console.log(`heloo this is ${name} .. I am ${age} years old and i live in ${city}`);


// The this keyword in JavaScript refers to the object from which it was called.
//  Its value depends on the context in which the function is called.
let obj2 = {
    'place': 'chennai',
    greet : function() {
        console.log(`this is ${this.place}`)
    }
}
obj2.greet()



const data = async function () {
    console.log("start")
    await setTimeout(() => {
        console.log("hwllo async func")
    }, 1000);
    console.log("stop")
}

data()



function call(callback) {
    
    setTimeout(() => {
        console.log("hello ")
    }, 3000);
    console.log("callback start")

    callback()
}

function end() {
    console.log(" callback end")
}
call(end)