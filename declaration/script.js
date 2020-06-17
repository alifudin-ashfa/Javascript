// function declaration
// function tampilpesan(nama) {
//     alert('Hi !!!' + nama);
// }

// tampilpesan(' Ashfa');

// -lebih fleksibel (dapat ditulis dimanapun):
//   karena konsep hoisting
// exp
// tampilpesan(' Ashfa');

// function tampilpesan(nama) {
//     alert('Hi !!!' + nama);
// }

// -mudah dipahami untuk pemula



// function expression
var tampilpesan = function (nama) {
    alert('halo' + nama);
}

tampilpesan(' Ashfa');

// -Harus didefinisikan terlebih dahulu sebelum dipanggil
// -Lebih powerfull :
//   sebagai closure
//   sebagai argumen untuk function lain 
//   IIFE (Immediately Invoked Function Expression)