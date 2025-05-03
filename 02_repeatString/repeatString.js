const repeatString = function(input, repeatCount) {
    if(repeatCount < 0)
    {
        return "ERROR";
    }
    
    let finalString = "";
    while(repeatCount > 0)
    {
        finalString += input;
        repeatCount--;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
