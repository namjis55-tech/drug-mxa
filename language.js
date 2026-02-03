
document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = localStorage.getItem('language') || 'en';

    const loadLanguage = async (lang) => {
        try {
            const response = await fetch('languages.json');
            if (!response.ok) {
                throw new Error(`Failed to load languages.json: ${response.statusText}`);
            }
            const languages = await response.json();
            const langData = languages[lang];

            if (langData) {
                document.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (langData[key]) {
                        element.textContent = langData[key];
                    }
                });
                document.documentElement.lang = lang;
            }
        } catch (error) {
            console.error('Error loading or applying language:', error);
        }
    };

    const setLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        loadLanguage(lang);
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initial load
    loadLanguage(currentLanguage);
});
