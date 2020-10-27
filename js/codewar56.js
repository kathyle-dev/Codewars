// Description:
//
// You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.

//My Solution:
function select (arrSearch, arrTake){
  let thirdChar = arrSearch.sort().reverse()[2].charAt(2)
  let filteredArr = arrTake.filter((element)=> element.charAt(0) == thirdChar)
  if(filteredArr == false){
     return "Nothing here"
     }else{
      return filteredArr[0]
  }
}

//Best Practice:
function select (arrSearch, arrTake){
  let L = arrSearch.sort().reverse()[2][2]
  return arrTake.filter(w=>w[0]==L)[0]||"Nothing here"
}
