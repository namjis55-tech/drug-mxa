
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const userInfoBtn = document.getElementById('user-info-btn');
    const userInfoModal = document.getElementById('user-info-modal');
    const closeBtn = document.querySelector('.close-btn');
    const userInfoForm = document.getElementById('user-info-form');

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

    // User Info Modal Logic
    if (userInfoBtn) {
        userInfoBtn.addEventListener('click', () => {
            if (userInfoModal) userInfoModal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (userInfoModal) userInfoModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == userInfoModal) {
            userInfoModal.style.display = 'none';
        }
    });

    const saveUserInfo = (weight, height, gender) => {
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        localStorage.setItem('gender', gender);
    };

    const loadUserInfo = () => {
        const weight = localStorage.getItem('weight');
        const height = localStorage.getItem('height');
        const gender = localStorage.getItem('gender');

        if (weight) document.getElementById('modal-weight').value = weight;
        if (height) document.getElementById('modal-height').value = height;
        if (gender) {
            const genderRadioButton = document.getElementById(`modal-${gender}`);
            if (genderRadioButton) {
                genderRadioButton.checked = true;
            }
        }
    };

    if(userInfoForm) {
        userInfoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const weight = document.getElementById('modal-weight').value;
            const height = document.getElementById('modal-height').value;
            const gender = document.querySelector('input[name="modal-gender"]:checked').value;
            saveUserInfo(weight, height, gender);
            if (userInfoModal) userInfoModal.style.display = 'none';
        });
    }
    
    // Load user info into modal on page load
    loadUserInfo();

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

            saveUserInfo(weight, height, gender);
            window.location.href = 'supplements.html';
        });
    }
});
