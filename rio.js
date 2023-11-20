// dany.js

// Mendapatkan referensi ke elemen formulir dan daftar grosir
var grosirForm = document.getElementById('grosirForm');
var daftarGrosir = document.getElementById('daftarGrosir');

// Menangani penambahan grosir
function tambahGrosir() {
  // Mendapatkan nilai dari input
  var namaBarang = document.getElementById('namaBarang').value;
  var harga = document.getElementById('harga').value;
  var stok = document.getElementById('stok').value;

  // Validasi input
  if (!namaBarang || !harga || !stok) {
    alert('Mohon isi semua kolom!');
    return;
  }

  // Membuat elemen baris baru untuk ditambahkan ke daftar grosir
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${namaBarang}</td>
    <td>${harga}</td>
    <td>${stok}</td>
    <td><button onclick="hapusBarang(this)">Hapus</button></td>
  `;

  // Menambahkan baris ke daftar grosir
  daftarGrosir.appendChild(newRow);

  // Mengosongkan formulir setelah ditambahkan
  grosirForm.reset();
}

// Menangani penghapusan barang dari daftar grosir
function hapusBarang(button) {
  var row = button.parentNode.parentNode;
  daftarGrosir.removeChild(row);
}

// Menangani proses checkout
function checkout() {
  var jumlahBarang = daftarGrosir.children.length;

  // Menampilkan pesan catatan tergantung pada jumlah barang
  var note = document.querySelector('.note');
  note.textContent = jumlahBarang > 0 ? `Total barang di keranjang: ${jumlahBarang}` : 'Keranjang kosong';
}
