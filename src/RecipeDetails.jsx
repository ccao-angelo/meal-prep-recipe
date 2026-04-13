import { useState, useEffect  } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function RecipeDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setDetails(data);
        };
        fetchRecipeDetails();
    }, [id]);

    if (!details) return <h2 className='loading-state'>Mixing ingredients...</h2>;

    return (
        <div className='recipe-detail-page'>
            <Link to='/' className='back-button'>🔙 Back to Dashboard</Link>

            <div className='detail-header'>
                <h1>{details.title}</h1>
                <img src={details.image} alt={details.title} className='detail-image' />
            </div>

            <div className='detail-info'>
                <div className='ingredients-card'>
                    <h2>Ingredients</h2>
                    <ul>
                        {details.extendedIngredients.map((ing) => (
                            <li key={ing.id}>{ing.original}</li>
                        ))}
                    </ul>
                </div>

                <div className='stats-card'>
                    <h2>Bake Stats</h2>
                    <p>⏱️ Ready in: {details.readyInMinutes} minutes</p>
                    <p>🍽️ Servings: {details.servings}</p>
                    <p>❣️ Health Score: {details.healthScore}</p>
                </div>
            </div>
        </div>
    );
}