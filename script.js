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
};


