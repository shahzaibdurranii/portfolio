let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if (top >= offset && top < (offset + height)) {
            navLinks.forEach(link => {
                link.classList.remove('active'); 
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active'); 
                }
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
};

function showModal(message) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalAlert = document.getElementById('modal-alert');
    const alertMessage = document.getElementById('alert-message');
    
    alertMessage.textContent = message;
    
    modalOverlay.classList.add('show');
    modalAlert.classList.add('show');
}

document.getElementById('alert-button').addEventListener('click', () => {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalAlert = document.getElementById('modal-alert');
    
    modalOverlay.classList.remove('show');
    modalAlert.classList.remove('show');
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formData = new FormData(form);
    try {
        const response = await fetch('https://formspree.io/f/manywjln', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showModal('Your message was sent successfully!');
            form.reset(); 
        } else {
            showModal('Oops! There was an error sending your message.');
        }
    } catch (error) {
        showModal('Failed to send message. Please try again later.');
    }
});



