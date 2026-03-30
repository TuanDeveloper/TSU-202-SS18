// Global
let a = 10;
let b = 20;

// Khai báo hàm,
// tham số là biến được truyền vào dùng để lưu trữ giá trị tạm thời khi khai báo hàm
//Function declaration
function sumNumber(a, b) {
    // code here
    let result = a + b;
    return result;
    console.log(result + 5);
}
console.log(sumNumber(20, 20));


//Function expression

// const sum = function (a, b) {
//     let result = a + b;
//     return result;
// }
// console.log(sum(35, 20));

// Arrow function
const sum = (a, b) => a + b;
console.log(sum(35, 20));

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let num = Number(prompt('Nhập 1 số nguyên :'));
alert('Kết quả : ' + isEven(num));

