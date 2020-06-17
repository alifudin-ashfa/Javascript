// for (var i = 0; i < 5; i++) {
//     console.log('*');
// }

var s = '';
for (var i = 0; i < 10; i++) {
    s += '*';
}
console.log(s);


//vertikal
var s = '';
for (var i = 0; i < 10; i++) {
    s += '*';
    s += '\n';
}
console.log(s);


var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 5; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);


var s = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);


var s = '';
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);