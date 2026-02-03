
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Function to apply theme
    const applyTheme = (theme) => {
        if(document.body) {
            document.body.dataset.theme = theme;
        }
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
            } else {
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
            }
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Theme toggle event listener
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.dataset.theme || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const gender = document.querySelector('input[name="gender"]:checked').value;

            if (isNaN(weight) || isNaN(height)) {
                alert('Please enter valid numbers for weight and height.');
                return;
            }

            const url = `supplements.html?weight=${weight}&height=${height}&gender=${gender}`;
            window.location.href = url;
        });
    }
});
