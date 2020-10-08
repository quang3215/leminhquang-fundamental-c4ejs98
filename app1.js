//cách 1
let a = 5;
let b = 6;
[a, b] = [b, a];
console.log(a, b);
// cách 2
let a =5;
let b= 6;
b = [a, a = b][0];
console.log(a, b);