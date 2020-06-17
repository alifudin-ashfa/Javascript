// Manipulasi Array

// 1. Menambah isi array
var arr = ["a", 1, true];
console.log(arr);



var arr = [];
arr[0] = "Muhammad";
arr[1] = "Alifudin";
arr[2] = "Ashfa";

console.log(arr);



// 2. Menghapus isi array 
//   menggunakan cara manual
var arr = ["Muhammad", "Alifudin", "Ashfa"];
arr[1] = undefined;
console.log(arr);



// 3. Menampilkan isi Array
var arr = ["Muhammad", "Alifudin", "Ashfa"];

for (var i = 0; i < 3; i++) {
    console.log(arr[i]);
}


var arr = ["Muhammad", "Alifudin", "Ashfa"];

for (var i = 0; i < arr.length; i++) {
    console.log('Mahasiswa ke - ' + (i + 1) + ' : ' +
        arr[i]);
}


// Method
// length is untuk menggetahui berapa jumlah element pada array
// join is yang menggabungkan seluruh isi array dan meggubahnya jd sebuah string
// push(mendorong masuk) , pop(memecahkan atau menghilangkan) , shift(menggeluarkan atau menggeser keluar) , unshift (menggeser kedalam) menambah atau menghapus element array
// slice(menggiris array) , splice(menyambung atau menambal)
// forEach & map digunakkan untuk melakukan looping pada array
// filter & find untuk mencari element pada array



// Method pada array
// 1. join
var arr = ['Muhammad', 'Alifudin', 'Ashfa'];
console.log(arr.join());

// 2. push
var arr = ['Muhammad', 'Alifudin', 'Ashfa'];
arr.push('Nur', 'Afifah', 'AlAdawiyah');
console.log(arr.join());

// 3. pop menghilangkan element terakhir dari sebuah array
var arr = ['Muhammad', 'Alifudin', 'Ashfa'];
arr.pop();
arr.pop();
console.log(arr.join())

// 4. unshift bekerja untuk element pertama pada array
var arr = ['Muhammad', 'Alifudin', 'Ashfa'];
arr.unshift('Afifah');
console.log(arr.join());

// 5. shift menghilangkan element pertama
var arr = ['Muhammad', 'Alifudin', 'Ashfa'];
arr.shift();
console.log(arr.join());

// 6. splice untuk menyisipkan element array ditengah
// rumus
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, .....)
var arr = ['Muhammad', 'Alifudin', 'Ashfa'];
arr.splice(2, 0, 'Nur', 'Afifah', 'AlAdawiyah');
console.log(arr.join());

// 7. slice untuk menggiris sebuah array menjadi array yg baru 
// rumuss
// slice (awal , akhir);
var arr = ['Muhammad', 'Alifudin', 'Ashfa', 'Nur', 'Afifah', 'AlAdawiyah'];
var arr2 = arr.slice(1, 3);
console.log(arr.join());
console.log(arr2.join());

// 8. forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8, ];
var nama = ['Nur', 'Afifah', 'AlAdawiyah'];
// for( var i = 0; i < angka.length; i++ ) {
// console.log(angka[i]);
//}

// angka.forEach(function (e) {
//     console.log(e);
// });

nama.forEach(function (e, i) {
    console.log('Mahasiswa ke - ' + (i + 1) + ' adalah : ' + e);
})

// 9. map menggembalikan array
var angka = [1, 2, 5, 3, 6, 8, 4, ];
var angka2 = angka.map(function (e) {
    return e * 2;
});
console.log(angka2.join(' - '));

// 10. sort 
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4, ];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join(' - '));

// 11. filter mencari nilai pada array & menggembalikan dalam bentuk array (banyak nilai)
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4, ];
var angka2 = angka.filter(function (x) {
    return x > 5;
});
console.log(angka2.join(' - '));

// 12. find menggembalikan/menemukan satu nilai
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4, ];
var angka2 = angka.find(function (x) {
    return x > 5;
});
console.log(angka2);

// link method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array