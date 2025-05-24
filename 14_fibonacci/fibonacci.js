const fibonacci = function(n) {
    let preceeding = [1,1];

    if(n < 3)
    {
        if(n == 0)
            return 0;
        else if (n<0)
            return "OOPS";
        else
            return preceeding[n-1];
    }

    let fibonacci = 0;

    for(let i = 3; i <= n; i++)
    {
        fibonacci = preceeding[0] + preceeding[1];
        preceeding.shift();
        preceeding.push(fibonacci);
    }

    return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
