//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
let colorCopy = faveColors.slice()

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push('blue')

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]
let middleNums = []

//CODE HERE
// middleNums.push(`${numbers.splice(1 , 3)}`)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
let answers = []
// CODE HERE

for(i = 0; i < bigOrSmallArray.length; i++)
  if(bigOrSmallArray[i] > 100){
answers.push(bigOrSmallArray[i])
 }                                      

console.log(`'bigOrSmallArray:' ${bigOrSmallArray}`)
console.log(`'Answers:'${answers}`)

//thought process(cuz I'm struggling): run through the arr w/ the for loop and use line 43 to push whatever value i is into the answers array under the condition placed forth in line 42