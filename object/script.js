// Object "Kumpulan nilai, [nilainya tidak memiliki index] yang memiliki nama"
// Object adalaah array, yang lebih sakti

// exp
// var mahasiswi = {
//     nama: 'Hana Nabila',
//     lulus: true,
//     IPSemester: [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif: function () {
//         var total = 0;
//         var ips = this.IPSemester;
//         for (var i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }
//         return total / ips.length;
//     }
// }
// mahasiswi.IPKumulatif();

// membuat object dengan literal
var mhs = {
    nama: "Hana Nabila",
    umur: 20,
    ips: [3.00, 2.50, 3.20],
    alamat: {
        jalan: "Jl. Bangau 2 No. 13",
        kota: "Bekasi",
        provinsi: "Jawa Barat"
    }
};




// membuat object

// cara 1 (function declaration)
function anyeong() {
    console.log('Anyeong');
}
anyeong();

// cara 2 (object literal)
var obj = {};
obj.anyeong = function () {
    console.log('Anyeong');
}
obj.anyeong();

// cara 3 (constructor)
function Anyeong() {
    console.log('Anyeong');
}
new Anyeong();