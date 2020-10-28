// Remove consecutive duplicate words
//
// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:
//
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"


// My Solution:
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

//Using .replace:
const removeConsecutiveDuplicates = str => str.replace(/\b(\w+)(?:\s\1)+\b/g, '$1')

//one liner:
//return an array where the element is NOT equal to the element of the index before it
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ")
