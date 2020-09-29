// Covfefe
//
// Your are given a string. You must replace the word(s) coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
//
// For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

Mine:
function covfefe(str){
  let str1 = str.slice()
  let regex = /coverage/gi
  let newStr= str.replace(regex, "covfefe")
  if(str1 == newStr){
    return str1 + " covfefe"
  }else{
    return newStr
  }
}

Best Solution:
function covfefe(str) {
  const res = str.replace(/coverage/g, "covfefe")
  return res === str ? str + " covfefe" : res
}
