// String matchup
// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4
//
// Description:
//
// Given two arrays of strings, return the number of times each string of the second array appears in the first array.
// Example
//
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
//
// How many times do the elements in array2 appear in array1?
//
//     'abc' appears twice in the first array (2)
//     'cde' appears only once (1)
//     'uap' does not appear in the first array (0)
//
// Therefore, solve(array1, array2) = [2, 1, 0]



//MY SOLUTION:
function solve(a,b){
  let length = []
  let index = 0
  while(index<b.length){
  length.push(a.filter(word => word == b[index]).length)
    index++
  }
  return length
}

//One Liner
// will look through the SECOND array using map to return the new array and inside map, want to filter through A to check the A array to find all instances of B and return that length
const solve = (a,b) => b.map(x => a.filter(n => n === x).length)
