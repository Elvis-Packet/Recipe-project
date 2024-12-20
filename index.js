// DOM Elements: Select essential HTML elements for interaction
const searchBtn = document.getElementById('searchBtn'); // Button to trigger recipe search
const ingredientInput = document.getElementById('ingredientInput'); // Input field for ingredients
const recipeResults = document.getElementById('recipeResults'); // Container to display recipe results
const darkModeToggle = document.getElementById('darkModeToggle'); // Button to toggle dark mode

// TheMealDB API endpoint: Base URL for fetching recipes based on ingredients
const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

// Event Listener for Search Button Click
// Listens for a click event on the "Search" button
searchBtn.addEventListener('click', () => {
    const ingredient = ingredientInput.value.trim(); // Get user input and remove extra spaces
    if (ingredient) {
        fetchRecipes(ingredient); // Fetch recipes if input is provided
    } else {
        alert("Please enter at least one ingredient!"); // Alert user if input is empty
    }
});

// Function to Fetch Recipes
// Fetches recipe data from TheMealDB API based on the ingredient provided
function fetchRecipes(ingredient) {
    recipeResults.innerHTML = "<p>Loading recipes...</p>"; // Display loading message
    fetch(`${API_URL}${ingredient}`) // Make API call with the ingredient
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            recipeResults.innerHTML = ""; // Clear loading message
            if (data.meals) {
                displayRecipes(data.meals); // Display recipes if found
            } else {
                recipeResults.innerHTML = "<p>No recipes found. Try different ingredients!</p>"; // Show message if no recipes are found
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error); // Log errors in the console
            recipeResults.innerHTML = "<p>Something went wrong. Please try again later.</p>"; // Show error message to the user
        });
}

// Function to Display Recipes
// Displays the fetched recipes in a card format
function displayRecipes(meals) {
    meals.forEach(meal => {
        const recipeCard = document.createElement('div'); // Create a container for each recipe
        recipeCard.classList.add('recipe-card'); // Add a class for styling

        // Add recipe content (image, title, link) inside the card
        recipeCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"> <!-- Recipe image -->
            <h3>${meal.strMeal}</h3> <!-- Recipe title -->
            <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a> <!-- Link to the full recipe -->
        `;

        // Add Hover Effect Listeners
        // Highlight the recipe card when hovered
        recipeCard.addEventListener('mouseover', () => {
            recipeCard.classList.add('highlight'); // Add highlight effect
        });
        recipeCard.addEventListener('mouseout', () => {
            recipeCard.classList.remove('highlight'); // Remove highlight effect
        });

        recipeResults.appendChild(recipeCard); // Add the recipe card to the results container
    });
}

// Dark Mode Toggle
// Toggles dark mode for the application when the button is clicked
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Add or remove the "dark-mode" class on the body
});