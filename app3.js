// bài tập về nhà 
// ex1
Kiểu Boolean trong JavaScript mô tả một trong hai giá trị: true hoặc false 
let state = true ;
let single = false ;
console.log(5 == "5");
console.log(5 !== "5");
console.log(5 < 6);
// ex2
Lưu đồ là một loại sơ đồ biểu diễn một thuật toán hoặc một quá trình
// ex3
cho phép chúng ta in các câu lệnh khác nhau tùy thuộc vào kết quả biểu thức (TRUE, FALSE)
let c = true;
while(c){
let a = prompt("nhập số");
a = parseInt(a);
let kq = 10 ;
      if(a > kq){
        console.log("lớn hơn đáp án");
      }
     else if(a < kq){
        console.log("bé hơn đáp án");
      }
      else if (a = kq){
          console.log("chiến thắng");
          c = false;
      }
 }
// ex4 
let a = prompt(" chiều cao (m):");
a = parseInt(a);
let b = prompt(" cân nặng (kg):");
b = parseInt(b);
let q = a * a;
let c = b / q;
     console.log(c);
if(c < 16){
    console.log("gầy");
   }
else if(16 < c < 18){
     console.log("thiếu cân");
}   
else if(18.5 < a < 25){
     console.log("bình thường");
}
else if(25 < a < 30 ){
     console.log("thừa cân");
}
else if(a > 30){
     console.log("béo phì");
}

// ex6
let n = Number(prompt("nhập số: "));
let s = 1;
for(let i = 1; i <= n; i++){
    s = s*i;
}
console.log(s);
//ex1
let a = prompt(" nhập :");
a = parseInt(a);
let s = 0;
for(i=1; i<=a; i=i+2){
    s=s+1
}
console.log(s);
