// Show the clicked section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Function to toggle language (You can add your own implementation)
function toggleLanguage() {
    alert("Language toggle functionality to be added.");
    // You can add logic here to change the language (for example, switch to Bengali)
}
