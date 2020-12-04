/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */

const valueToHex = (val) => {
  var hex = val.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHexConversion = (...rgbValues) => {
    if (rgbValues.length == 0) throw new Error("Invalid Input");
    if (rgbValues.length > 3) throw new Error("Invalid Input");

    rgbValues.every((value)=>{
        if(Number.isInteger(value)) {
            return true;
        }else{
            throw new Error("Invalid Input");
        }
    })

    //all input value should be <= 255
    rgbValues.every((value)=>{
        if(value <=255 && value >= 0) {
            return true;
        }else{
            throw new Error("Invalid Input");
        }
    })


    return "#" + valueToHex(rgbValues[0]) + valueToHex(rgbValues[1]) + valueToHex(rgbValues[2])

};

module.exports = rgbToHexConversion;
