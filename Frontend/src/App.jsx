import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import ShareRecipes from "./Pages/ShareRecipes";
import ContactUs from "./Pages/ContactUs";
import Recipe from './Pages/Recipe'
import ShareRecipe from "./Pages/shareRecipe";
function App() {
 
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/shareRecipes" element={<ShareRecipes />} />
        <Route path="/shareRecipe" element={<ShareRecipe />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
