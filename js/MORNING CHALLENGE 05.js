// Consecutive items
// https://www.codewars.com/kata/5f6d533e1475f30001e47514/solutions/javascript/me/best_practice
//
// Description:
//
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
//
// It is guaranteed that a and b are both present in arr.


//MY SOLUTION:
function consecutive(arr, a, b) {
  return arr[arr.indexOf(a)-1] == b || arr[arr.indexOf(a)+1] == b ? true : false
}

//USING Math abs
function consecutive(arr, a, b) {
  // comparsion is true or false, so if position is different by 1, 1 == 1 then true
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}
