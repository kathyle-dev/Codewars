// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001
//
// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//MY SOLUTION:
function spinWords(s){
  let newS =  s.split(" ")
              .map(word=> word.length >=5? word.split("").reverse().join("") : word)
  return newS.join(" ")

}

//Another Way:
// one line using checking for OPPOSITE first
function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}
