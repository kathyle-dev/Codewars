// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b
//
// Description:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//MY SOLUTION:
function domainName(url){
   if (url.match("//") && url.match("www")){
      return url.split("//")[1].split(".")[1]
    }else if(url.match("www")){
       return url.split(".")[1]
    }else if(url.match("//")){
        return url.split("//")[1].split(".")[0]
    }
     else{
       return url.split(".")[0]
      }
}

//Using Replace:
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
