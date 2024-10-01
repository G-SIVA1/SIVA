// Change background color of the sections when hovering
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = getRandomColor();
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = '#fff'; // Reset to white after hover
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

// Add theme toggle button to switch between light and dark mode
const themeButton = document.createElement('button');
themeButton.innerText = 'Toggle Theme';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '10px';
themeButton.style.right = '10px';
themeButton.style.backgroundColor = '#4CAF50';
themeButton.style.color = 'white';
themeButton.style.border = 'none';
themeButton.style.padding = '10px 20px';
themeButton.style.borderRadius = '4px';
themeButton.style.cursor = 'pointer';
document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode styles
const style = document.createElement('style');
style.innerHTML = `
    body.dark-mode {
        background-color: #333;
        color: #fff;
    }
    body.dark-mode section {
        background-color: #444;
    }
    body.dark-mode header, body.dark-mode footer {
        background-color: #222;
    }
    body.dark-mode button {
        background-color: #45a049;
    }
    body.dark-mode nav ul li a {
        color: #fff;
    }
`;
document.head.appendChild(style);

// Display an alert when the contact form is submitted
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Message sent successfully!'); // Show success message
    this.reset(); // Reset form fields
});
