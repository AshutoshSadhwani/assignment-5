// script.js

// Function to generate a random category short name
function generateRandomCategoryShortName() {
    // Array of possible category short names
    var categories = ["Lunch", "Dinner", "Sushi", "Drinks", "Desserts"];
    
    // Generate a random index to select a category from the array
    var randomIndex = Math.floor(Math.random() * categories.length);
    
    // Return the randomly selected category short name
    return categories[randomIndex];
}

// Function to load menu items for a given category
function loadMenuItems(categoryShortName) {
    // Logic to load menu items for the given category
    console.log("Loading menu items for category: " + categoryShortName);
}

// Function to handle click on Specials tile
function handleSpecialsTileClick() {
    // Generate a random category short name
    var randomCategoryShortName = generateRandomCategoryShortName();
    
    // Load menu items for the random category
    loadMenuItems(randomCategoryShortName);
}

// Attach event listener to Specials tile
document.getElementById("specials-tile").addEventListener("click", handleSpecialsTileClick);

