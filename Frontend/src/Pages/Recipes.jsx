import React from 'react'
import Navbar from '../components/Navbar'
import desh1 from '../assets/desh1.png'
import desh2 from '../assets/desh2.png'
import desh3 from '../assets/desh3.png'
import desh4 from '../assets/desh4.png'
import desh5 from '../assets/desh5.png'
import desh6 from '../assets/desh6.png'
import desh7 from '../assets/desh7.png'
import desh8 from '../assets/desh8.png'
import desh9 from '../assets/desh9.png'
import desh10 from '../assets/desh10.png'
import desh11 from '../assets/desh11.png'
import desh12 from '../assets/desh12.png'

import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Recipes = () => {
  const navigate = useNavigate()
  const navigateRecipe = () =>{
    navigate('/recipe')
  }
  return (
    <div>
      <Navbar/>
      <div className="mx-8 flex sm:flex-row flex-col items-center justify-around mt-8">
        <div className="heading">
          <h1 className='font-rightcious font-semibold text-[33px] md:text-[45px]'>RECIPES</h1>
        </div>
        <div className="search">
          <input type="search"
          placeholder='Search'
          className='border border-gray-300 px-5 py-2 rounded-2xl sm:w-[300px]'
           />
        </div>
      </div>


 {/* deshes  */}
<div className="deshes grid grid-cols-2 gap-7 sm:grid-cols-3 place-content-center place-items-center mx-6 mt-9 ">
  <div className="desh1">
    <img
    src={desh1} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 1 picture" />
  </div>

  <div className="desh2">
    <img
    src={desh2} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 2 picture" />
  </div>

  <div className="desh3">
    <img
    src={desh3} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 3 picture" />
  </div>

  <div className="desh4">
    <img
    src={desh4} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 4 picture" />
  </div>

  <div className="desh5">
    <img
    src={desh5} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 5 picture" />
  </div>

  <div className="desh6">
    <img
    src={desh6} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 6 picture" />
  </div>

  <div className="desh7">
    <img
    src={desh7} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 7 picture" />
  </div>

  <div className="desh8">
    <img
    src={desh8} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 8 picture" />
  </div>

  <div className="desh9">
    <img
    src={desh9} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 9 picture" />
  </div>

  <div className="desh10">
    <img
    src={desh10} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 10 picture" />
  </div>

  <div className="desh11">
    <img
    src={desh11} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 11 picture" />
  </div>

  

  <div className="desh12">
    <img
    src={desh12} 
    className='cursor-pointer w-[200px] sm:w-[330px]' 
    onClick={navigateRecipe}
    alt="Desh 12 picture" />
  </div>

  
</div>
<Footer/>
    </div>
  )
}

export default Recipes
