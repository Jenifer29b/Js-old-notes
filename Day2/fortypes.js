let a = 2;
for(let i = 0; i < a; i++){
    console.log("Hello World");
}

let b = [1, 2, 3, 44, 5,]
b.forEach(element => {
    if(element % 2 == 0){
        console.log(element);
    }
});

for (const element of b) {
    console.log(element);
}

let obj = {
    name: "sagar",
    age: 21,
    city: "pune"
}

for (const key in obj) {
    const element = obj[key]
    
    
    console.log(`${key} : ${element}`);
    console.log(element)
}

let str = ["apple", "Mango", "Banana"]
str.forEach((element) => {
    console.log(element);
})