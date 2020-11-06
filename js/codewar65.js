// Number Zoo Patrol
// https://www.codewars.com/kata/5276c18121e20900c0000235
//
// Description:
// You're working in a number zoo, and it seems that one of the numbers has gone missing!
//
// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.
//
// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.
//
// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.
//
// Note: huge lists will be tested.
//
// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1

//MY SOLUTION:
function findNumber(array) {
  if(array.includes(1) == false){
    return 1
  }else{
  let target = array.length+1
   let sum = array.reduce((a,b)=>a+b)
   let theory = (target / 2) * (1 + target)
   if(sum == theory){
     return target+1
   }else{
     return theory-sum
   }
  }
}

//Another Way:
//just need the ONE number missing, so just go up the consecutive nums line until you reach the one missing
function findNumber(array) {
  for(var i=1;;i++) if(!array.includes(i)) return i
}
