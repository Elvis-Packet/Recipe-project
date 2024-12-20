# Recipe Finder

Recipe Finder is a web application that helps users search for recipes based on ingredients they have. It fetches recipe data from TheMealDB API and displays it in an easy-to-navigate interface. Users can toggle between light and dark modes for a personalized experience.

## Features

- Search for recipes using ingredients.
- Displays recipe results with images, titles, and links to full recipes.
- Interactive recipe cards with hover effects.
- Dark mode toggle for a better viewing experience.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling the application and adding visual effects.
- **JavaScript**: For application logic and API interaction.
- **TheMealDB API**: For fetching recipe data.

## Setup Instructions

1. Clone the repository to your local machine.
2. Ensure you have the following project file structure:

   ```
   project-directory/
   ├── index.html
   ├── index.css
   ├── index.js
   ├── images/
       └── Recipe_image.png
   ```

3. Open `index.html` in any modern web browser to run the application.

## How to Use

1. Enter one or more ingredients in the input field (e.g., "chicken").
2. Click the **Search** button.
3. View the results displayed as recipe cards:
   - Each card shows an image, the recipe name, and a link to view the full recipe.
4. Hover over a recipe card to see a highlight effect.
5. Click the **Dark Mode** button to toggle between light and dark themes.

## Code Overview

### HTML Structure

- The main container includes a title, a dark mode toggle button, a search input, and a results section.

### CSS Highlights

- **Dark Mode**: Adds a darker background and lighter text for comfortable viewing.
- **Recipe Cards**: Styled with borders, shadows, and hover animations.

### JavaScript Logic

1. **Event Listeners**:
   - `searchBtn`: Listens for clicks to fetch recipes.
   - `darkModeToggle`: Toggles dark mode on and off.
2. **API Interaction**:
   - Fetches recipes from TheMealDB API using the user-provided ingredients.
   - Displays results dynamically in the `recipeResults` container.
3. **Error Handling**:
   - Displays messages for loading, no results, or fetch errors.

### Sample API Call

TheMealDB API is used to fetch recipes. Example:

```javascript
const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
fetch(`${API_URL}chicken`)
  .then(response => response.json())
  .then(data => console.log(data));
```


## Future Enhancements

- Add filters for cuisine type, cooking time, and difficulty.
- Allow users to save favorite recipes.
- Enhance the UI for a more immersive experience.
