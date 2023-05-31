//import components
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Recipe from "../../components/Recipe/Recipe";

export default function RecipePage({ recipes }) {
  const { recipeId } = useParams();

  // const currentRecipe = recipes.find(recipes[Number(recipeId)-1].id === recipeId);
  const currentRecipe = recipes.find((recipe) => {
    return recipe.id === Number(recipeId);
  });

  console.log(currentRecipe);

  return (
    <>
      <Header />;
      <Recipe currentRecipe={currentRecipe} />
    </>
  );
}
