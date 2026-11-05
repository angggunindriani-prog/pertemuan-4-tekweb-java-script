function hitungLuasJajarGenjang(alas, tinggi) {
    return alas * tinggi;
}

let luas1 = hitungLuasJajarGenjang(12, 5);
let hasil1 = "Luas jajar genjang dengan alas 12 dan tinggi 5 adalah: " + luas1;

document.getElementById("hasil").textContent = hasil1;
console.log(hasil1);

let luas2 = hitungLuasJajarGenjang(15, 8);
let hasil2 = "Luas jajar genjang dengan alas 15 dan tinggi 8 adalah: " + luas2;
document.getElementById("hasil2").textContent = hasil2;
console.log(hasil2);