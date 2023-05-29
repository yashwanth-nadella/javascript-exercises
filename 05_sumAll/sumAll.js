const sumAll = function(a, b) {
    if(typeof(a)!="number" || typeof(b)!="number" || a<0 || b<0){
        return "ERROR";
    }
    if(a>b){
        [a,b] = [b,a]
    }
    let ans = 0;
    for(let i=a;i<=b;i++){
        ans = ans+i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
