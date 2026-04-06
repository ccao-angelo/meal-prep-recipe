import { useState, useEffect } from 'react';
import './App.css';

const API_KEY = import .meta.env.VITE_APP_API_KEY;

function App() {
  // STATE VARIABLES
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [dietFilter, setDietFilter] = useState('All');

  // USEEFFECT HOOK TO FETCH RECIPES
  useEffect(() => {
    const fetchBakingRecipes = async () => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&type=dessert,bread&addRecipeInformation=true&number=20`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        setRecipes(data.results);
        setFilteredRecipes(data.results);
      } catch (error) {
        console.error('Oops! Something went wrong fetching the recipes:', error);
      }
    };
    
    fetchBakingRecipes();
    
  }, []);

  // FILTERING LOGIC
  useEffect (() => {
    let results = recipes;

    // 1. FILTER BY SEARCH INPUT
    if (searchInput !== '') {
      results = results.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  // 2. FILTER BY DIETARY PREFERENCE
  if (dietFilter !== 'All') {
    results = results.filter((recipe) => recipe[dietFilter] === true);
  }

  setFilteredRecipes(results);
  }, [searchInput, dietFilter, recipes]);

  // SUMMARY STATISTICS

  // 1. TOTAL NUMBER OF BAKES
  const totalBakes = filteredRecipes.length;

  // 2. AVERAGE PREP TIME
  const totalMinutes = filteredRecipes.reduce((sum, recipe) => sum + recipe.readyInMinutes, 0);
  const averageTime  = totalBakes > 0 ? Math.round(totalMinutes / totalBakes) : 0;

  // 3. PERCENTAGE OF VEGETARIAN BAKES
  const vegCount = filteredRecipes.filter(recipe => recipe.vegetarian === true).length;
  const vegPercentage = totalBakes > 0 ? Math.round((vegCount / totalBakes) * 100) : 0;

  // RECIPE DETAILS
  return (
    <div className="App">
      <header>
        <h1><span className='emoji-logo'>🥐</span> The API Bake-Off</h1>
        <p className='subtitle'>Discover, filter, and bake your next masterpiece.</p>
      </header>

      <div className='stats-container'>
        <div className='stat-card'>
          <h2>Total Bakes</h2>
          <p>{totalBakes}</p>
        </div>
        <div className='stat-card'>
          <h2>Average Prep Time</h2>
          <p>{averageTime} mins</p>
        </div>
        <div className='stat-card'>
          <h2>Vegetarian Bakes</h2>
          <p>{vegPercentage}%</p>
        </div>
      </div>

      <div className='filter-container'>
        <input
          type='text'
          placeholder='🔍 Search for a bake...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='search-input'
        />

        <select
          value={dietFilter}
          onChange={(e) => setDietFilter(e.target.value)}
          className='diet-select'
        >
          <option value='All'>All Diets</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
          <option value='glutenFree'>Gluten Free</option>
        </select>  
      </div>

      <div className='recipe-container'>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div className='recipe-card' key={recipe.id}>
              <a href={recipe.sourceUrl} target='_blank' rel='noopener noreferrer' className='image-wrapper'>
                <img src={recipe.image} alt={recipe.title} />
                <div className='image-overlay'>
                  <span>View Recipe 🍽️</span>
                </div>
              </a>
              <div className='recipe-info'>
                <h3>{recipe.title}</h3>
                <div className='recipe-tags'>
                  <span className='tag time'>⏱️ {recipe.readyInMinutes} mins</span>
                  {recipe.vegetarian && <span className='tag veg'>🌱 Vegetarian</span>}
                </div>  
              </div>
            </div>
          ))
        ) : (
          <div className='loading-state'>
            <p>No bakes found! Preheating the oven, or try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;