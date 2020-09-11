// Write a function that takes an array/list of numbers and returns a number.
//
// See the examples and try to guess the pattern:
//
// EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
// EvenOdd([1,2,3]) => 5
// EvenOdd([0,2,3]) => 3
// EvenOdd([1,0,3]) => 3
// EvenOdd([3,2])   => 6
//

function EvenOdd(arr){
  let num = arr[0];
 for(var i = 0; i<(arr.length -1); i++){
   if((i%2==0) || (i ==0)){
     num = (num*arr[i+1])
   }else if(i%2!=0){
     num = (num+arr[i+1])
     console.log(num)
   }
 }
   return num
}
