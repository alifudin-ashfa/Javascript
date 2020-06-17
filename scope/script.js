// global scope / window scope
var a = 1;

function tes() {
    var b = 2;
    console.log(a);
}

tes();



var a = 1;

function tes(a) {
    console.log(a);
}

tes(2);