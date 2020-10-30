// ARRAY COMBINATIONS:
// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/solutions/javascript
//
// Description:
//
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
//
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possiblites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
//
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
//
// See test cases for more examples.


// My Solution:
function solve(arr) {
  let numOfUnique = 1
  arr.forEach(array => numOfUnique *= [...new Set(array)].length)
  return numOfUnique
};

//one liner:
//get the siz (length) of each SET of sub array, then reduce these numbers starting at 1
const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 )