// Complete the function that returns the color of the given square on a normal, 8x8 chess board:
//
// chessboard
//
// Examples
// "a", 8  ==>  "white"
// "b", 2  ==>  "black"
// "f", 5  ==>  "white"

function mineColor(file, rank) {
  if((file == "a" || file == "c"|| file == "e" || file =="g") && (rank%2==0)){
    return "white"
  }else if ((file == "a" || file == "c"|| file == "e" || file =="g") && (rank%2!=0)){
    return "black"
  }else if ((file == "b" || file =="d" || file =="f" || file =="h") && (rank%2==0)){
    return "black"
  }else if((file == "b" || file =="d" || file =="f" || file =="h") && (rank%2!=0)){
        return "white"
   }else{
    return "black"
  }
}
