// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a
//
// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//MY SOLUTION:
function XO(str) {
    const countX = str.split("").filter(letter => letter == "x" || letter == "X").length
    const countO = str.split("").filter(letter => letter == "o" || letter == "O").length

    return countX == countO? true : false

}

//shorter code
// each element will contain ONE of the x or o
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//using replace +  regex

// if LENGTHS after replaced is still the same --> ie I took 2 X's and 2 O's away, the length is still the same
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}
