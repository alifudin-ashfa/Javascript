// exp:
// menggunakan deklarasi
// function jumlahDuaBilangan(a, b) {
//     var total;
//     total = a + b;

//     return total;
// }

// menggunakan ekspresi
// var jumlahDuaBilangan = function (a, b) {
//     var total;
//     total = a + b;

//     return total;
// }



// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);



// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }

// // console.log(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(10, 15));



// refactoring
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8, 3));