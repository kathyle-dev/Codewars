// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
//
// Description:
// Your task, is to create NxN multiplication table, of size provided in parameter.
//
// for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

//MY SOLUTION:
multiplicationTable = function(size) {
  let table = []
  for(var i =1; i<=size; i++){
    let temp =[]
    let count = 1
    while(count<=size){
      temp.push(i*count)
      count++
    }
    table.push(temp)
    count = 1
  }
  return table
}

//Best Practice
multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result
}
