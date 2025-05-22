const removeFromArray = function(numbersArray, ...numsToRemove) {
    let modifiedArray = Array();
    for(let i = 0; i < numbersArray.length; i++)
    {
        let shouldRemove = false;

        for(const numToRemove of numsToRemove)
        {
            if(numToRemove === numbersArray[i])
                shouldRemove = true;
        }

        if(!shouldRemove)
        {
            modifiedArray.push(numbersArray[i]);
        }
    }

    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
