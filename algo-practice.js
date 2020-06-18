//Linear search
const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i
        }
        return -1
    }
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = linearSearch(numbers, 12)
verify(result)

const verify = i => {
    if (i !== -1) {
        console.log(`Target found at index ${i}`) 
    } else {
        console.log('Target not found')
    }
}

//Binary search
const binarySearch = (arr, target) => {
    let first = 0
    let last = arr.length - 1

    while (first <= last) {
        let midpoint = Math.floor((first + last) / 2)
         
        if (list[midpoint] == target) {
            return midpoint
        } else if (list[midpoint] < target) {
            let first = midpoint + 1
        } else {
            let last = midpoint - 1
        }
    }
    return - 1
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = binarySearch(numbers, 12)
verify(result)

const verify = i => {
    if (i !== -1) {
        console.log(`Target found at index ${i}`) 
    } else {
        console.log('Target not found')
    }
}

//Recursive binary search
const recursiveSearch = (list, target, start, end) => {
    let start = 0
    let end = list.length - 1
  
    start > end && -1
    

    if (list.length == 0) {
        return -1
    } else {
        let midpoint = Math.floor((start + end ) / 2)
        
        if (list[midpoint] == target) {
            return midpoint
        } else {
            if (list[midpoint] > target) {
                return recursiveSearch(list, target, start, midpoint - 1)
            } else if (list[midpoint] < target) {
                return recursiveSearch(list, target, midpoint + 1, end)
            }
        }
    }
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = recursiveSearch(numbers, 12)
verify(result)

const verify = i => {
    if (i !== -1) {
        console.log(`Target found at index ${i}`) 
    } else {
        console.log('Target not found')
    }
}


//Other example
const binarySearch = (array, target, min, max) => {

    let tArray = array.slice()
    
	if (min === undefined) min = 0
	if (max === undefined) max = array.length - 1

    let guess = Math.floor(((max - min) / 2) + min)
    
	if (max <= min && tArray[guess] !== target) return null
	else if (tArray[guess] === target) return guess
	else if (tArray[guess] < target) return binarySearch(tArray, target, guess + 1, max)
    else return binarySearch(tArray, target, min, guess - 1)
}

//Data structures
//Array: ["one","two","three","four"]
/*############################# 
Operations on data structures
Access and read values
Search for values
Insert values .unshift*start* .push*end*
Delete value .shift*start* .pop*end*
################################
*/



//Binary search Tree
/* 
###########################
Difference between depth first search and breadth first search
    depth first search - branch by branch
    breadth first search - level by level
###########################
Traversal methods
Preorder: node -> left -> right
Inorder: left -> node -> right
PostOrder: left -> right -> node
############################
*/

//Setup
function Tree() {
    this.root = null
}

Tree.prototype.addNode = function(n) {
    if (this.root = null) {
        this.root = n
    }
}

function Node (val) {
    this.value = val
    this.left = null
    this.right = null
}

/*######################## Algo Exercises ##############*/

//Palindrome exercise
const isPalindrome = (str) => {

    str = str.toLowerCase()

    return str === str.split('').reverse().join('')

    let reverseStr = str
        .split('')
        .reverse()
        .join('')

   return reverseStr === str ? "It is a palindrome" : "It is not a palindrome"
}

//Reverse Int
const reverseInt = num => {
    let reversedNum = num.toString().split('').reverse().join('')
    reversedNum= Number(reversedNum)
    
    num < 0 && reversedNum * -1
    
    return reversedNum
}

//MaxChar
const MaxChar = str => {
    let charCountObj = {}
    let maxChar = ""
    let maxCount = 0

    //Fill out char count object
    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        charCountObj[char] = charCountObj[char] + 1 || 1

        if (charCountObj[char] > maxCount) {
            maxChar = char
            maxCount = charCountObj[char]
        }
    }

    return maxChar
}

//FizzBuzz
const FizzBuzz = (num) => {
    num % 3 === 0 && "Fizz"
    num % 5 === 0 && "Buzz"
    num % 3 && num % 5 === 0 ? "FizzBuzz" : "Not divisible by 3 or 5"
}

//String Pattern Search
const stringSearch = (text, pattern) => {
    let count = 0

    for (let i = 0; i < text.length; i++) {
        for(let j = 0; j < pattern.length; j++) {
            const patternChar = pattern[j]
            if (patternChar !== text[i + j]) {
                break
            }

            if (j === pattern.length - 1) {
                count++
            }
        }
    }
    return count
}


//Sorting .sort((a, b) => a - b) (merged or tim sort)
/*Sorting types:
    Bubble sort
    Selection sort
    Insertion sort
    Quick sort
    Merge sort
    Radix sort
    Bucket sort
    Tim sort
*/


//Swap helper function
const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//Bubble sort: works by having sorted data accumulate at end of array
const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i ++) {
        for(let j =0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

//Selection sort: works by having sorted data accumulate at start of array
const selectionSort = arr => {

}