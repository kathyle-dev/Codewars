// Description:
// Task
//
// Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
// Notes
//
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.
// Example
//
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

//MY SOLULTION:
function leastLarger(a,i) {
  let largerA=[]
  for(var z =0; z< a.length; z++){
    if(a[z]>a[i]){
      largerA.push(a[z])
    }
  }
  if(largerA.length ==0){
    return -1
  }else{
  largerA.sort((a,b)=>a-b)
    return a.indexOf(largerA[0])
  }
}

//BEST PRACTICE:
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))

// 1.filters to see which elements are greater than the parameter
// 2. grabs the least of those numbers via Math.min
// 3. then grabs the index of that element via index of 
