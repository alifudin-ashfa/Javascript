// var x = 10;
// console.log("Hello Kim Ji Wook");
// console.log("isi dari variable x adalah" + x);

// alert("Hello Kim Ji Wook!");
// var nama = prompt("masukan nama:");
// alert(nama);
// var tes = confirm("kamu yakin???");
// if (tes === true) {
//   alert("user menekan ok");
// } else {
//   alert("user menekan CANCEL");
// }

// alert("Welcome kim Ji Wook..");
// var lagi = true;

// while (lagi === true) {
//   var nama = prompt("masukan nama:");
//   alert("halo " + nama);

//   lagi = confirm("coba lagi?");
// }

// alert("Thank You :)");

// alert("Kim Ji Wook");
// for (var i = 0; i < 5; i++) {
//   alert("hello Kim Ji Wook");
// }

// alert("Finish");

// // pengulangan While
// var Kambing = true;
// while (Kambing) {
//   console.log('Hello Kim Ji Wook');
//   Kambing = confirm('lagi?');
// }

// var wife = 1;
// while (wife <= 100) {
//   console.log('Hello Kim Ji wook' + wife);
//   wife++;
// }

// var jmlAngkot = 10;
// var noAngkot = 1;

// while (noAngkot <= jmlAngkot) {
//   console.log("Angkot No." + noAngkot + " beroperasi dengan baik.");
//   noAngkot++;
// }

// var nilaiAwal = 1; (sebelum mulai loop, tentukan nilai awal)
// nilaiAwal <= 10 ? (cek kondisi apakah bernilai true atau false)
// console.log('... (lakukan hal ini jika kondisi bernilai true)
// nilaiAwal++; (increment nilai awal di akhir tiap pengulangan)

// //for
// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log('Hello Kim Ji Wook ' + nilaiAwal + 'x');
// }

//exp :
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + 'beroperasi dengan baik.');

  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + 'sedang tidak beroperasi.');
}