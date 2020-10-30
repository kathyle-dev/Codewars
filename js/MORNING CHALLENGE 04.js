// FIX STRING CASE:
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/javascript
//
//
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//
// For example:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//
// More examples in test cases. Good luck!

//MY SOLUTION:
function solve(s){
    let lower =0
    let upper =0
    Array.from(s).forEach(letter => letter.toUpperCase() === letter? upper++ : lower++)
    if(lower == upper || lower>upper){
      return s.toLowerCase()
    }else{
      return s.toUpperCase()
    }
}

//USING replace
// replaces uppcase with "" (deleting), gets the length, if it is LESS THAN HALF, lowercase must be the "minority" therefore the string must return as UPPERCASE else, it's either equal or lowercase is majoirty so the string must return LOWERCASE
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
