//import components
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";

export default function RecipePage({ recipes }) {
  const { recipeId } = useParams();

  console.log(typeof Number(recipeId));

  // const currentRecipe = recipes.find(recipes[Number(recipeId)-1].id === recipeId);
  const currentRecipe = recipes.find((recipe) => {
    return recipe.id === Number(recipeId);

    console.log(typeof recipe.id); //num
    console.log(typeof recipeId); //string
  });

  console.log(currentRecipe);

  return;
  <>
    <Header />;
  </>;
}
