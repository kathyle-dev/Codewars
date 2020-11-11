// Remove anchor from URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/
//
// Description:
//
// Description:
//
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
//
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
//
// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')



//MY SOLUTION:
// to catch urls without #, I used a ?
function removeUrlAnchor(url){
  return url.match('#') ? url.slice(0,url.indexOf('#')) : url;
}

//USING SPLIT
function removeUrlAnchor(url){
  return url.split('#')[0];
}

//Alphabet symmetry
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
//
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
//
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
//
// See test cases for more examples.
//
// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

//MY SOLUTION
function solve(arr){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let returnArr = []
  arr = arr.map(word=> word.toLowerCase())

  arr.forEach( word=>{
    let counter = 0;
    for(var i = 0; i<word.length; i++){
      if(word[i] == alphabet[i]){
      counter++
      }
     }
    returnArr.push(counter)
  })
  return returnArr
};

//Other Solutions
// returns a new array where it goes through each array element (WORD), then splits each word by character
  function solve(arr){
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
}
// using ASCII
function solve(arr){
  return arr.map(s=> [...s.toUpperCase()].filter((item,index)=>item.charCodeAt() - 65 === index).length)
};
