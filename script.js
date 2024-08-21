function showSection(sectionId) {
    const sections = document.querySelectorAll('article');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Initially hide all sections except home
window.onload = function() {
    const sections = document.querySelectorAll('article');
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.style.display = 'none';
        }
    });
};