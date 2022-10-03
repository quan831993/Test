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
var leapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let date = +prompt("Hãy nhập ngày");
while (Number.isInteger(date) === false && date <= 0 || date > 31) {
    date = +prompt(`Ngày ${date} không tồn tại`);
}
let month = +prompt("Hãy nhập tháng");
while (Number.isInteger(month) === false && month <= 0 || month > 12) {
    month = +prompt(`Tháng ${month} không tồn tại`);
}
let year = +prompt("Hãy nhập năm");
while (Number.isInteger(year) === false && year <= 0) {
    year = +prompt(`Năm ${year} không tồn tại`);
}
let arr1 = [1, 3, 5, 7, 8, 10];
let arr2 = [4, 6, 9, 11];
if (arr1.indexOf(month) !== -1) {
    if (date < 31) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày ${date + 1} tháng ${month} năm ${year}`);
    } else if (date == 31) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày 1 tháng ${month + 1} năm ${year}`);
    }
} if (arr2.indexOf(month) !== -1) {
    if (date < 30) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày ${date + 1} tháng ${month} năm ${year}`);
    } else {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày 1 tháng ${month + 1} năm ${year}`);
    }
} if (month == 12) {
    if (date < 31) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày ${date + 1} tháng ${month} năm ${year}`);
    } else if (date == 31) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày 1 tháng 1 năm ${year + 1}`);
    }
} if (month == 2 && leapYear(year) == false) {
    if (date < 28) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày ${date + 1} tháng ${month} năm ${year}`);
    } else if (date == 28) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày 1 tháng ${month + 1} năm ${year}`);
    }else{
        alert("Ngày không tồn tại");
    }

} if (month == 2 && leapYear(year) == true) {
    if (date < 29) {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày ${date + 1} tháng ${month} năm ${year}`);
    } else if( date == 29)  {
        alert(`Ngày ${date} tháng ${month} năm ${year} hợp lệ`);
        alert(`Ngày tiếp theo là ngày 1 tháng ${month + 1} năm ${year}`);
    }else {
        alert("Ngày không tồn tại");
    }

}
