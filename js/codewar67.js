// Your Order, Please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
//
// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//MY SOLUTION:
function order(words){
  let returnS = []
  let counter = 1
  if(words.length ==0){
    return ""
  }else{
    words = words.split(" ")
    while(counter<=words.length){
    words.map(word =>{
    if(word.includes(counter)){
      returnS.push(word)
      counter++
        }
      })
    }
    return returnS.join(" ")
  }

}

//Another Way:
// splits the string into indv words and THEN sorts each word by finding a numerical match of least to greatest num and then joins the array together into a string
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}
