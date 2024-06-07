// script.js
// Fungsi untuk melakukan scroll ke bagian yang ditentukan dengan efek smooth
function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Menambahkan event listener untuk setiap link di navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default dari tautan
        const targetId = this.getAttribute('href'); // Dapatkan ID tujuan dari atribut href
        scrollToSection(targetId); // Scroll ke bagian tujuan dengan efek smooth
    });
});
