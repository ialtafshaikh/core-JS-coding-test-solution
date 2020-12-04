/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

function countOccurrence(str, letter) {
    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    let match = str.match(re);

    if(match != null){
      return match.length;
    }else{
       return 0;
    }
}

const frequencyCounter = (str) => {
   if (!(str)) throw new Error("Invalid Input");
   if (!(typeof(str) == typeof(''))) throw new Error("Invalid Input");

   const frequencyCount = {};
   const letter = ["a","e","i","o","u"];

   letter.forEach((letter) => {
      frequencyCount[letter] = countOccurrence(str, letter)
   });

   return frequencyCount;
};

module.exports = frequencyCounter;
