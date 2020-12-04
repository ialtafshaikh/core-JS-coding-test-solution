const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str =   ,1, right
  // output mrando

  let validDirections = ["right", "left"];
  if (!(str)) throw new Error("Invalid Input");
  if (!(validDirections.includes(direction))) throw new Error("Invalid Direction");
  
  if(direction == "left"){
    return str.substr(n) + str.substr(0,n);
  }

  if(direction == "right"){
    return str.substr(-n) + str.substr(0,str.length-n)
  }

};

module.exports = rotateString;
