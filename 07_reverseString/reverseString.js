const reverseString = function(input) {
    let reversedString = "";
    for(let i = input.length-1; i >=0; i--)
    {
        reversedString += input.at(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
