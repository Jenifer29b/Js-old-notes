// Returns a shallow copy of a portion of an array into a new array without modifying the original array. 
// It takes two parameters: the start index and the end index 

const arr = [1, 2, 3, 4, 5]
const modifyarr = arr.slice(0, 3)
console.log(modifyarr)


// Changes the contents of an array by removing or replacing existing elements and / or adding new elements. 
// It takes at least two parameters: the start index and the number of items to remove.
const arr1 = [1, 2, 3, 4, 5]
const modifyarr1 = arr1.splice(1 , 2, 'a','b')
console.log(modifyarr1)
console.log(arr1)


const array = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2]


const removedup = [...new Set(array)]
console.log(removedup)

const newarr = [];

array.map((arr, index) => {
    if(array.indexOf(arr) == index){
        newarr.push(arr)
    }
}) 
console.log(newarr)
