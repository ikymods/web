/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})

  // Fungsi untuk menampilkan pop-up
  function showPopup(link, event) {
    // Mencegah tautan diikuti
    event.preventDefault();

    // Mendapatkan elemen popup
    var popup = document.getElementById('popup');

    // Memasukkan link ke dalam elemen popup
    document.getElementById('popupLink').innerText = link;

    // Menampilkan pop-up
    popup.style.display = 'block';
  }

  // Fungsi untuk menyalin link
  function copyLink() {
    // Mendapatkan elemen link
    var linkElement = document.getElementById('popupLink');

    // Membuat textarea sementara untuk menyalin teks
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = linkElement.innerText;

    // Menambahkan textarea ke dalam dokumen
    document.body.appendChild(tempTextarea);

    // Memilih teks dalam textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Untuk mendukung semua browser

    // Menyalin teks ke clipboard
    document.execCommand('copy');

    // Menghapus textarea sementara
    document.body.removeChild(tempTextarea);

    // Menampilkan pesan teks tercopi
    alert('Link telah disalin!');
  }

  // Fungsi untuk menyembunyikan pop-up
  function hidePopup() {
    // Mendapatkan elemen popup
    var popup = document.getElementById('popup');

    // Menyembunyikan pop-up
    popup.style.display = 'none';
  }