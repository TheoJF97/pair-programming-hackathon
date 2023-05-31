import { Link } from "react-router-dom";
import './Recipe.scss';
export default function Recipe(recipe) {
  return (
    <div className="recipe">
      <Link to="/recipeId" className="recipe__link" >
        <img
          src={recipe.imageSrc}
          alt={recipe.name}
          className="recipe__image"
        />
        <h2 className="recipe__name">{recipe.name}</h2>
      </Link>
    </div>
  );
}
