const palindromes = function (word) {
    word = word.toLowerCase();
    let array = word.split("");
    let new_array = [];
    array.forEach(element => {
        if(element.charCodeAt(0) > 96 && element.charCodeAt(0) <123){
            new_array.push(element);
        }
    });
    new_array = new_array.toString();
    let rev = new_array.split('').reverse().join('')
    if(new_array==rev){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
