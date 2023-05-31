import { Link } from "react-router-dom";

export default function Recipe() {
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
