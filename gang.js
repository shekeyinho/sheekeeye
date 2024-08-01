// Function to show the appropriate section based on button clicks
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for navigation buttons
document.getElementById('homeButton').addEventListener('click', function() {
    showSection('homeSection');
});

document.getElementById('aboutMeButton').addEventListener('click', function() {
    showSection('aboutMeSection');
});

document.getElementById('contactsButton').addEventListener('click', function() {
    showSection('contactsSection');
});

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get form data

    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        // Display success message or handle errors
        alert(result);
        document.getElementById('contactForm').reset(); // Reset form fields
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the form submission.');
    });
});
