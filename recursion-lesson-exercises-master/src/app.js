/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(number, currentSum = 0) {
  if ( number == 0 ) { return currentSum }
  if ( currentSum == 0 ) {
      currentSum += (number+1) * number
  }
  else {
      currentSum *= number
  }
  
  return findFactorial(number, currentSum)

}

//Exercise 2
const reverseString = function(string,newString = '') {
  if (string.length == 0) {return newString}

  newString += string[string.length-1]
  string = string.substring(0,string.length-1)

  return reverseString(string,newString)

}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2) {
  if ( arr1.length == 0 ) {
    return
  }
  arr2.push(arr1[0])
  arr1.shift()
  swap(arr1,arr2)

}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }