function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let numbers = [11, 12, 14, 13, 15, 23];
let primenum = numbers.filter(isPrime);
console.log(primenum);

const a = "madam"
let b = a.split('').reverse().join('') 
if(a == b){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
console.log(palindrome("malayalam"))
console.log(palindrome("mama"))


let num1 = 3;
let c = "";

for (let i = 1; i <= 3; i++){
    let b = (num1 * i)
     c += b + " "
}
console.log(c.trim());


let result = (function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
})(5);
console.log(result);

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function (acc, curr) {
    return acc + curr;
});
console.log(sum);


let arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4];
let unique = arr1.filter((num, index) => {
    return arr1.indexOf(num) === index;
})
console.log(unique);

const result2 = [...new Set(arr1)]
console.log(result2);
