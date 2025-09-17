// async function myfunction() {
//      return ("Hello World");
// }
 
// myfunction().then((result) => {
//     console.log(result);
// })

const data = async function myfunction() {
    console.log("Hello");
  await  setTimeout(() => {
        console.log("Hello World");
    }, 1000);
}

data()

// const facts = async function myfunc() {
//     const data = await fetch("https://catfact.ninja/fact")
//     const response = await data.json()
//     return response
// }

// facts() 
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

async function myfun() {
    try {
    const data = await fetch("https://catfact.ninja/fact")
    const response = await data.json()
     console.log(response);
   } catch (error) {
        console.log(error); 
    }
}
myfun()

// facts1()
//     .then((result) => {
//         console.log(result);
//     })


const joke = async function jokes() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await response.json()
    return data
    } catch (error) {
        console.log(error)
    }
}
joke()
    .then((result) => {
        console.log(result);
    })
    

   const interval =  setInterval(() => {
        console.log("setinterval callled")
    }, 1000);
clearInterval()
    
setTimeout(() => {
    clearInterval(interval)
    console.log("interval cleared")
}, 5000);