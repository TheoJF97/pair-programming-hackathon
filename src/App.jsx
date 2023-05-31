//import sass styling
import "./App.scss";

//import Pages
import RecipePage from "./pages/RecipePage/RecipePage";
import HomePage from "./pages/HomePage/HomePage";

//import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:recipeId" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}
