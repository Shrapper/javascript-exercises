const reverseString = function(input_to_be_reversed) {

let string = ''
for (let i = 0; i < input_to_be_reversed.length; i++){
    
        string += input_to_be_reversed.charAt(input_to_be_reversed.length - i -1) 
    // let secondLastLetter = input_to_be_reversed.charAt(input_to_be_reversed.length-2)
    // let thirdLastLetter = input_to_be_reversed.charAt(input_to_be_reversed.length-3)
    // let fourthLastLetter = input_to_be_reversed.charAt(input_to_be_reversed.length-4)
    // let fifthLastLetter = input_to_be_reversed.charAt(input_to_be_reversed.length-5)
    // string += lastLetter + secondLastLetter + thirdLastLetter + fourthLastLetter + fifthLastLetter

}
    return string
};

// Do not edit below this line
module.exports = reverseString;



// Function indentify end letter of
//  string and create new
// string that adds each new letter