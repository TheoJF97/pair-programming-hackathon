import { Link } from "react-router-dom";
import "./HomePage.scss";
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
      <div className="recipes context">
        {recipes.map((recipe) => (
          <div className="recipes__card">
            <Link to={`/recipes/${recipe.id}`} className="recipe__link">
              <div class="card">
                <div class="header">
                  <img
                    src={recipe.imageSrc}
                    alt={recipe.name}
                    className="recipe__image"
                  />
                  <div class="icon">
                    <a href="#">
                      <i class="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div class="text">
                  <h1 class="food">{recipe.name}</h1>
                  <i class="fa fa-clock-o">{recipe.preparationTime}</i>
                  <i class="fa fa-users">{recipe.rating}</i>

                  <div class="stars">
                    <li>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star-o"></i>
                      </a>
                    </li>
                  </div>
                  <p class="info">
                    {/* {recipe.ingredients} */}
                  </p>
                </div>
                <a href="#" class="btn">
                  Let's Cook!
                </a>
              </div>

            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
