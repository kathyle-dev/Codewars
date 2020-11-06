// Remove consecutive duplicate words
// https://www.codewars.com/kata/515e271a311df0350d00000f/
//
//Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



//MY SOLUTION:
function squareSum(numbers){
  return numbers.map(num=> Math.pow(num,2)).reduce((a,c)=> a+c, 0)
}

//WITHOUT reduce:
function squareSum(numbers){
    let sum = 0
    for (var i =0; i<numbers.length; i++){
        sum += numbers[i] * numbers[i]
    }
    return sum
}
