import NavBar from "./Components/Common/NavBar";
import Home from "./pages/Hello";
import './App.css';
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecepieDetails from "./Components/RecipeDetails";


function App():any {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:recipeId" element={<RecepieDetails />} />
            </Routes>
        </Router>
    );
}

export default App;