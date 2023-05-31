export default function Recipe({ currentRecipe }) {
  //array of strings
  const ingredients = currentRecipe.ingredients;

  const instructions = currentRecipe.instructions;

  return (
    <div className="recipe context">
      <h1 className="recipe__name">{currentRecipe.name}</h1>
      <img
        src={currentRecipe.imageSrc}
        alt={currentRecipe.name}
        className="recipe__image"
      />
      <h3 className="recipe__ingredients">Ingredients</h3>
      <ul className="recipe__ingredients-list">
        {ingredients.map((ingredient) => (
          <li className="recipe__ingredient">{ingredient}</li>
        ))}
      </ul>

      <h3 className="recipe__instructions">Instructions</h3>
      <ul className="recipe__instructions-list">
        {instructions.map((instruction) => (
          <li className="recipe__instruction">{instruction}</li>
        ))}
      </ul>
    </div>
  );
}
