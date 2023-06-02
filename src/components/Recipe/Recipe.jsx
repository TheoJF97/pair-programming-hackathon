export default function Recipe({ currentRecipe }) {
  console.log(currentRecipe.imageSrc);

  //array of strings
  const ingredients = currentRecipe.ingredients;

  const instructions = currentRecipe.instructions;

  return (
    <div className="recipe context">
      <h1 className="recipe__name">{currentRecipe.name}</h1>
      <img
        src={currentRecipe.imageSrc}
        alt={currentRecipe.name}
        className="recipe__image2"
      />
      <h4 className="recipe__time">
        Preparation Time: {currentRecipe.preparationTime}
      </h4>

      <h4 className="recipt__rating">Rating: {currentRecipe.rating}</h4>

      <div className="recipe__information">
        <div className="recipe__ingredients">
          <h3 className="recipe__ingredients-title">Ingredients</h3>
          <ul className="recipe__ingredients-list">
            {ingredients.map((ingredient) => (
              <li className="recipe__ingredient">{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe__instructions">
          <h3 className="recipe__instructions-title">Instructions</h3>
          <ol className="recipe__instructions-list">
            {instructions.map((instruction) => (
              <li className="recipe__instruction">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
