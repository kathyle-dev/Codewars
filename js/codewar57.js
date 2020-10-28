// SORT THE ODD
// Description:
//
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

//My Solution
function sortArray(array) {
let oddArr= array.filter(num => num%2!=0).sort((a,b)=> a-b)
let index = 0
let index2 =0
if (array.length ==0){
  return array
}else{
  array.forEach(
    (num)=>{
      if(num%2!=0){
        array.splice(index,1,oddArr[index2])
        index++
        index2++
      }else{
      array.splice(index,1,num)
      index++
      }
    }
    )
  }
  return array
}

//Best Practice:
function sortArray(array) {
  // 0 is FALSE-Y so filtering by x%2 -- if you have a number aka ODD it will return
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  // returns the FIRST removed element of odd OR returns that even element
  return array.map((x) => x % 2 ? odd.shift() : x);
}
