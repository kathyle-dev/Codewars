// SIMPLE PIG LATIN:
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript/all/best_practice
//
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//MY SOLUTION:
function pigIt(str){
  return str
    .split(' ')
    .map(word =>
      word.match(/[a-zA-Z]/)
      ? (word.slice(1) + word[0] + 'ay')
      : word)
    .join(' ')
}

//Using Replace:
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
