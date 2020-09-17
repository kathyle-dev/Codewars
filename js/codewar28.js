// Description:
//
// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.
//
// Assume: 0 <= n < 2147483647
// Examples
//
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
  let num = n.toString();
  if (num < 1000) {
    return num;
  }
  else if (num >= 1000 && num < 1000000) {
    return num.slice(0, -3) + "," + num.slice(-3);
  }
  else if (num >= 1000000 && num < 1000000000) {
    return num.slice(0, -6) + "," + num.slice(-6, -3) + "," + num.slice(-3);
  }
  else if (num >= 1000000000 && num< 1000000000000) {
    return num.slice(0, -9) + "," + num.slice(-9, -6) + "," + num.slice(-6,-3) + "," + num.slice(-3);
  }

}
