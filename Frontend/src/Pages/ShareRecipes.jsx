import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import desh1 from '../assets/desh3.png'
import desh2 from '../assets/desh6.png'
import desh3 from '../assets/desh8.png'
import { useNavigate } from 'react-router-dom'

const ShareRecipes = () => {
  const navigate = useNavigate()
  const navigateShareRecipe = ()=>{
    navigate('/shareRecipe')
  }
  return (
    <div>
        <Navbar/>
      
        <div className="yourRecipes flex-col sm:flex-row flex justify-between mx-7 mt-6 items-center">
          <div className="heading font-rightcious font-semibold text-[35px] sm:text-[48px]">
            YOUR RECIPES
          </div>
          <div className="btn">
            <button className='px-5 py-2  bg-[#DB8A89] rounded-2xl hover:bg-[#bc7675] text-white ' onClick={navigateShareRecipe}>Share New Recipes</button>
          </div>
        </div>



        <div className="imgs grid grid-cols-1 sm:grid-cols-3 sm:gap-x-6 gap-y-5 mt-6 place-content-center mx-3 place-items-center">
          <div className="img1">
            <img src={desh1}
            className='w-[250px]'
            alt="" />
            <div className="btns flex sm:flex-row flex-col justify-center items-center mt-4 sm:gap-x-6">
              <button className='bg-white text-[#DB8A89] border border-[#DB8A89] font-inter px-6 rounded-2xl hover:bg-slate-50  font-semibold py-2'>Delete</button>
              <button className='bg-[#DB8A89] hover:bg-[#bc7372] text-white px-6 py-2 rounded-2xl' onClick={navigateShareRecipe}>Edit</button>
            </div>
          </div>
          <div className="img2">
            <img src={desh2}
            className='w-[250px]'
            alt="" />
            <div className="btns flex sm:flex-row flex-col justify-center items-center mt-4 sm:gap-x-6">
              <button className='bg-white text-[#DB8A89] border border-[#DB8A89] font-inter px-6 rounded-2xl hover:bg-slate-50  font-semibold py-2'>Delete</button>
              <button className='bg-[#DB8A89] hover:bg-[#bc7372] text-white px-6 py-2 rounded-2xl' onClick={navigateShareRecipe}>Edit</button>
            </div>
          </div>
          <div className="img3">
            <img src={desh3}
            className='w-[250px]'
            alt="" />
            <div className="btns flex sm:flex-row flex-col justify-center items-center mt-4 sm:gap-x-6">
              <button className='bg-white text-[#DB8A89] border border-[#DB8A89] font-inter px-6 rounded-2xl hover:bg-slate-50  font-semibold py-2'>Delete</button>
              <button className='bg-[#DB8A89] hover:bg-[#bc7372] text-white px-6 py-2 rounded-2xl' onClick={navigateShareRecipe}>Edit</button>
            </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default ShareRecipes
