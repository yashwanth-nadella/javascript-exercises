const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    let array = [0,1];
    for(let i=1;i<n;i++){
        let len = array.length;
        array.push(array[len-2]+array[len-1]);
    }
    return array[array.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
