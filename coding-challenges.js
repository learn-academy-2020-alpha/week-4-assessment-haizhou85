// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

const removeAndShuffle = (arr) =>{
    //remove the first element of the array
    arr.shift()
    //when array is empty return "The array is empty."
    if (arr.length == 0){
        return "The array is empty."
    }else{
        //shuffle the rest of the array, iterates from the last element
        for(let i = arr.length - 1; i > 0; i--){
            //find a random index before and includes the element
            let j = Math.floor(Math.random()*(i+1))
            //swap the two elements
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
}

// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

var collections = ["purple", "blue", "green", "yellow", "pink"]
removeAndShuffle(collections)
console.log(collections)
removeAndShuffle(collections)
console.log(collections)
removeAndShuffle(collections)
console.log(collections)



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
const cubedSum= (nums) =>{
    //create a varible to store the result
    let sum = 0
    //add each cubed number to the sum
    nums.map(value => {
        sum += value**3
    })
    return sum
}


var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
console.log(cubedSum(cubeAndSum1))
console.log(cubedSum(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

const minAndMax = (nums) =>{
    //create two variables to store max and min, starting from the first element 
    let min = nums[0]
    let max = nums[0]
    //loop through the array, if found a number is less than the current min, set min to that number, and if the number is larger than current max, set max to that number 
    for(let i = 0; i < nums.length; i++){
        min = (min > nums[i])?nums[i]:min
        max = (max < nums[i])?nums[i]:max
    }
    return [min, max]
}


var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]
console.log(minAndMax(nums1))
console.log(minAndMax(nums2))


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
const capitalize = (string) =>{
    //create a variable to store the result
    let finalString = ""
    //loop through the string, set every other letter capitalized
    for(let i = 0; i < string.length; i++){
        finalString += (i%2 == 0)?string[i]:string[i].toUpperCase()
    }
    return finalString
}


var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
console.log(capitalize(testString1))
console.log(capitalize(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

const noDupe = (arr1, arr2) =>{
    //combine 2 arrays, use set to remove duplicates
    let setArr = new Set([...arr1, ...arr2])
    //transfer set to array
    return [...setArr]
    
}

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
console.log(noDupe(arr1, arr2))