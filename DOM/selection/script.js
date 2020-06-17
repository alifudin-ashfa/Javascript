// DOM Selection

// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "#ffaaa5";
judul.style.backgroundColor = "#dee3e2";
judul.innerHTML = "Hana Nabila";

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "#dee3e2";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";