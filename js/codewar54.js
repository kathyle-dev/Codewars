// Description:
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.

String.prototype.toAlternatingCase = function () {
  let newStr= ""
  for(var i=0; i<this.length; i++){
    if(this.charAt(i).toUpperCase() === this.charAt(i)){
      newStr += this.charAt(i).toLowerCase()
    }else{
      newStr += this.charAt(i).toUpperCase()
    }
  }
  return newStr
}
