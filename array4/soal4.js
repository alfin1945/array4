var nilaisantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];

var total = 0;
var banyakNilai = nilaisantri.length;

for (o = 0; o < banyakNilai; o++) {
    console.log(o);
    total += nilaisantri[o];
}

document.write(total / banyakNilai)