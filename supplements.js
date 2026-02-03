
document.addEventListener('DOMContentLoaded', () => {
    const weight = localStorage.getItem('weight');
    const height = localStorage.getItem('height');
    const gender = localStorage.getItem('gender');

    console.log('User data from localStorage:', { weight, height, gender });

    // You can now use this data to customize the supplement pages.
    // For example, you could pass it on to the individual supplement pages.
    const supplementLinks = document.querySelectorAll('.supplement-item');
    supplementLinks.forEach(link => {
        if (weight && height && gender) {
            link.href += `?weight=${weight}&height=${height}&gender=${gender}`;
        }
    });
});
