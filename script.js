// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset to adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Select all sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    let scrollPos = window.scrollY + 150; // Adjust the offset for better accuracy

    sections.forEach(section => {
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (scrollPos >= offset && scrollPos < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
};

function goBack() {
    window.history.back();
}

// Select the image gallery
const gallery = document.querySelector('.image-gallery');
document.querySelector('.left-btn').addEventListener('click', scrollLeft);
document.querySelector('.right-btn').addEventListener('click', scrollRight);
// Function to scroll left
function scrollLeft() {
    gallery.scrollBy({
        top: 0,
        left: -300, // Adjust this value for the amount of scrolling
        behavior: 'smooth'
    });
}

// Function to scroll right
function scrollRight() {
    gallery.scrollBy({
        top: 0,
        left: 300, // Adjust this value for the amount of scrolling
        behavior: 'smooth'
    });
}

// Fungsi untuk reset form saat halaman dimuat ulang
window.onload = function() {
    document.getElementById('kritikSaranForm').reset(); 
  };

  // Fungsi untuk menangani pengiriman form
  const form = document.getElementById('kritikSaranForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Email berhasil dikirim!');
        form.reset(); // Reset form setelah dikirim
      } else {
        alert('Gagal mengirim email, coba lagi.');
      }
    }).catch(error => {
      alert('Terjadi kesalahan saat mengirim email.');
    });
  });
 