console.log("JavaScript berhasil terhubung!");

document.querySelectorAll("[data-operator]").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        hitung(tombol.dataset.operator);
    });
});

function hitung(operator) {
    const inputAngka1 = document.getElementById("angka1");
    const inputAngka2 = document.getElementById("angka2");
    const tampilanHasil = document.getElementById("hasil");

    let angka1 = inputAngka1.value;
    let angka2 = inputAngka2.value;
    let hasil;

    if (angka1 === "" || angka2 === "") {
        tampilanHasil.textContent = "Masukkan kedua angka!";
        return;
    }

    angka1 = Number(angka1);
    angka2 = Number(angka2);

    if (operator === "+") {
        hasil = angka1 + angka2;
    } else if (operator === "-") {
        hasil = angka1 - angka2;
    } else if (operator === "*") {
        hasil = angka1 * angka2;
    } else if (operator === "/") {
        if (angka2 === 0) {
            tampilanHasil.textContent = "Tidak bisa dibagi 0!";
            return;
        }
        hasil = angka1 / angka2;
    }

    tampilanHasil.textContent = hasil;
}
