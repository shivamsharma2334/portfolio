// Typed.js initialization
var typed = new Typed('#element', {
    strings: ['& Efficient C++ Programmer', 'Python Developer', 'Web Enthusiast'],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Contact form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

 window.onload = function() {
            setTimeout(function() {
                document.querySelector('.loading-screen').style.display = 'none';
                document.querySelector('.display-none').style.display = 'block';
            }, 6000); // Redirect after 4 seconds
        }
