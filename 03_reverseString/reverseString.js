const reverseString = function(inp) {
    ans = ""
    for(let i=inp.length-1;i>=0;i--){
        ans = ans+inp[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
