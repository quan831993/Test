// Bài 1
// let str = "Hello";
// let newstr = "";
// for (let  i= str.length - 1; i >= 0; i--) {
//     newstr += str[i];


// }
// console.log(newstr);
//................................................................

//Bài 2
// let str = "this is a test";
// let strArr = str.split(" ");
// let newStr = strArr.map((str) => {
//     return str[0].toUpperCase() + str.substring(1)
// })
// newStr = newStr.join(' ');
// console.log(newStr);
//..................................................................



//Bài 3
// let arr=[1,2,3,3,4,5,4,4,4,5,5];
// let newArr = []
//   for ( i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i])
//     }
//   }
// console.log(newArr);
//.................................................................



// Bài 4
// let arr = [5, 2, 3, 4, 1];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         let t = arr[i];
//         arr[i] = arr[j];
//         arr[j] = t;
//       }
//     }
//   }console.log(arr);
//..................................................................


//Bài 5
// let rikkei = ["Cuong", "Hai", "Linh"];
// let a = confirm("Bạn có muốn thêm nhân viên ko?");
// if (true) {
//     a = prompt("Hãy nhập tên nhân viên mới");
//     rikkei.push(a);
// }console.log(rikkei);

// let b = prompt("Bạn muốn tìm nhân viên ở vị trí nào?");
// console.log(rikkei[b]);

// let c1 = prompt("Bạn muốn thay đổi nhân viên ở vị trí nào?");
// let c2 = prompt("Nhập tên nhân viên thay thế");
// rikkei[c1] = c2;
// console.log(rikkei);

// let d = prompt("Bạn muốn xóa nhân viên nào?");
// rikkei.splice(d, 1);
// console.log(rikkei);
//..................................................................

// Bài 6
// let date = +prompt("Hãy nhập ngày");
// if (Number.isInteger(date) === false && date <= 0 || date > 31) {
//     alert("Ngày bạn nhập không tồn tại");
// }
// let month = +prompt("Hãy nhập tháng");
// if (Number.isInteger(month) === false && month <= 0 || month > 12) {
//     alert("Tháng bạn nhập không tồn tại");
// }
// let year = +prompt("Hãy nhập năm");
// if (Number.isInteger(year) === false && year <= 0) {
//     alert("Năm bạn nhập không tồn tại");
// }
// if ((month === 4 || month === 6 || month === 9 || month === 11) && date === 31) {
//     alert(`Ngày ${date} tháng ${month} năm ${year} không tồn tại`);
// } else if (month === 2 && (year % 4 === 0 || year % 400 === 0) && date <= 29) {
//     alert(`Ngày ${date} tháng ${month} năm ${year} tồn tại`);
// } else if (month === 2 && date > 28) {
//     alert(`Ngày ${date} tháng ${month} năm ${year} không tồn tại`);
// } else {
//     alert(`Ngày ${date} tháng ${month} năm ${year} tồn tại`);
// }





