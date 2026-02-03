
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');
    const dosageValueSpan = document.getElementById('dosage-value');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const gender = document.querySelector('input[name="gender"]:checked').value;

        if (isNaN(weight) || isNaN(height)) {
            alert('Please enter valid numbers for weight and height.');
            return;
        }

        // Placeholder formula: (Weight in kg * 10) + (Height in cm * 2.5)
        let dosage = (weight * 10) + (height * 2.5);

        // Apply gender-based multiplier
        if (gender === 'male') {
            dosage *= 1.1; // 10% more for males
        } else {
            dosage *= 1.0; // No change for females
        }

        dosageValueSpan.textContent = dosage.toFixed(2);
        resultDiv.style.display = 'block';
    });
});
