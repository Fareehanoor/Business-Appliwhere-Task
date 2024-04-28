// Function to handle form submission for adding cities and towns
function handleAddCityAndTown(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const town = document.getElementById('town').value;

    // Placeholder for sending data to server
    // Replace this with actual AJAX request to send data to server
    console.log(`Adding city: ${city}, town: ${town}`);
}

// Function to handle form submission for adding business category
function handleAddBusinessCategory(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;

    // Placeholder for sending data to server
    // Replace this with actual AJAX request to send data to server
    console.log(`Adding business category: ${category}`);
}

// Function to handle form submission for adding business profile
function handleAddBusinessProfile(event) {
    event.preventDefault();
    const businessName = document.getElementById('business-name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const town = document.getElementById('town').value;
    const contact = document.getElementById('contact').value;
    const website = document.getElementById('website').value;
    const socialMedia = document.getElementById('social-media').value;

    // Placeholder for sending data to server
    // Replace this with actual AJAX request to send data to server
    console.log(`Adding business profile: ${businessName}, ${category}, ${description}, ${address}, ${city}, ${town}, ${contact}, ${website}, ${socialMedia}`);
}

// Event listeners for form submissions
document.getElementById('add-city-town-form').addEventListener('submit', handleAddCityAndTown);
document.getElementById('add-business-category-form').addEventListener('submit', handleAddBusinessCategory);
document.getElementById('add-business-profile-form').addEventListener('submit', handleAddBusinessProfile);
