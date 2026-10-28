// Latihan 1: Mengubah teks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
// Latihan 2: Event click
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent =
        "Tombol diklik pada " + new Date().toLocaleTimeString();
});
// Latihan 3: Mengubah class dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});
// Latihan 4: Penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
// Latihan 5: Validasi form pendaftaran
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent =
            "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent =
            "Validasi berhasil. Form siap diproses.";

        form.reset();
    }
});
// Latihan 6: To-do List
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });
    hapus.type = "button";
hapus.textContent = "Hapus";

hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas dihapus.";
});

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
});
// Mini Project: Pendaftaran Workshop
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const jumlahNamaWorkshop =
    document.getElementById("jumlahNamaWorkshop");

const sesiDipilih = document.getElementById("sesiDipilih");
const pesanWorkshop = document.getElementById("pesanWorkshop");

const ringkasanWorkshop =
    document.getElementById("ringkasanWorkshop");


// Fungsi 1: Penghitung karakter
namaWorkshop.addEventListener("input", function () {
    jumlahNamaWorkshop.textContent = namaWorkshop.value.length;
});


// Fungsi 2: Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        sesiDipilih.textContent =
            "Sesi yang dipilih: belum ada";
    } else {
        sesiDipilih.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});


// Fungsi 3: Validasi form
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanWorkshop.textContent =
            "Nama wajib diisi minimal 3 karakter.";
        ringkasanWorkshop.hidden = true;

    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent =
            "Masukkan email yang valid.";
        ringkasanWorkshop.hidden = true;

    } else if (sesi === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop.";
        ringkasanWorkshop.hidden = true;

    } else {
        pesanWorkshop.textContent =
            "Pendaftaran workshop berhasil divalidasi.";

        ringkasanWorkshop.textContent =
            "Nama: " + nama +
            " | Email: " + email +
            " | Sesi: " + sesi;

        ringkasanWorkshop.hidden = false;
    }
});


// Fungsi 4: Reset form
formWorkshop.addEventListener("reset", function () {
    pesanWorkshop.textContent = "";
    ringkasanWorkshop.hidden = true;
    ringkasanWorkshop.textContent = "";

    jumlahNamaWorkshop.textContent = "0";
    sesiDipilih.textContent =
        "Sesi yang dipilih: belum ada";
});