/*///// Get references to the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Get references to all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add scroll event listener to the window
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Get the current scroll position
        let offset = sec.offsetTop - 150; // Calculate the offset position for each section
        let height = sec.offsetHeight; // Get the height of each section
        let id = sec.getAttribute('id'); // Get the ID of each section

        // Check if the current scroll position is within the section's boundaries
        if (top >= offset && top < (offset + height)) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove the 'active' class from all links
                let activeLink = document.querySelector('header nav a[href*='+id+']');
                if (activeLink) {
                    activeLink.classList.add('active'); // Add the 'active' class to the current link
                }
            });
        }
    });
};

// Toggle the 'active' class on the navbar when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class for the menu icon
    navbar.classList.toggle('active'); // Toggle the 'active' class for the navbar
};*/

// Get references to the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Get references to all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add scroll event listener to the window
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Get the current scroll position
        let offset = sec.offsetTop - 150; // Calculate the offset position for each section
        let height = sec.offsetHeight; // Get the height of each section
        let id = sec.getAttribute('id'); // Get the ID of each section

        // Check if the current scroll position is within the section's boundaries
        if (top >= offset && top < (offset + height)) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove the 'active' class from all links
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active'); // Add the 'active' class to the current link
                }
            });
        }
    });
};

// Toggle the 'active' class on the navbar when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class for the menu icon
    navbar.classList.toggle('active'); // Toggle the 'active' class for the navbar
};

// Function to show the custom modal alert
function showModal(message) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalAlert = document.getElementById('modal-alert');
    const alertMessage = document.getElementById('alert-message');
    
    // Set the alert message text
    alertMessage.textContent = message;
    
    // Show the modal overlay and alert by adding the 'show' class
    modalOverlay.classList.add('show');
    modalAlert.classList.add('show');
}

// Event listener to close the alert modal
document.getElementById('alert-button').addEventListener('click', () => {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalAlert = document.getElementById('modal-alert');
    
    // Hide the modal overlay and alert by removing the 'show' class
    modalOverlay.classList.remove('show');
    modalAlert.classList.remove('show');
});

// Form submission handler
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

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
            // Show success alert
            showModal('Your message was sent successfully!');
            form.reset(); // Reset the form fields after successful submission
        } else {
            // Show error alert
            showModal('Oops! There was an error sending your message.');
        }
    } catch (error) {
        // Show error alert in case of network failure
        showModal('Failed to send message. Please try again later.');
    }
});



