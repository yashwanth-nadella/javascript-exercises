const removeFromArray = function(inp, ...args) {
    let array = [];
    for(let i=0;i<inp.length;i++){
        if(!args.includes(inp[i])){
            array.push(inp[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
