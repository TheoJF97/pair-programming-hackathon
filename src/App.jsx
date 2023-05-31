//import sass styling
import "./App.scss";

//import Pages
import RecipePage from "./pages/RecipePage/RecipePage";
import HomePage from "./pages/HomePage/HomePage";

//import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const { REACT_APP_SERVER_URL: serverUrl } = process.env;

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios
      .get(`${serverUrl}/`)
      .then(({ data }) => {
        console.log(data);
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (recipes.length === 0) {
    return <h1>LOADING</h1>;
  }

  console.log(recipes);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route
            path="/recipes/:recipeId"
            element={<RecipePage recipes={recipes} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
