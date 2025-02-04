function showPetals() {
    let petalsContainer = document.querySelector('.petals-container');
    let logo = document.querySelector('.logo');
    let logoRect = logo.getBoundingClientRect(); // Get logo's position on the screen
    let numPetals = 20;

    // Get the center position of the logo
    let logoCenterX = logoRect.left + logoRect.width / 2;
    let logoCenterY = logoRect.top + logoRect.height / 2;

    // Ensure petals start from the center of the logo
    for (let i = 0; i < numPetals; i++) {
        let petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Randomize the angle and distance to make petals move outward
        let angle = Math.random() * 2 * Math.PI;  // Random angle (0 to 360 degrees)
        let distance = Math.random() * 150 + 100; // Distance from the center (100px to 250px)

        // Calculate the x and y position of the petal based on angle and distance
        let x = Math.cos(angle) * distance;  // x offset
        let y = Math.sin(angle) * distance;  // y offset

        // Set the position of the petal relative to the center of the logo
        petal.style.left = `${logoCenterX - 10}px`;  // Start at the logo center (minus half the size of the petal for proper centering)
        petal.style.top = `${logoCenterY - 10}px`;  // Same as above for vertical centering

        // Set custom properties for animation
        petal.style.setProperty('--x', `${x}px`);
        petal.style.setProperty('--y', `${y}px`);

        // Append the petal to the petals container
        petalsContainer.appendChild(petal);

        // Remove petal after animation (2 seconds)
        setTimeout(() => {
            petal.remove();
        }, 2000); // Matches the duration of the petal animation
    }
}
