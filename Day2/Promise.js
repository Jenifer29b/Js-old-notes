let timer = 0;
let interval = setInterval(() => {
    timer++ 
    console.log(`timer : ${timer}`)
    if (timer === 5) {
        console.log("timer stoped at", { timer })
        clearInterval(interval)
    }
}, 1000);

let timer2 = 0; 
let time = setTimeout(() => {
    timer2++
    console.log(`timer2 : ${timer2}`)
    
}, 1000);

function myfunction() {
    let x = 10;
    function innerfunction() {
        x++
        x++
        console.log(x)
    }
    return innerfunction
}

const clossure = myfunction();
clossure()