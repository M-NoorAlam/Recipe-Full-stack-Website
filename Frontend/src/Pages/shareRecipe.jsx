import React, { useState } from 'react';
import Hambur from '../assets/Hambur.svg';
import HamburClose from '../assets/HamburClose.svg';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const ShareRecipe = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [buttonText, setButtonText] = useState("Add Your Recipe");
  const [editable, setEditable] = useState(false); // Controls input editability
  const [ingredients, setIngredients] = useState({
    ingredient1: "Default Ingredient 1",
    ingredient2: "Default Ingredient 2",
  });
  const [cookingNotes, setCookingNotes] = useState({
    note1: "Default Cooking Note 1",
    note2: "Default Cooking Note 2",
  });

  const navigate = useNavigate();

  const handleSaveToggle = () => {
    if (buttonText === "Add Your Recipe") {
      setButtonText("Save");
      setEditable(true); // Enable inputs
    } else {
      setButtonText("Add Your Recipe");
      setEditable(false); // Disable inputs
    }
  };

  const handleIngredientsChange = (e) => {
    const { name, value } = e.target;
    setIngredients((prev) => ({ ...prev, [name]: value }));
  };

  const handleCookingNotesChange = (e) => {
    const { name, value } = e.target;
    setCookingNotes((prev) => ({ ...prev, [name]: value }));
  };

  const handleHamburgerToggle = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar flex justify-between items-center mx-5 my-1">
        <div className="logo">
          <h1 className="font-rightcious font-semibold md:text-2xl sm:text-xl">
            NUTRITION MAPPER
          </h1>
        </div>
        <div className="nav">
          <nav>
            <ul className="sm:flex gap-x-6 font-inter font-semibold sm:text-[12px] md:text-[15px] hidden">
              <li
                className="cursor-pointer font-inter text-black hover:underline"
                onClick={() => navigate("/home")}
              >
                Home
              </li>
              <li
                className="cursor-pointer font-inter text-black hover:underline"
                onClick={() => navigate("/recipes")}
              >
                Recipes
              </li>
              <li
                className="cursor-pointer font-inter text-[#DB8A89] underline"
                onClick={() => navigate("/shareRecipes")}
              >
                Share Recipes
              </li>
              <li
                className="cursor-pointer font-inter text-black hover:underline"
                onClick={() => navigate("/contactUs")}
              >
                Contact Us
              </li>
            </ul>
          </nav>
        </div>

        {!hamburgerToggle ? (
          <div className="hamburger relative">
            <img
              src={Hambur}
              onClick={handleHamburgerToggle}
              className="sm:hidden mx-5 block"
              alt="Open Menu"
            />
          </div>
        ) : (
          <div>
            <img
              src={HamburClose}
              className="sm:hidden mx-5 block"
              onClick={handleHamburgerToggle}
              alt="Close Menu"
            />
            <div className="nav text-sm font-inter sm:hidden absolute z-0 bg-white/95 w-[50%] h-[30%] px-3 py-2">
              <nav>
                <ul className="flex flex-col">
                  <li
                    className="cursor-pointer font-inter text-black hover:underline"
                    onClick={() => navigate("/home")}
                  >
                    Home
                  </li>
                  <li
                    className="cursor-pointer font-inter text-[#DB8A89] hover:underline"
                    onClick={() => navigate("/recipes")}
                  >
                    Recipes
                  </li>
                  <li
                    className="cursor-pointer font-inter text-black hover:underline"
                    onClick={() => navigate("/shareRecipes")}
                  >
                    Share Recipes
                  </li>
                  <li
                    className="cursor-pointer font-inter text-black hover:underline"
                    onClick={() => navigate("/contactUs")}
                  >
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Main */}
      <div className="main mt-9 mx-11">
        <div className="header flex sm:flex-row flex-col justify-between items-center">
          <div className="heading">
            <h1 className="font-rightcious font-semibold text-[30px] text-center sm:text-start sm:text-[48px]">
              CREATE NEW RECIPE
            </h1>
          </div>
          <div className="btn">
            <button
              onClick={handleSaveToggle}
              className="bg-[#DB8A89] hover:bg-[#c27371] text-white px-7 py-2 rounded-2xl"
            >
              {buttonText}
            </button>
          </div>
        </div>

        <div className="form w-full sm:w-1/2 flex flex-col gap-6 m-auto p-6 mt-9">
          <form action="#">

          <div className="heading">
                            <h3 className='font-rightcious text-[25px] font-semibold'>RECIPE</h3>
                        </div>
                        <div className="input mt-6">
                            <input type="text"
                                placeholder='Recipe Title'
                                className='w-full border border-gray-300 py-2 px-3 rounded-xl' />
                        </div>

                        <div className="mt-7">
                            <input
                                type="file"
                                className="w-full h-[150px] border border-gray-300 rounded-xl p-2"
                                placeholder='recipe img'
                            />
                            <div className="btn mt-4">
                                <button className='bg-white text-[#DB8A89] border border-[#DB8A89] sm:px-2 px-5 py-2 rounded-3xl hover:font-semibold font-inter'> <span className='font-semibold text-xl block'>+</span> Add Photo</button>
                            </div>
                        </div>

                        <div className="desc mt-5">
                            <input type="text"
                            placeholder='Description'
                            className='w-full h-20 border border-gray-300 py-2 px-3 rounded-xl' />
                        </div>

            {/* Ingredients */}
            <div className="ingredients flex flex-col gap-5 mt-4">
              <h3 className="font-rightcious font-semibold text-[27px]">
                INGREDIENTS
              </h3>
              <input
                type="text"
                name="ingredient1"
                value={ingredients.ingredient1}
                onChange={handleIngredientsChange}
                disabled={!editable}
                className="w-full border border-gray-300 py-2 px-3 rounded-xl"
              />
              <input
                type="text"
                name="ingredient2"
                value={ingredients.ingredient2}
                onChange={handleIngredientsChange}
                disabled={!editable}
                className="w-full mt-3 border border-gray-300 py-2 px-3 rounded-xl"
              />
              <div className="btn">
                <button
                  type="button"
                  className="bg-white text-[#DB8A89] border border-[#DB8A89] px-4 py-1 rounded-2xl hover:font-semibold font-inter"
                >
                  + Add
                </button>
              </div>
            </div>

            {/* Cooking Notes */}
            <div className="cookingNotes flex flex-col gap-5 mt-4">
              <h3 className="font-rightcious font-semibold text-[27px]">
                COOKING NOTES
              </h3>
              <input
                type="text"
                name="note1"
                value={cookingNotes.note1}
                onChange={handleCookingNotesChange}
                disabled={!editable}
                className="w-full border border-gray-300 py-2 px-3 rounded-xl"
              />
              <input
                type="text"
                name="note2"
                value={cookingNotes.note2}
                onChange={handleCookingNotesChange}
                disabled={!editable}
                className="w-full mt-3 border border-gray-300 py-2 px-3 rounded-xl"
              />
              <div className="btn">
                <button
                  type="button"
                  className="bg-white text-[#DB8A89] border border-[#DB8A89] px-4 py-1 rounded-2xl hover:font-semibold font-inter"
                >
                  + Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShareRecipe;
