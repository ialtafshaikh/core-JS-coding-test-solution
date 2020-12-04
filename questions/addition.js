/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  if (numbers.length == 0) throw new Error("Invalid Input");
  
  let isAllNum = numbers.every((num)=>{
    return Number.isInteger(num);
  })

  if(isAllNum){
    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });

    return sum;
  }else{
    throw new Error("Invalid Input");
  }

};

module.exports = addition;
