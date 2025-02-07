// Select elements
const searchBtn = document.getElementById('searchBtn');
const ingredientInput = document.getElementById('ingredientInput');
const recipeResults = document.getElementById('recipeResults');
const darkModeToggle = document.getElementById('darkModeToggle');
const backToSearchBtn = document.getElementById('backToSearch');

// TheMealDB API endpoint
const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

// Search button event listener
searchBtn.addEventListener('click', () => {
    const ingredient = ingredientInput.value.trim();
    if (ingredient) {
        fetchRecipes(ingredient);
    } else {
        alert("Please enter at least one ingredient!");
    }
});

// Fetch recipes from API
function fetchRecipes(ingredient) {
    recipeResults.innerHTML = "<p>Loading recipes...</p>";
    fetch(`${API_URL}${ingredient}`)
        .then(response => response.json())
        .then(data => {
            recipeResults.innerHTML = "";
            if (data.meals) {
                displayRecipes(data.meals);
            } else {
                recipeResults.innerHTML = "<p>No recipes found. Try different ingredients!</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            recipeResults.innerHTML = "<p>Something went wrong. Please try again later.</p>";
        });
}

// Display recipes in UI
function displayRecipes(meals) {
    recipeResults.innerHTML = ""; // Clear previous results

    meals.forEach(meal => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
        `;

        recipeResults.appendChild(recipeCard);
    });

    // Show "Back to Search" button when results appear
    backToSearchBtn.classList.remove('hidden');
}

// Scroll back to search input when button is clicked
backToSearchBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.search-box').offsetTop - 20,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference from local storage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
