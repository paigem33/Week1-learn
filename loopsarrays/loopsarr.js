//write a function that takes in an array and returns a new array with all numbers *3
//declare an array variable
//declare function
//declare new array var
//loop to multiply each
//save each new value into a new array
//return new array
//call i
// console.log("New Array * 3");
// var arr1 = [3, 9, 15, 4, 10]
// function mult3(arr) {
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]*3)
//     }
//     return newArr
// }
// console.log(mult3(arr1));
// write a function to out put only odd numbers in new array from a given array
//declare variable arr2
//declare function oddsOnly
//declare newArr
//create loop to uses conditional if statement to push only odd numbers into new array
//return newarray
//call function in log
// console.log("New Array Only Odd");
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// function oddsOnly(arr) {
//     var newArr = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(oddsOnly(arr2));

//declare string variable
//declare function capString with one arg, string
//capitalize each letter so the output will be all capStringreturn new, capitalized Array
//return all-caps Array
//log the function with string variable
// console.log("New String Capitalized");
// var sent = "Hello There"
// function capString(string) {
//     let newString = string.toUpperCase()
//     return newString
// }
// console.log(capString(sent));

//declare variable Array
//declare function with array argument
//create new array
//create loop to test conditions of the if statement
//return new Array
//log it
// console.log("Letters only");
// var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]
// function lettersOnly(arr) {
//     var newArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]==="string"){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(lettersOnly(combo_arr));

//declare Array
//declare function max with argument of an Array
//declare new variable for max = arr[i]
//create for loop to iterate over each index of array, replacing max if greater than current max
//return max
//log the function, calling highestNumber Array
// console.log("Highest Number");
// var highestNumber = [1,4,2]
// function greaterNum(arr) {
//     let max = arr[0]
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(greaterNum(highestNumber));

//declare Array
//declare function min with argument of an Array
//declare new variable for min = arr[1]
//create for loop to iterate over each index of array, replacing max if greater than current min
//return min
//log the function, calling lowestNumber Array
// console.log("LowestNumber");
// var lowestNumber = [5,4,2,19]
// function lowNumber(arr) {
//     let min=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return min
// }
// console.log(lowNumber(lowestNumber));

//declare array of numbers
//declare a function called add, taking an arg or an Array
//decalre sum variable to 0 as a placeholder
//update the sum variable from index values
//return the sum of the index values
//log the function, calling the sum Array
// console.log("Sum");
// var sum = [5, 2, 3]
// function add(arr) {
//     var newSum = 0
//     for(i = 0; i < arr.length; i++) {
//         newSum = arr[i] + newSum
//     }
//     return newSum
// }
// console.log(add(sum));

//declare array of numbers
//declare meanNum function argument of array
//declare var newMean
//create loop to add previous index to each other
// divide by array length then return newMean
// var mean=[1,2,3]
// function meanNum(arr) {
//     let newMean=0
//     for(let i=0;i<arr.length;i++){
//         newMean=newMean+arr[i]
//     }
//     return newMean/arr.length
// }
// console.log(meanNum(mean));

//declare an array of numbers
//declare a function highestIndex with arg of Array
//declare temp var of highIndex
//create a loop to iterate over each highestIndex
//return highIndex
//log function, calling Array
// console.log("Index of Highest Number");
// var indexHighestNumber = [1,1,2,9,11]
// function highestIndex(arr) {
//     let highNum = arr[0]
//     let highInd = 0
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > highNum) {
//             highNum = arr[i]
//             highInd = i
//         }
//     }
//     return highInd
// }
// console.log(highestIndex(indexHighestNumber));

//declare function 'game' allowing for an argument of user input
//create local variable to hold random number, assigning a random number with math.random
//conditionals - each returning different response based on if user guessed correctly, guessed too high, guessed too low (if, else if, else if, else)
//log the function call with user input as the argument
// function game(userInput) {
//     var winningNum = Math.floor(Math.random() * 100 )
//     console.log(winningNum);
//     for(let i = 0; i < 7; i++) {
//         var userInput = prompt('pick a number')
//         if (i >= 6 && userInput !== winningNum) {
//             alert `Out of tries! Refresh to start a new game.`
//             break
//         } else if (userInput > winningNum) {
//             alert `Too high - try again..`
//         } else if (userInput < winningNum) {
//             alert `Too low - try again..`
//         } else if (userInput === winningNum) {
//             alert `You win!`
//             break
//         } else {
//             alert `What even is that - try again..`
//         }
//     }
// }
// console.log(game());


// //declare an string variable
// var str = "damon nomad"
// //create a function that accepts a string as the argument
// function palindrome(string) {
//     //function checks to see if the string is the same read forward or back
//     //turn string into an array
//     //make a new array with the order changed
//     //turns back into string
//     let checkString = string.split("").reverse("").join("")
//     if (checkString === string) {
//         //returns yes if palindrome and no if not the same forward and back
//         //call the function with log
//         return `Yes, ${string} is a palindrome`
//     } else {
//         return `No, ${string} is not a palindrome`
//     }
// }

// console.log(palindrome(str));


//create a function that takes a sting in as the argument
//create a varible and see if it includes a vowel and if so remove it
//function returns a new string with the vowels removed

var str = "javascript is awesome"
noVowels = (string) => {
    var vowels = /[aeiou]/
    if(string.includes(vowels)){
        string.remove(vowels)
    }
}
