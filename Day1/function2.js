 
//  Anonyums Function
function add(a, b) {
    return (a + b)
}
console.log(add(10, 20))

//  Reduce Method in js and Named function
const findLargest = (numbers) => {
    // return Math.max(...numbers)
    return numbers.reduce((prev, curr) => {
            console.log(prev, curr)
            return (prev > curr) ? prev : curr
            
    })
}
const result = findLargest([3, 8, 1, 10, 4])
console.log(result)

//    Function Constructor by using new Keyword
const calculateCube = new Function ("num1" , "num2" , "num3" ,"return(num1 * num2 * num3);")
const result1 = calculateCube(3, 3, 3)
    console.log(result1);
    
     // Conditional operator
function checkNumber(number) {
    return (number > 0) ? `${number} is positive` : (number <0) ? `${number} is Negative` : `${number} is Zero` 
}

console.log(checkNumber(0))

// Arrow function using hrs

const newdate = new Date().getHours();
console.log(newdate);



const getGreeting = (hour) => {

    if(hour < 12) {
        return "Good Morning"
    } else if (hour < 18) {
        return "Good Afternoon"
    } else {
        return "Good Evening"
    }
}

console.log(getGreeting(21))

const getLetterGrade = (userScore) => {
    if(userScore >= 90) {
        return "A Grade"
    } else if (userScore >= 80) {
        return "B Grade"
    } else if (userScore >= 70) {
        return "C Grade"
    } else if (userScore >= 60) {
        return "D Grade"
    } else {
        return "F Grade"
    }
}

console.log(getLetterGrade(90))


function findnum(callback) {
    num = [1, 2, 3, 4, 56]

    num.map((numb) => {
        numb % 2 == 0 ? callback(numb) : "Number is not even"
    })
    
    
}
function callback(num) {
    console.log("the Number are :" , `${num}`)
}

findnum(callback)

console.log(typeof (NaN))

