const repeatString = function(inp, n) {
    if(n<0){
        return "ERROR";
    }
    let ans = "";
    for(let i=0;i<n;i++){
        ans = ans+inp;
    }
    // console.log(ans);
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
