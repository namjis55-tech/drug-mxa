
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const weight = urlParams.get('weight');
    const height = urlParams.get('height');
    const gender = urlParams.get('gender');

    console.log('User data:', { weight, height, gender });

    // You can now use this data to customize the supplement pages.
    // For example, you could pass it on to the individual supplement pages.
    const supplementLinks = document.querySelectorAll('.supplement-item');
    supplementLinks.forEach(link => {
        link.href += `?weight=${weight}&height=${height}&gender=${gender}`;
    });
});
