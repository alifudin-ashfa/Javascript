// ! DOM Manipulation Node
// ? document.createElement()
// ? document.createTextNode()
// ? node.appendChild() {simpan ke akhir dari sebuah elemen peren}
// ? node.insertBefore()
// ? ParentNode.removeChild()
// ? ParentNode.replaceChild()


// buat elemen baru
// * node.appendChild()
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A 
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// * node.insertBefore()
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);