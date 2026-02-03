
# Blueprint: Supplement Dose Calculator

## Overview

This application is a web-based calculator to determine the recommended maximum daily dosage of a supplement based on user-provided data: weight, height, and gender. The interface is designed to be clean, intuitive, and responsive, ensuring a seamless experience on both desktop and mobile devices.

## Design and Features

### **Visual Design**
- **Layout:** A centered, card-based layout for the calculator form, creating a modern and focused user experience.
- **Color Palette:** A vibrant and energetic color scheme with a primary blue for interactive elements, a neutral dark gray for text, and a soft off-white background. A subtle noise texture is applied to the background for a premium feel.
- **Typography:** The "Poppins" font is used for its clean and modern look. Font sizes are used hierarchically to guide the user's attention, with a large hero title, clear labels, and easily readable body text.
- **Effects:**
    - **Shadows:** Multi-layered drop shadows on the main calculator card to make it appear "lifted" from the page.
    - **Glow Effect:** A subtle glow effect on the "Calculate" button to indicate interactivity.
- **Iconography:** Icons are used for the gender selection to improve usability and visual appeal.

### **Functionality**
- **Input Form:** The application features a simple form with the following inputs:
    - **Weight:** Number input (in kg).
    - **Height:** Number input (in cm).
    - **Gender:** Radio buttons for "Male" and "Female".
- **Calculation:** A "Calculate" button triggers the dosage calculation. The placeholder formula is: `Dosage (mg) = (Weight in kg * 10) + (Height in cm * 2.5)`. A gender-based multiplier is applied to the final result (1.1 for Male, 1.0 for Female).
- **Result Display:** The calculated maximum dosage is displayed dynamically on the page without requiring a refresh.

### **Accessibility**
- **Labels:** All form inputs have clear, associated labels.
- **Responsive Design:** The layout adapts to different screen sizes, ensuring usability on mobile devices.
- **Focus States:** Interactive elements have clear focus states for keyboard navigation.

## Current Plan

1.  **HTML (`index.html`):**
    -   Set up the basic structure with a container for the calculator.
    -   Create the form with input fields for weight, height, and gender.
    -   Add a button to submit the form and a `div` to display the result.
2.  **CSS (`style.css`):**
    -   Apply the visual design, including layout, colors, fonts, and effects.
    -   Ensure the design is responsive using media queries.
3.  **JavaScript (`main.js`):**
    -   Add an event listener to the "Calculate" button.
    -   Implement the logic to read input values.
    -   Calculate the supplement dosage using the placeholder formula.
    -   Update the DOM to display the calculated result.
