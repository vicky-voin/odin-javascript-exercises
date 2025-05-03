const sumAll = function(begin, end) {
    if(begin < 0 || end < 0)
        return "ERROR";

    if(!Number.isInteger(begin) || !Number.isInteger(end))
        return "ERROR";

    let finalSum = 0;

    for(let i = Math.min(begin, end); i <= Math.max(begin, end); i++)
    {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
