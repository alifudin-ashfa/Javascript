// cara untuk membuat object pada JavaScript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak 
// let mahasiswa1 = {
//   nama: 'Hana',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Anyeong ${this.nama}, Selamat makan!`);
//   }
// }


// let mahasiswa2 = {
//   nama: 'Nabila',
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Anyeong ${this.nama}, Selamat makan!`);
//   }
// }


// 2. Function Declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Anyeong ${this.nama}, selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Anyeong ${this.nama}, selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Anyeong ${this.nama}, selamat tidur`)
//   }
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;


//   return mahasiswa;
// }

// let hana = Mahasiswa('Hana', 10);
// let nabila = Mahasiswa('Nabila', 20);


// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Anyeong ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Anyeong ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Anyeong ${this.nama}, selamat tidur!`;
// }

// let hana = new Mahasiswa('Hana', 10);


// Versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Anyeong ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Anyeong ${this.nama}, selamat bermain!`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Anyeong ${this.nama}, selamat tidur!`;
//   }
// }

// let hana = new Mahasiswa('Hana', 10);
// let nabila = new Mahasiswa('Nabila', 20);


let angka = [3, 1, 2, ];
// console.log(angka);


// 3. Constructor Function 
// Keyword new

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;


//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Anyeong ${this.nama}, selamat makan!`);
//   }

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Anyeong ${this.nama}, selamat bermain`);
//   }
// }

// let hana = new Mahasiswa('Hana', 10);