let total = 0;

// Impure function 
function addToTotal(amount) {
    total += amount;
    return total;
}

console.log(addToTotal(5))

// Refactoring an impure function to a pure function
// Pure function (creates a new total)
function addToTotal1(total, amount) {
    return total + amount;
}


console.log(addToTotal1(5, 20))

// let userage = 24;

// function celebrateBirthday() {
//     userage += 1;
//     return userage;
// }

function nextBirthday(age) {
    return age + 1;
}
console.log(nextBirthday(24))


function calculateSquare(num) {
    return (num * num);
}
console.log(calculateSquare(100))

function isEven(num) {
    return ((num % 2 == 0) ? true : false);
}
console.log(isEven(5));
console.log(isEven(10));

function calculateDiscount(originalPrice, discountPercentage) {
    function calculateDiscountAmount(price, discount) {
        return price * discount; // Calculate discount amount (inner function)
    }

    const discountAmount = calculateDiscountAmount(originalPrice, discountPercentage / 100);
    const finalPrice = originalPrice - discountAmount;
    return finalPrice;
}

const discountedPrice = calculateDiscount(100, 20);
console.log(discountedPrice); // Output: 80

function calculateTax(product) {
    let price = product.price;
    let taxrate = product.taxrate;

    
    function calculateTaxAmount(price, taxrate) {
        return price * taxrate; 
    }

    const taxamount = calculateTaxAmount(price, taxrate )
    const finalprice = price + taxamount;

    return finalprice;

}

const finalprice = calculateTax({ price: 10.00 , taxrate: 0.07 })
console.log(finalprice)


function formatNumber(num) {
    
    function formatWithTwoDecimal() {
        return num.toFixed(2);
    }
    return formatWithTwoDecimal()
}

const res = formatNumber(10.5687) // res is function
console.log(res)


function calculateArea(length , width) {
    return (length * width);
}

const area = calculateArea(10, 20)
console.log(area)



const area1 = function (length , width) {
    return (length * width);

}
console.log(area1(10, 20))

console.log(hello)
var hello = "hello"