//import sass styling
import "./App.scss";

//import Pages

//import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/"/>
        <Route path="/recipes/:id"/>
      </Routes>
    </Router>
  </div>
  );
}