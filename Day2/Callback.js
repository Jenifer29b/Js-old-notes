// function greet(callback) {
//     console.log("hello hii ")
//     callback()
// }

// function data() {
//     console.log("this is callback function")
// }

// greet(data)


function call(callback) {
    setTimeout(() => {
        console.log("hello hii")
    }, 1000);
    callback()
}

 function data() {
    console.log("this is callback function")
}

call(data)

function findnum(arr, callback) {
    arr.map((num) => {
        num % 2 == 0 ? callback(num) : "Number is not even"
    })
}

const callback = (num) => {
    console.log("the Number are :" , `${num}`)
}

findnum([1, 2, 3, 4, 5], callback)


function obj(callback) {
    let obj = {
        name: "sagar",
        age: 21
    }
    callback(obj)
}

let objdata = (obj) => {
    console.log(`the name is ${obj.name} and age is ${obj.age}`)
}
obj(objdata)

// function outerfunction() {
//     console.log("this is outer function")

//     function innerfunction() {
//         console.log("this is inner function")
//     }
//     return innerfunction

// }

// const myclosure = outerfunction()
// console.log(myclosure)

function outerfunction() {
    console.log("this is outer function");

    function innerfunction() {
        console.log("this is inner function");
    }
    return innerfunction; // Return the function reference, not the result of invoking it
}

const myclosure = outerfunction(); // outerfunction is called, and the reference to innerfunction is returned
myclosure(); // Logs: "this is inner function"
