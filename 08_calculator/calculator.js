const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let ans = 0;
  for(let i=0;i<arr.length;i++){
    ans = ans + arr[i];
  }
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  for(let i=0;i<arr.length;i++){
    ans = ans*arr[i];
  }
  return ans;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
  let ans = 1;
	for(let i = 1;i<=n;i++){
    ans = ans * i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
