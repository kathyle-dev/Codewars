// Remove consecutive duplicate words
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
//
// Description:
//
// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:
//
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"


//MY SOLUTION:
const removeConsecutiveDuplicates = function remove(s){
     let returnS= []
     let splitS= s.split(" ")
     let index =0;
     for (var i=0; i< splitS.length; i++){
       if(returnS.length ==0){
         returnS.push(splitS[i])
        }else if(returnS[index]== splitS[i]){
          continue
        }else{
          returnS.push(splitS[i])
          index++
        }
     }
    return returnS.join(" ")
}

//Best Pracitice
// FILTER returns element if element is not the same as the previous one
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ")
