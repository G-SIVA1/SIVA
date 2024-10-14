// Set the initial background color of the page to black
document.body.style.backgroundColor = '#000';

// Change background color of the sections when hovering
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = getRandomColor();
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = ''; // Reset to default after hover
    });
});

// Change the color of the navbar links when clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        document.querySelectorAll('nav ul li a').forEach(l => l.style.color = 'white'); // Reset all links
        link.style.color = getRandomColor(); // Change clicked link color
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to section
    });
});

// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Display an alert when the contact form is submitted
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Message sent successfully!'); // Show success message
    this.reset(); // Reset form fields
});
