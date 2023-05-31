import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
// import Recipe from "../../components/Recipe/Recipe";
import axios from "axios";
import { useEffect, useState } from "react";

const { REACT_APP_SERVER_URL: serverUrl } = process.env;

//The HomePage() will display all the images as clickable cards that will
//  direct the user to the recipe's details (ingredients and recipes)
export default function HomePage({ recipes }) {
  return (
    <>
      <Header />
      <div className="recipes">
        {recipes.map((recipe) => (
          <div className="recipes__card">
            <Link to={`/recipes/${recipe.id}`} className="recipe__link">
              <img
                src={recipe.imageSrc}
                alt={recipe.name}
                className="recipe__image"
              />
              <h2 className="recipe__name">{recipe.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
