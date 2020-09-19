// Description:
//
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
//
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.
//
// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
//
// Examples
//
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
//


function getIssuer(number) {
  let n = number.toString();
  const AMEX = n.slice(0,2)
  const Discover = n.slice(0,4)
  const Mastercard = n.slice(0,2)
  const VISA = n.slice(0,1)
  if(AMEX == 34 || AMEX == 37 && n.length == 15){
    return "AMEX"
  }else if(Discover == 6011 && n.length ==16){
    return "Discover"
  }else if(Mastercard == 51 || Mastercard == 52 || Mastercard == 53 || Mastercard == 54 || Mastercard == 55 && n.length == 16){
    return "Mastercard"
  } else if (VISA == 4 && (n.length == 13 || n.length == 16)){
    return "VISA"
  }else{
    return "Unknown"
  }
}
