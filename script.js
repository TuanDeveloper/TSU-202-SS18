let numbers = [4, 2, 6, 12, 8];
// Truyen thong
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);


// forEach Duyệt qua từng phân tử của mảng
// numbers.forEach(function (element, index) {
//     console.log(element * 2);
// })


// map Duyệt qua mảng và xử lý các phần tử và trả về mảng mới dựa trên các phần tử đó
// let newArray = numbers.map(function(element, index) {
//     return element - 1;
// })

// console.log(newArray);

//filter lọc qua mảng cũ và lấy những phần tử thỏa mãn điều kiện thêm vào mảng mới
// let newArray = numbers.filter(function(element, index) {
//     return element % 2 == 0;
// })

// let check = numbers.some(function (element, index) {
//     return element % 2 == 0;
// })

// let check2 = numbers.every(function (element) {
//     return element % 2 == 0;
// })

// console.log(check2);


//reduce Dùng để tính giá trị tích lũy theo từng vòng lặp của mảng
let result = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(result);





