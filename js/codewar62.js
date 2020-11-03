// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript
//
// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//MY SOLUTION:
var moveZeros = function (arr) {
  let zeros = arr.filter(element => element === 0)
  let nonZeros = arr.filter(element => element !==0)
  return [...nonZeros, ...zeros]
}

//using push for faster solution:
var moveZeros = function (arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}
