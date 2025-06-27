function toggleDarkMode() {
    const html = document.documentElement;
    const modeIcon = document.getElementById('mode-icon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch to light mode
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // Change icon to moon (for light mode)
        modeIcon.className = 'fa-solid fa-sun';
    } else {
        // Switch to dark mode
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        // Change icon to sun (for dark mode)
        modeIcon.className = 'fa-solid fa-moon';
    }
}

// Load saved theme and icon on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const modeIcon = document.getElementById('mode-icon');
    
    // Set the theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set correct icon based on saved theme
    if (savedTheme === 'dark') {
        // Dark mode = show sun icon
        modeIcon.className = 'fa-solid fa-moon';
    } else {
        // Light mode = show moon icon
        modeIcon.className = 'fa-solid fa-sun';
    }
});