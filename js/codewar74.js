// Exes and Ohs
// https://www.codewars.com/kata/583203e6eb35d7980400002a
//
// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
// Rules for a smiling face:
//
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
//
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;


//MY SOLUTION:
//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0

  if(arr.length == 0){
    return 0
  }

  arr.forEach(face=>{
    if(face.length == 2){
      if(face[0] == ":" || face[0] ==";"){
        if(face[1] == ")" || face[1] =="D"){
        count++
        }
      }
    }else{
      if(face[0] == ":" || face[0] ==";"){
        if(face[1] == "-" || face[1] =="~"){
          if(face[2] == ")" || face[2] =="D"){
          count++
          }
        }
      }
    }
  })

  return count
}

//creating an array of valid options
function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}
